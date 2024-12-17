import { Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <>
      {_700 ? (
        <Stack
          flexDirection={"row"}
          height={52}
          alignItems={"center"}
          position={"sticky"}
          top={0}
          justifyContent={"space-around"}
          py={1}
        >
          <img
            src="/Threads-logo-black-bg.webp"
            alt="logo"
            width={90}
            height={50}
          />
          <Stack
            justifyContent={"center"}
            width={"550px"}
            bgcolor={"aliceblue"}
            borderRadius={"0 0 20px 20px"}
            zIndex={2}
            height={96}
          >
            <Navbar />
          </Stack>

          <TiThMenu size={32} className="image-icon" />
        </Stack>
      ) : (
        <>
          <Stack
            position={"fixed"}
            bottom={0}
            justifyContent={"center"}
            width={"100%"}
            height={52}
            p={1}
            bgcolor={"aliceblue"}
            zIndex={2}
          >
            <Navbar />
          </Stack>
        </>
      )}
    </>
  );
};

export default Header;
