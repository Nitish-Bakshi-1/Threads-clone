import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Stack
      height={"100vh"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        sx={{
          background: "wheat",
          padding: "2rem",
          "border-radius": "10px",
          gap: "1rem",
        }}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant="h1">OOP'S</Typography>
        <Typography variant="h6">You went to the wrong location</Typography>
        <Button
          sx={{
            color: "white",
            background: "black",
            width: "40%",
            padding: "0.7rem",
            ":hover": {
              cursor: "pointer",
              opacity: "0.8",
            },
          }}
          onClick={() => navigate(-1)}
        >
          Go back
        </Button>
      </Stack>
    </Stack>
  );
};

export default Error;
