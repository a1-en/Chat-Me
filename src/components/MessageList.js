import React from "react";
import Message from "./Message";
import { Box } from "@mui/material";

const MessageList = ({ messages }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "20px",
        overflowY: "auto",
        backgroundColor: "#f4f7f6",
        borderBottom: "1px solid #e0e0e0",
        position: "relative",
        maxHeight: "100vh",
        '&::-webkit-scrollbar': {
          width: "6px",
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: "#007bff",
          borderRadius: "3px",
        },
        scrollbarWidth: "thin", // for Firefox
        scrollbarColor: "#007bff #f4f7f6",
      }}
    >
      {messages.map((msg, index) => (
        <Message key={index} message={msg} isSent={msg.isSent} />
      ))}
    </Box>
  );
};

export default MessageList;
