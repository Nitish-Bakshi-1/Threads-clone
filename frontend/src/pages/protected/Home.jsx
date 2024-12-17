import React from "react";
import { Stack, TextField } from "@mui/material";
import Input from "../../components/home/Input";
import Post from "../../components/home/Post";
const Home = () => {
  return (
    <Stack>
      <Input />
      <Stack flexDirection={"column"} gap={2} mb={10}>
        <Post />
        <Post />
        <Post />
      </Stack>
    </Stack>
  );
};

export default Home;
