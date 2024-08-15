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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <div className="chat-footer">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSendClick}>
        <i className="fas fa-paper-plane"></i>
        <span>Send</span>
      </button>
    </div>
  );
};

export default ChatFooter;
