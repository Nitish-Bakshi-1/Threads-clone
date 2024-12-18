import React from "react";
import { Link } from "react-router-dom";
import { Stack, useMediaQuery } from "@mui/material";
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiEditBoxFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

const Navbar = () => {
  const _300 = useMediaQuery("(min-width:300px)");

  return (
    <>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <FiArrowLeft size={_300 ? 32 : 24} className="image-icon" />

        <Link to={"/"} className="Link">
          <MdHome style={{ color: "black" }} size={_300 ? 40 : 32} />
        </Link>
        <Link to={"/search"} className="Link">
          <FaSearch style={{ color: "black" }} size={_300 ? 32 : 24} />
        </Link>
        <Link className="Link image-icon">
          <RiEditBoxFill style={{ color: "black" }} size={_300 ? 32 : 24} />
        </Link>
        <Link className="Link">
          <FaHeart style={{ color: "black" }} size={_300 ? 32 : 24} />
        </Link>
        <Link to={"/profile/threads/1"} className="Link">
          <FaUser style={{ color: "black" }} size={_300 ? 32 : 24} />
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;
