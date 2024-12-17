import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Stack
      height={"100vh"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      // sx={{
      //   background: "url(/error-bg.png)",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
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
        >
          Go back
        </Button>
      </Stack>
    </Stack>
  );
};

export default Error;
