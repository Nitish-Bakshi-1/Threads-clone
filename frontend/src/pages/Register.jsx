import React from "react";
import { Stack, Typography } from "@mui/material";
import { Button, TextField } from "@mui/material";

const Register = () => {
  return (
    <Stack
      width={"100%"}
      height={"100vh"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography
        sx={{
          fontSize: "10rem",
          fontFamily: "fantasy",
          margin: 0,
          padding: 0,
          zIndex: "0",
          position: "absolute",
          top: "5rem",
        }}
      >
        Threads
      </Typography>
      <Stack flexDirection={"column"} gap={2} mt={20} width={"40%"}>
        <Typography
          variant="h5"
          font-size={"1.5rem"}
          alignSelf={"center"}
          sx={{
            borderBottom: "1px solid black",
          }}
        >
          Signup
        </Typography>
        <TextField variant="outlined" placeholder="enter useraname"></TextField>
        <TextField variant="outlined" placeholder="enter email"></TextField>
        <TextField variant="outlined" placeholder="enter password"></TextField>
        <Button
          size="large"
          sx={{
            height: 52,
            width: "100%",
            bgcolor: "black",
            color: "white",
            fontSize: "1rem",
            ":hover": {
              cursor: "pointer",
              opacity: "0.8",
            },
          }}
        >
          click
        </Button>
      </Stack>
    </Stack>
  );
};

export default Register;
