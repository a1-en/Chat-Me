// ChatFooter.js
import React, { useState } from "react";
import "./ChatFooter.css";

const ChatFooter = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendClick = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chat-footer">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSendClick}>
        <i className="fas fa-paper-plane"></i>
        <span>Send</span>
      </button>
    </div>
  );
};

export default ChatFooter;
