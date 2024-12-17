import React from "react";
import SearchInput from "../../components/search/SearchInput";
import ProfileBar from "../../components/search/ProfileBar";
import { Stack } from "@mui/material";

const Search = () => {
  return (
    <Stack width={"100%"} height={"100vh"}>
      {/* input */}
      <SearchInput />
      {/* profilebar */}
      <Stack
        flexDirection={"column"}
        gap={1.5}
        mb={5}
        width={"90%"}
        maxWidth={"750px"}
        mx={"auto"}
      >
        <ProfileBar />
        <ProfileBar />
      </Stack>
    </Stack>
  );
};

export default Search;
