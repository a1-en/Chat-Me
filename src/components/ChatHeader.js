// ChatHeader.js
import React from "react";
import "./ChatHeader.css";

const ChatHeader = ({ title }) => {
  return (
    <div className="chat-header">
      <h1>{title}</h1>
    </div>
  );
};

export default ChatHeader;
