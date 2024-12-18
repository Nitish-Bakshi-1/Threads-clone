import React from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { IoIosMore } from "react-icons/io";
import PostOne from "./post/PostOne";
import PostTwo from "./post/PostTwo";
const Post = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-around "}
      border={"1px solid gray"}
      width={"70%"}
      borderRadius={"15px"}
      p={_700 ? 2 : _400 ? 1 : "5px"}
      mx={"auto"}
      sx={{
        ":hover": {
          cursor: "pointer",
          // boxShadow: "6px 1px 40px 6px lightgray",
          transform: "scale(1.02)",
        },
        transition: "all ease-in-out 0.2s",
      }}
    >
      <Stack flexDirection={"row"} gap={5}>
        <PostOne />
        <PostTwo />
      </Stack>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        gap={1}
        fontSize={"1rem"}
      >
        <Typography
          variant="caption"
          color={"GrayText"}
          fontSize={"1rem"}
          position={"relative"}
          top={2}
        >
          24 hours
        </Typography>
        <IoIosMore size={28} />
      </Stack>
    </Stack>
  );
};

export default Post;
