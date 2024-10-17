import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";

const ChatHeader = ({ title, toggleUser, currentUser }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(45deg, #3f51b5, #5c6bc0)",
        color: "white",
        padding: "20px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", letterSpacing: "0.05em" }}>
        {title}
      </Typography>
      <IconButton onClick={toggleUser}>
        <Avatar sx={{ backgroundColor: "#007bff", cursor: "pointer" }}>
          {currentUser === "user1" ? "U1" : "U2"}
        </Avatar>
      </IconButton>
    </Box>
  );
};

export default ChatHeader;
