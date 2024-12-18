import React from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const PostTwo = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <Stack flexDirection={"column"} justifyContent={"space-between"}>
      <Stack flexDirection={"column"} gap={2}>
        <Stack flexDirection={"column"}>
          <Typography variant="h6" fontSize={"1rem"} fontWeight={"bold"}>
            Nitish-Bakshi
          </Typography>
          <Typography variant="h5" fontSize={"1.2rem"}>
            Hi, gayz *guys wassup
          </Typography>
        </Stack>
        <img
          src="/Threads-logo-white-bg.png"
          Loading={"lazy"}
          width={_700 ? "400px" : "200px"}
          height={"auto"}
          alt=""
        />
      </Stack>
      <Stack flexDirection={"column"} gap={1}>
        <Stack flexDirection={"row"} gap={2} m={1}>
          <FaRegHeart size={_700 ? 32 : 25} />
          <FaRegComment size={_700 ? 32 : 25} />
          <FaRetweet size={_700 ? 32 : 25} />
          <IoMdSend size={_700 ? 32 : 25} />
        </Stack>
        <Stack
          flexDirection={"row"}
          gap={1}
          position={"relative"}
          top={-3}
          left={4}
        >
          <Typography variant="caption" color="GrayText" fontSize={"1.1rem"}>
            2 likes .
          </Typography>
          <Typography variant="caption" color="GrayText" fontSize={"1.1rem"}>
            1 comment{" "}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PostTwo;
