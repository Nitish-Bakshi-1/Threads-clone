import React from "react";
import {
  Avatar,
  Stack,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
const ProfileBar = () => {
  const _700 = useMediaQuery("(min-width:700px)");
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        px={1}
        py={2}
        mx={"auto"}
        border={"1px solid lightgrey"}
        width={_700 ? "80%" : "90%"}
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
            <Typography
              variant="h6"
              fontWeight={"bold"}
              fontSize={_700 ? "1rem" : "0.9rem"}
            >
              nb_2123123
            </Typography>
            <Typography
              variant="caption"
              fontSize={_700 ? "1.1rem" : "0.75rem"}
              color={"gray"}
            >
              this is bio....
            </Typography>
            <Typography variant="caption" fontSize={_700 ? "1rem" : "0.9rem"}>
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
