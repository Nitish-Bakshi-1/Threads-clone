import React from "react";
import Loading from "./components/common/Loading";
import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/protected/Home";
import Contact from "./pages/protected/Contact";
import Search from "./pages/protected/Search";
import Error from "./pages/Error";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Register />
    </>
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route exact path="/contact" element={<Contact />} />
    //     <Route exact path="/search" element={<Search />} />
    //     <Route path="*" element={<Error />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
