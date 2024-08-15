// App.js
import React, { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import MessageList from "./components/MessageList";
import ChatFooter from "./components/ChatFooter";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  // @ts-ignore
  const [user, setUser] = useState("user1"); // Current user ID

  const sendMessage = (text) => {
    const newMessage = {
      text,
      time: new Date().toLocaleTimeString(),
      isSent: user === "user1", // Toggle based on user ID
    };
    // @ts-ignore
    setMessages([...messages, newMessage]);

    // Simulate other user's reply
    setTimeout(() => {
      const reply = {
        text: `Reply to "${text}"`,
        time: new Date().toLocaleTimeString(),
        isSent: user !== "user1",
      };
      // @ts-ignore
      setMessages((prevMessages) => [...prevMessages, reply]);
    }, 1000);
  };

  return (
    <div className="chat-window">
      <ChatHeader title="ChatterBox" />
      <MessageList messages={messages} />
      <ChatFooter sendMessage={sendMessage} />
    </div>
  );
};

export default App;
