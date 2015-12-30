(ns om-sandbox.cards.root-query-bug
  (:require
    [cljs.pprint :refer [pprint]]
    [clojure.string :as string]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(def init-data {:message-text "hello"})

(defui Button

  static om/IQuery
  (query [_] [])

  Object
  (render
    [this]
    (dom/button
      #js {:onClick #(om/transact! this '[(change-message {:text "howdy"}) :message])}
      "change text")))

(defui Root

  static om/IQueryParams
  (params [_]
          {:size 24})

  static om/IQuery
  (query [_]
         '[
           ;; with the following query, the :message read after transact!
           ;; does not cause a re-render of Root
           {(:message {:size ?size}) [:text]}

           ;; but with this query (uncommented), the re-render does take place
           #_{:message [:text]}
           ])

  Object
  (render
    [this]
    (let [{:keys [message] :as props} (om/props this)]
      (dom/div nil
               (dom/h1 nil (:text message))
               ((om/factory Button))))))

(defmulti read om/dispatch)

(defmethod read :message
  [{:keys [parser state query] :as env} k {:keys [size]}]
  {:value {:text (:message-text @state)
           :size size}})

(defmulti mutate om/dispatch)

(defmethod mutate 'change-message
  [{:keys [state] :as env} k {:keys [text]}]
  (let [st @state
        num-bugs (inc (count (:bugs st)))]
    {:action (fn []
               (swap! state update :message-text str ", " text))}))


(def parser (om/parser {:read read
                        :mutate mutate}))

(def reconciler (om/reconciler {:state init-data
                                :parser parser}))

(defcard parameterized-root-query
  (om/mock-root reconciler Root))
