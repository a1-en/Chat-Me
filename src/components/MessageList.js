// MessageList.js
import React from "react";
import Message from "./Message";
import "./MessageList.css";

const MessageList = ({ messages }) => {
  return (
    <div className="chat-body">
      {messages.map((msg, index) => (
        <Message key={index} message={msg} isSent={msg.isSent} />
      ))}
    </div>
  );
};

export default MessageList;
