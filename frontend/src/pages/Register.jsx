import React, { useState } from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Button, TextField } from "@mui/material";

const Register = () => {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const _700 = useMediaQuery("(min-width:700px)");

  const toggleLogin = () => {
    setLogin((pre) => !pre);
  };
  const handleLogin = () => {
    const data = { email, password };
    console.log(data);
  };
  const handleRegister = () => {
    const data = { username, email, password };

    console.log("data");
  };
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
        {_700 ? "Threads" : null}
      </Typography>
      <Stack
        flexDirection={"column"}
        gap={2}
        mt={_700 ? 20 : 0}
        width={_700 ? "40%" : "90%"}
      >
        <Typography
          variant="h5"
          fontSize={_700 ? "1.5rem" : "1rem"}
          alignSelf={"center"}
          sx={{
            borderBottom: "1px solid black",
          }}
        >
          {login ? "Login with email " : "Register with email"}
        </Typography>
        {login ? null : (
          <TextField
            variant="outlined"
            placeholder="enter useraname"
            onChange={(e) => {
              const val = e.target.value;
              setUsername(val);
            }}
          ></TextField>
        )}
        <TextField
          variant="outlined"
          placeholder="enter email"
          onChange={(e) => {
            const val = e.target.value;
            setEmail(val);
          }}
        ></TextField>
        <TextField
          variant="outlined"
          placeholder="enter password"
          onChange={(e) => {
            const val = e.target.value;
            setPassword(val);
          }}
        ></TextField>
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
          onClick={login ? handleLogin : handleRegister}
        >
          {login ? "LOGIN" : "REGISTER"}
        </Button>
        <Typography
          variant="subtitle2"
          fontSize={_700 ? "1.3rem" : "1rem"}
          alignSelf={"center"}
          className="login-link"
        >
          {login ? "Already have an account" : "Don't have an account"}
          <span onClick={toggleLogin} style={{ marginLeft: "0.5rem" }}>
            {login ? "Sign up" : "Login "}
          </span>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Register;
