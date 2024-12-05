import { useEffect } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const useWebSocket = (onMessageReceived) => {
  useEffect(() => {
    const client = new Client({
      brokerURL: "ws://localhost:8080/ws", // Replace with your WebSocket URL
      connectHeaders: {
        "Content-Type": "application/json",
      },
      debug: function (str) {
        console.log(str);
      },
      onConnect: () => {
        client.subscribe("/topic/seats", function (message) {
          onMessageReceived(JSON.parse(message.body));
        });
      },
      onStompError: function (frame) {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error(frame.body);
      },
    });

    client.activate();

    return () => {
      client.deactivate();
    };
  }, [onMessageReceived]);
};

export default useWebSocket;
