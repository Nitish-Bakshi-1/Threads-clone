import React from "react";
import Loading from "./components/common/Loading";
import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/protected/Home";
import Contact from "./pages/protected/Contact";
import Search from "./pages/protected/Search";
import Error from "./pages/Error";
import Register from "./pages/Register";
import { Box } from "@mui/material";
import ProtectedLayout from "./pages/protected/ProtectedLayout";

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProtectedLayout />}>
            <Route exact path="" element={<Home />} />
            <Route exact path="post/:id" element={<h1>posts</h1>} />
            <Route exact path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
