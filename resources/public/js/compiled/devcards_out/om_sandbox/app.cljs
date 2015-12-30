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

(comment
  (om/add-root! reconciler
                Root
                (gdom/getElement "app-root")))