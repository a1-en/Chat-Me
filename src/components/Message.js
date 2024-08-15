import React from "react";
import "./Message.css";

const Message = ({ message, isSent }) => {
  return (
    <div className={`message ${isSent ? "sent" : "received"}`}>
      <p>{message.text}</p>
      <span>{message.time}</span>
    </div>
  );
};

export default Message;
