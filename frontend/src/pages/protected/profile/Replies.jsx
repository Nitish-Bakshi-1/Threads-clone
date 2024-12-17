import React from "react";
import Comments from "../../../components/home/post/Comments";
import { Stack, useMediaQuery } from "@mui/material";

const Replies = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <Stack
      flexDirection={"column"}
      gap={2}
      width={_700 ? "800px" : "90%"}
      mx={"auto"}
    >
      <Comments />
    </Stack>
  );
};

export default Replies;
