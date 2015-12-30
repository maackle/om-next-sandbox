(ns figwheel.connect (:require [devcards.core :include-macros true] [om-sandbox.cards.index] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:devcards true, :build-id "devcards", :websocket-url "ws://localhost:5454/figwheel-ws"})
(devcards.core/start-devcard-ui!)

