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
import Error from "./pages/Error";

const App = () => {
  const data = false;

  return (
    <Box>
      <BrowserRouter>
        <Routes>
          {data ? (
            <>
              <Route path="/" element={<ProtectedLayout />}>
                <Route index element={<Home />} />
                <Route path="post/:id" element={<SinglePost />} />
                <Route path="search" element={<Search />} />
                <Route path="profile" element={<ProfileLayout />}>
                  <Route path="threads/:id" element={<Threads />} />
                  <Route path="replies/:id" element={<Replies />} />
                  <Route path="reposts/:id" element={<Reposts />} />
                </Route>
              </Route>
            </>
          ) : (
            <Route path="/register" element={<Register />} />
          )}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
