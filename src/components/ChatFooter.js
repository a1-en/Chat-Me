import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

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
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        backgroundColor: "#f9f9f9",
        borderTop: "1px solid #e0e0e0",
        boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{
          marginRight: "10px",
          borderRadius: "30px",
          backgroundColor: "#fff",
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
          },
        }}
      />
      <IconButton
        color="primary"
        onClick={handleSendClick}
        sx={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px",
          borderRadius: "50px",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatFooter;
