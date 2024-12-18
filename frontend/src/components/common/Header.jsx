import { Grid, Stack } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { TiThMenu } from "react-icons/ti";
import { useMediaQuery } from "@mui/material";

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
            width={60}
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

          <TiThMenu size={32} className="image-icon" color="grey" />
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
          <Grid
            container
            height={60}
            justifyContent={"flex-end"}
            alignItems={"center"}
            p={1}
          >
            <Grid xs={6}>
              <img
                src="/Threads-logo-white-bg.png"
                alt="logo"
                width={60}
                height={35}
              />
            </Grid>
            <TiThMenu size={32} className="image-icon" color="grey" />
          </Grid>
        </>
      )}
    </>
  );
};

export default Header;
