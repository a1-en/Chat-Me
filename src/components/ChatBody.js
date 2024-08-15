import React from "react";
import Message from "./Message";

const ChatBody = ({ messageList }) => {
  return (
    <div className="chat-body">
      {messageList.map((msg, index) => (
        <Message key={index} message={msg} isSent={msg.isSent} />
      ))}
    </div>
  );
};

export default ChatBody;
