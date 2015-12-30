(ns om-sandbox.cards.awkay
  (:require
    [cljs.pprint :refer [pprint]]
    [clojure.string :as string]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defn log [& xs] (do
                   (println ">>>")
                   (doseq [x xs] (pprint x))
                   (last xs)))

(def init-data {:bugs [1 2 3]
                :text "hello"})

(def side-state (atom init-data))

(defui Bugs

  static om/IQueryParams
  (params [_]
          {:num 5})

  static om/IQuery
  (query [_]
         '[(:bugs {:num ?num})])

  Object
  (render
    [this]
    (let [{:keys [bugs] :as props} (om/props this)]
      (dom/div nil
               (dom/ul nil
                       (for [bug bugs]
                         (dom/li nil (str bug))))))))

(defui Message

  static om/IQuery
  (query [_]
         [:text])

  Object
  (render
    [this]
    (let [{:keys [text] :as props} (om/props this)]
      (dom/div nil
               (dom/button #js {:onClick
                                (fn [] (om/transact! this '[(change-things {:text "howdy"}) :bugs]))}
                           "change things")
               (dom/h1 nil text)
               ))))

(def make-message (om/factory Message))
(def make-bugs (om/factory Bugs))

(defui Root

  static om/IQuery
  (query [_]
         [{:root/message (om/get-query Message)}
          {:root/bugs (om/get-query Bugs)}])

  Object
  (render
    [this]
    (let [{:keys [root/bugs root/message] :as props} (om/props this)]
      (dom/div nil
               (make-message message)
               (make-bugs bugs)
               ))))

(defmulti read om/dispatch)

(defmethod read :root/bugs
  [{:keys [parser state query] :as env} k params]
  {:value (parser env query)})

(defmethod read :root/message
  [{:keys [parser state query] :as env} k params]
  {:value (parser env query)})

(defmethod read :text
  [{:keys [state] :as env} k params]
  {:value (get @state k)})

(defmethod read :bugs
  [{:keys [state] :as env} k {:keys [num] :as params}]
  {:value (take num (get @state k))})

(defmulti mutate om/dispatch)

(defmethod mutate 'change-things
  [{:keys [state] :as env} k {:keys [text]}]
  (let [st @state
        num-bugs (inc (count (:bugs st)))]
    {:action (fn [] (doseq [s [state]](swap! s #(-> %
                                      (update :text str ", " text)
                                      (update :bugs conj num-bugs)))) )}))


(def parser (om/parser {:read read
                        :mutate mutate}))

(def reconciler (om/reconciler {:state init-data
                                :parser parser}))

(defcard parameterized-query-update
  (om/mock-root reconciler Root))
