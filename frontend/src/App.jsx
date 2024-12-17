import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/protected/Home";
import ProtectedLayout from "./pages/protected/ProtectedLayout";
import Search from "./pages/protected/Search";
import { Box } from "@mui/material";
import ProfileLayout from "./pages/protected/profile/ProfileLayout";
import Threads from "./pages/protected/profile/Threads";
import Replies from "./pages/protected/profile/Replies";
import Reposts from "./pages/protected/profile/Reposts";

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProtectedLayout />}>
            <Route exact path="" element={<Home />} />
            <Route exact path="post/:id" element={<h1>posts</h1>} />
            <Route exact path="search" element={<Search />} />
            <Route exact path="profile" element={<ProfileLayout />}>
              <Route exat path="threads/:id" element={<Threads />} />
              <Route exat path="replies/:id" element={<Replies />} />
              <Route exat path="reposts/:id" element={<Reposts />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
