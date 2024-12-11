import { useState, useEffect } from "react";
import { Client, Message } from "@stomp/stompjs";
import SockJS from "sockjs-client";

// Define types for seat and message data
interface SeatGetListRequest {
  trainId: number;
  departureStationCode: string;
  arrivalStationCode: string;
  carriageId: number;
  departureDate: string;
}
interface SeatRequestData {
  trainId: number;
  departureStationCode: string;
  arrivalStationCode: string;
  seatId: number;
  carriageId: number;
  departureDate: string;
}

interface HoldData {
  message: string;
}

interface SeatHold {
  index: number;
}

const useSeatHold = () => {
  const [stompClient, setStompClient] = useState<Client | null>(null);
  const [seats, setSeats] = useState<APIResponse<any>>();

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");

    const client = new Client({
      webSocketFactory: () => socket,
      connectHeaders: {},
      debug: (str) => console.log(str),
      onConnect: () => {
        console.log("Connected to WebSocket");

        client.subscribe("/topic/seats", (message: Message) => {
          const data = JSON.parse(message.body);
          console.log("Seats Data:", data);
          setSeats(data);
        });
      },
      onDisconnect: () => {
        console.log("Disconnected from WebSocket");
      },
      onStompError: (frame) => {
        console.error("STOMP Error: ", frame);
      },
    });

    // Activate the STOMP client
    client.activate();
    setStompClient(client);

    // Cleanup on unmount
    return () => {
      if (client) {
        client.deactivate();
      }
    };
  }, []);

  // Function to send a message to the server
  const sendMessage = (destination: string, body: object) => {
    if (stompClient && stompClient.connected) {
      stompClient.publish({
        destination: destination,
        body: JSON.stringify(body),
      });
    } else {
      console.error("STOMP client is not connected");
    }
  };

  // Send Get Seats request
  const sendGetList = (data: SeatGetListRequest) => {
    sendMessage("/app/seats", data);
  };

  // Send Hold request
  const sendHold = (data: SeatRequestData) => {
    sendMessage("/app/hold", data);
  };

  // Send Delete Hold request
  const sendDeleteHold = (data: SeatRequestData) => {
    sendMessage("/app/delete-hold", data);
  };

  return {
    seats,
    sendGetList,
    sendHold,
    sendDeleteHold,
  };
};

export default useSeatHold;
