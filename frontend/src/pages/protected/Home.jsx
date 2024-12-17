import React from "react";
import { Stack, TextField } from "@mui/material";
import Input from "../../components/home/Input";
const Home = () => {
  return (
    <div>
      <Input />
      <Stack flexDirection={"column"} gap={2} mb={10}>
        <p>posts</p>
        <p>posts</p>
      </Stack>
    </div>
  );
};

export default Home;
