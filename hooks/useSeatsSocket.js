"use client";
import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const useSeatsSocket = () => {
  const [client, setClient] = useState(null);
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        console.log("Connected to WebSocket");

        // Subscribe để nhận danh sách chỗ ngồi ban đầu
        // stompClient.subscribe("/user/queue/seats", (message) => {
        //   const response = JSON.parse(message.body);
        //   console.log("response", response);
        //   if (response.success) {
        //     setSeats(response.result.seats);
        //   } else {
        //     console.error(response.message);
        //   }
        // });

        // Gửi yêu cầu nhận danh sách chỗ ngồi ban đầu
        stompClient.publish({
          destination: "/app/seat/init",
          body: JSON.stringify(),
        });

        // Subscribe để nhận cập nhật về chỗ ngồi
        stompClient.subscribe("/topic/seats", (message) => {
          const seatUpdate = JSON.parse(message.body);
          // Cập nhật danh sách chỗ ngồi dựa trên seatUpdate
          setSeats((prevSeats) =>
            prevSeats.map((seat) => (seat.seatId === seatUpdate.seatId ? { ...seat, status: seatUpdate.status } : seat))
          );
        });
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
      },
    });

    stompClient.activate();
    setClient(stompClient);

    return () => {
      stompClient.deactivate();
    };
  }, []);

  const toggleSeatStatus = (seat) => {
    if (client && client.active) {
      client.publish({
        destination: "/app/seat/status",
        body: JSON.stringify(seat),
      });
    }
  };

  return {
    seats,
    toggleSeatStatus,
  };
};

export default useSeatsSocket;
