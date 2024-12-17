import React from "react";
import { Button, Stack, TextField, useMediaQuery } from "@mui/material";
import Input from "../../components/home/Input";
import Post from "../../components/home/Post";
const Home = () => {
  return (
    <>
      <Stack>
        <Input />
        <Stack
          flexDirection={"column"}
          width={"60%"}
          mx={"auto"}
          gap={2}
          mb={10}
        >
          <Post />
          <Post />
          <Post />
        </Stack>
      </Stack>
      <Button
        size="large"
        sx={{ my: 5, p: 3, textDecoration: "underline", cursor: "pointer" }}
      >
        Load More
      </Button>
    </>
  );
};

export default Home;
