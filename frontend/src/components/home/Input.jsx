import React from "react";
import {
  Button,
  Typography,
  Avatar,
  Stack,
  useMediaQuery,
} from "@mui/material";

const Input = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      {_700 ? (
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          width={"50%"}
          height={"28"}
          justifyContent={"space-between"}
          p={3}
          borderBottom={"1px solid grey"}
          my={5}
          mx={"auto"}
        >
          <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
            <Avatar src="" alt="Aj" />
            <Typography color={"GrayText"}>Start a thread....</Typography>
          </Stack>
          <Button
            size={"medium"}
            sx={{
              bgcolor: "gray",
              color: "aliceblue",
              ":hover": {
                bgcolor: "black",
                cursor: "pointer",
              },
            }}
          >
            Post
          </Button>
        </Stack>
      ) : null}
    </>
  );
};

export default Input;
