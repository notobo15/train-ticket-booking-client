"use client";
import React, { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");

    const client = new Client({
      webSocketFactory: () => socket,
      connectHeaders: {},
      debug: (str) => console.log(str),
      onConnect: () => {
        console.log("Connected to WebSocket");

        // Subscribe vào topic /topic/messages để nhận tin nhắn
        client.subscribe("/topic/messages", (message) => {
          setMessages(JSON.parse(message.body)); // Cập nhật danh sách tin nhắn
        });
        client.subscribe("/topic/seats", (message) => {
          const data = JSON.parse(message.body);
          console.log("data", data);
          setMessages(data);
        });
        client.subscribe("/topic/delete/seats", (message) => {
          const data = JSON.parse(message.body);
          console.log("delete", data);
        });
        client.subscribe("/topic/create/seats", (message) => {
          const data = JSON.parse(message.body);
          console.log("create", data);
        });
        client.publish({
          destination: "/app/messages", // Địa chỉ đích yêu cầu lấy danh sách tin nhắn
        });
      },
      onDisconnect: () => {
        console.log("Disconnected from WebSocket");
      },
      onStompError: (frame) => {
        console.error("STOMP Error: ", frame);
      },
    });

    client.activate();
    setStompClient(client);

    return () => {
      if (client) {
        client.deactivate(); // Hủy kết nối khi component unmount
      }
    };
  }, []);

  // Hàm gửi tin nhắn
  const sendMessage = () => {
    if (messageInput && stompClient) {
      if (stompClient.connected) {
        stompClient.publish({
          destination: "/app/chat", // Địa chỉ đích gửi tin nhắn
          body: messageInput,
        });
        setMessageInput(""); // Xóa input sau khi gửi
      } else {
        console.error("STOMP client is not connected");
      }
    } else {
      console.error("Message input is empty or stompClient is not initialized");
    }
  };
  const sendGetList = () => {
    if (stompClient.connected) {
      stompClient.publish({
        destination: "/app/seats", // Địa chỉ đích gửi tin nhắn
        body: JSON.stringify({
          trainId: 1,
          departureStationCode: "HNO",
          arrivalStationCode: "SG",
          seatId: 1,
          carriageId: 1,
          departureDate: "2024-10-15",
        }),
      });
    } else {
      console.error("STOMP client is not connected");
    }
  };
  const sendHold = ({ seatId }) => {
    if (stompClient.connected) {
      stompClient.publish({
        destination: "/app/hold", // Địa chỉ đích gửi tin nhắn
        body: JSON.stringify({
          trainId: 1,
          departureStationCode: "HNO",
          arrivalStationCode: "SG",
          seatId: seatId,
          carriageId: 1,
          departureDate: "2024-10-15",
        }),
      });
    } else {
      console.error("STOMP client is not connected");
    }
  };
  const subscribeToCarriage = (carriageId) => {
    if (stompClient && stompClient.connected) {
      stompClient.subscribe(`/topic/seats/${carriageId}`, (message) => {
        const data = JSON.parse(message.body);
        setSeats(data);
        console.log("Received carriage seats: ", data);
      });
    } else {
      console.error("STOMP client is not connected");
    }
  };

  const sendDeleteHold = ({ seatId }) => {
    if (stompClient.connected) {
      stompClient.publish({
        destination: "/app/delete-hold", // Địa chỉ đích gửi tin nhắn
        body: JSON.stringify({
          trainId: 1,
          departureStationCode: "HNO",
          arrivalStationCode: "SG",
          seatId: seatId,
          carriageId: 1,
          departureDate: "2024-10-15",
        }),
      });
      let result = messages;
      console.log("result", result);
    } else {
      console.error("STOMP client is not connected");
    }
  };
  // useEffect(() => {
  //   // Subscribe vào topic khi component được mount
  //   subscribeToCarriage(carriageId);
  // }, [carriageId, subscribeToCarriage]);
  return (
    <div>
      <h2>STOMP Chat</h2>
      <div>
        {/* {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p>{msg}</p>
            <button onClick={() => deleteMessage(index)} style={{ color: "red" }}>
              Delete
            </button>
          </div>
        ))} */}
      </div>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Enter your message"
      />
      <button onClick={sendMessage}>Send</button>
      <br />
      <button onClick={sendGetList}>Send Get Seats</button>
      <br />

      <button
        onClick={() => {
          sendHold();
          sendGetList();
        }}
      >
        Send Hold
      </button>
      {messages && (
        <div>
          <h4>Seats:</h4>
          <ul>
            {messages?.result?.seats?.map((seat, index) => (
              <li key={index}>
                {seat?.seatNumber} - {seat?.status}{" "}
                <button
                  onClick={() => {
                    sendHold({ seatId: seat.seatId });
                    sendGetList();
                  }}
                  style={{ color: "red" }}
                >
                  booking
                </button>
                <button
                  onClick={() => {
                    sendDeleteHold({ seatId: seat.seatId });
                    sendGetList();
                  }}
                  style={{ color: "red" }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
