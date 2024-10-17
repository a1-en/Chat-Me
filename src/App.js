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
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  // Toggle user function
  const toggleUser = () => {
    setUser((prevUser) => (prevUser === "user1" ? "user2" : "user1"));
  };

  return (
    <div className="chat-window">
      {/* Pass toggleUser and current user to the ChatHeader */}
      <ChatHeader title="Chat Me" toggleUser={toggleUser} currentUser={user} />
      <MessageList messages={messages} />
      <ChatFooter sendMessage={sendMessage} />
    </div>
  );
};

export default App;
