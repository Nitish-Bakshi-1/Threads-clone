import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Link to={"/"} className="Link">
          <MdHome style={{ color: "black" }} size={40} />
        </Link>
        <Link to={"/search"} className="Link">
          <FaSearch style={{ color: "black" }} size={32} />
        </Link>
        <Link className="Link">
          <RiEditBoxFill style={{ color: "black" }} size={32} />
        </Link>
        <Link className="Link">
          <FaHeart style={{ color: "black" }} size={32} />
        </Link>
        <Link to={"/profile/threads/1"} className="Link">
          <FaUser style={{ color: "black" }} size={32} />
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;
