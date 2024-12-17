import { Stack, Badge, Avatar, Stepper, AvatarGroup } from "@mui/material";
import React from "react";

const PostOne = () => {
  return (
    <Stack
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <Avatar // + under profile avatar
            alt="+"
            src=""
            sx={{
              width: 20,
              height: 20,
              bgcolor: "black",
              position: "relative",
              right: 4,
              bottom: 4,
            }}
          >
            +
          </Avatar>
        }
      >
        <Avatar
          alt="NB"
          src=""
          sx={{ width: 40, height: 40 }} //users profile avatar
        />
      </Badge>
      <Stack
        flexDirection={"column"}
        alignItems={"center"}
        gap={2}
        height={"100%"}
      >
        <Stepper
          orientation={"vertical"}
          activeStep={0}
          sx={{ border: "0.1rem solid gray", width: "0px", height: "100%" }}
        ></Stepper>
        <AvatarGroup
          total={4}
          sx={{ "& .MuiAvatar-root": { width: 24, height: 24, fontSize: 12 } }}
        ></AvatarGroup>
      </Stack>
    </Stack>
  );
};

export default PostOne;
