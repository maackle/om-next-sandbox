(ns figwheel.connect (:require [om-sandbox.app] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:5454/figwheel-ws"})

