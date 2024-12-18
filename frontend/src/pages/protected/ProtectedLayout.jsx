import React from "react";
import { Outlet } from "react-router-dom";
import { Stack, useMediaQuery } from "@mui/material";
import Header from "../../components/common/Header";

const ProtectedLayout = () => {
  const _700 = useMediaQuery("(min-width:700px)");

  return (
    <Stack
      flexDirection={"column"}
      maxWidth={_700 ? "800px" : "90%"}
      minWidth={"100%"}
      mx={"auto"}
      overflow={"hidden"}
    >
      <Header />
      {/* <AddPost /> */}
      {/* <EditProfile /> */}
      {/* <MainMenu /> */}
      <Outlet />
    </Stack>
  );
};

export default ProtectedLayout;
