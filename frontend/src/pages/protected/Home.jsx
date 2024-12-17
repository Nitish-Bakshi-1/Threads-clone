import React from "react";
import { Stack, TextField } from "@mui/material";
import Input from "../../components/home/Input";
import Post from "../../components/home/Post";
const Home = () => {
  return (
    <div>
      <Input />
      <Stack flexDirection={"column"} gap={2} mb={10}>
        <Post />
      </Stack>
    </div>
  );
};

export default Home;
