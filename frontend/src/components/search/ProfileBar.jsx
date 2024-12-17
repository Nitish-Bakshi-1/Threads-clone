import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
const ProfileBar = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={1}
        py={2}
        mx={"auto"}
        boxShadow={"5px 5px 5px lightgrey"}
        width={"90%"}
        borderRadius={"15px"}
        sx={{ ":hover": { cursor: "pointer" } }}
      >
        <Stack flexDirection={"row"} gap={2}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"} gap={0.6}>
            <Typography variant="h6" fontWeight={"bold"} fontSize={"1rem"}>
              nb_2123123
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default ProfileBar;
