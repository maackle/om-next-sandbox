(ns om-sandbox.app
  (:require
    [cljs.pprint :refer [pprint]]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [goog.dom :as gdom]))

(enable-console-print!)

(defn log [& xs] (do
                   (println ">>>")
                   (doseq [x xs] (pprint x))
                   (last xs)))

(defui Root
  static om/IQueryParams
  (params [_]
          {:num 10})

  static om/IQuery
  (query [_]
         `[(:bugs {:num ?num}) :message])

  Object
  (render
    [this]
    (let [{:keys [bugs message]} (om/props this)]
      (dom/div nil
               (dom/h1 nil message)
               (dom/button #js {:onClick
                                (fn [] (om/transact! this '[(change-things "howdy") :message :bugs]))}
                           "change stuff")
               (dom/ul nil
                       (for [bug bugs]
                         (dom/li nil (str bug))))))))


(defmulti read om/dispatch)

(defmethod read :message
  [{:keys [state] :as env} k params]
  {:value (get @state k)})

(defmethod read :bugs
  [{:keys [state] :as env} k params]
  {:value (get @state k)})

(defmulti mutate om/dispatch)

(defmethod mutate 'change-things
  [{:keys [state] :as env} k params]
  ; (log k params)
  {:value {:keys []}
   :action #(swap! state update :message "howdy")})

(defmethod mutate :default
  [_ _ _]
  (log "bad mutate"))

(def parser (om/parser {:read read
                        :mutate mutate}))

(def reconciler (om/reconciler {:state {:bugs [1 2 3]
                                        :message "hello"}
                                :parser parser}))


(om/add-root! reconciler
              Root
              (gdom/getElement "app-root"))