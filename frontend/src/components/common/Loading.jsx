import React from "react";
import { Stack, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Stack
      flexDirection={"row"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
      minHeight={"50vh"}
      width={"100%"}
      my={5}
    >
      <CircularProgress color="success" />
    </Stack>
  );
};

export default Loading;
