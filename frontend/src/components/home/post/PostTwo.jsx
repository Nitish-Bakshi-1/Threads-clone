import React from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";

const PostTwo = () => {
  const _300 = useMediaQuery("(min-width:300px)");
  const _400 = useMediaQuery("(min-width:400px)");
  const _500 = useMediaQuery("(min-width:500px)");
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <Stack flexDirection={"column"} justifyContent={"space-between"}>
      <Stack flexDirection={"column"} gap={2}>
        <Stack flexDirection={"column"}>
          <Typography
            variant="h6"
            fontSize={_300 ? "1rem" : "0.8rem"}
            fontWeight={"bold"}
          >
            Nitish-Bakshi
          </Typography>
          <Link to={"/post/2"} className="Link">
            <Typography
              variant="h5"
              fontSize={
                _700 ? "1.2rem" : _400 ? "1rem" : _300 ? "0.9rem" : "0.8rem"
              }
            >
              Hi, gayz *guys wassup
            </Typography>
          </Link>
        </Stack>
        <img
          src="/Threads-logo-white-bg.png"
          Loading={"lazy"}
          width={
            _700
              ? "400px"
              : _500
              ? "350px"
              : _400
              ? "250px"
              : _300
              ? "180px"
              : "150px"
          }
          height={"auto"}
          alt=""
        />
      </Stack>
      <Stack flexDirection={"column"} gap={1}>
        <Stack flexDirection={"row"} gap={2} m={1}>
          <FaRegHeart size={_700 ? 32 : _300 ? 28 : 24} />
          <FaRegComment size={_700 ? 32 : _300 ? 28 : 24} />
          <FaRetweet size={_700 ? 32 : _300 ? 28 : 24} />
          <IoMdSend size={_700 ? 32 : _300 ? 28 : 24} />
        </Stack>
        <Stack
          flexDirection={"row"}
          gap={1}
          position={"relative"}
          top={-3}
          left={4}
        >
          <Typography
            variant="caption"
            color="GrayText"
            fontSize={_700 ? "1.1rem" : "1rem"}
          >
            2 likes .
          </Typography>
          <Typography
            variant="caption"
            color="GrayText"
            fontSize={_700 ? "1.1rem" : "1rem"}
          >
            1 comment{" "}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PostTwo;
