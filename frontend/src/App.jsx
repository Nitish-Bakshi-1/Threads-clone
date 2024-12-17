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
import Register from "./pages/Register";
import SinglePost from "./pages/protected/SinglePost";

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={<ProtectedLayout />}>
            <Route exact path="" element={<Home />} />
            <Route exact path="post/:id" element={<SinglePost />} />
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
