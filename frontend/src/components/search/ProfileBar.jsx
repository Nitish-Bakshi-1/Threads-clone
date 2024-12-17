import React from "react";
import { Avatar, Stack, Typography, Button } from "@mui/material";
const ProfileBar = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={1}
        py={2}
        mx={"auto"}
        border={"1px solid lightgrey"}
        width={"90%"}
        borderRadius={"15px"}
        sx={{
          ":hover": {
            cursor: "pointer",
            transform: "scale(1.01)",
            transition: "all 0.2s ease-in-out ",
            boxShadow: "1px 5px 5px lightgrey",
          },
        }}
      >
        <Stack flexDirection={"row"} gap={2}>
          <Avatar src="" alt="" />
          <Stack flexDirection={"column"}>
            <Typography variant="h6" fontWeight={"bold"} fontSize={"1rem"}>
              nb_2123123
            </Typography>
            <Typography variant="caption" fontSize={"1.1rem"} color={"gray"}>
              this is bio....
            </Typography>
            <Typography variant="caption" fontSize={"1rem"}>
              3 followers
            </Typography>
          </Stack>
        </Stack>
        <Button
          size="medium"
          sx={{
            border: "1px solid gray",
            color: "black",
            borderRadius: "10px",
            p: 2,
            height: 40,
          }}
        >
          Follow
        </Button>
      </Stack>
    </>
  );
};

export default ProfileBar;
