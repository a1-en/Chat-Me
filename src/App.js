import React, { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import MessageList from "./components/MessageList";
import ChatFooter from "./components/ChatFooter";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("user1");

  const sendMessage = (text) => {
    const newMessage = {
      text,
      time: new Date().toLocaleTimeString(),
      isSent: user === "user1",
    };
    // @ts-ignore
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const toggleUser = () => {
    setUser((prevUser) => (prevUser === "user1" ? "user2" : "user1"));
  };

  return (
    <div className="chat-window">
      <ChatHeader title="ChatterBox" />
      <MessageList messages={messages} />
      <ChatFooter sendMessage={sendMessage} />
      <button onClick={toggleUser} className="user-toggle">
        Switch to {user === "user1" ? "user2" : "user1"}
      </button>
    </div>
  );
};

export default App;
