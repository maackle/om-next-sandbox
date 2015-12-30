(defproject om-sandbox "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [devcards "0.2.1"]
                 [sablono "0.4.0"]
                 [org.omcljs/om "1.0.0-alpha28"]

                 ;; om deps

                 ;; [org.clojure/clojure "1.7.0" :scope "provided"]
                 ;; [org.clojure/clojurescript "1.7.170" :scope "provided"]
                 ;; [cljsjs/react "0.14.3-0"]
                 ;; [cljsjs/react-dom "0.14.3-1"]
                 ;; [com.cognitect/transit-clj "0.8.285"]
                 ;; [com.cognitect/transit-cljs "0.8.237"]
;;
;;                  ;; [org.clojure/core.async "0.2.371" :scope "test"]
;;                  ;; [figwheel-sidecar "0.5.0" :scope "test"]
                 ;; #_[devcards "0.2.0-8" :scope "test"]

                 ]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-1"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]

  :source-paths ["src"]

  :cljsbuild {:builds [{:id "devcards"
                        :source-paths ["src"]
                        :figwheel { :devcards true } ;; <- note this
                        :compiler { :main       "om-sandbox.cards.index"
                                    :asset-path "js/compiled/devcards_out"
                                    :output-to  "resources/public/js/compiled/om_sandbox_devcards.js"
                                    :output-dir "resources/public/js/compiled/devcards_out"
                                    :source-map-timestamp true }}
                       {:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "om-sandbox.app"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/om_sandbox.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "om-sandbox.app"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/om_sandbox.js"
                                   :optimizations :advanced}}]}

  :figwheel {:css-dirs ["resources/public/css"]
             :server-port 5454})
