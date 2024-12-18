import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  const handleClose = () => {};
  const handleToggleTheme = () => {};
  const handleLogout = () => {};

  return (
    <div>
      <Menu
        anchorEl={""}
        open={true}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleToggleTheme}>Toggle theme</MenuItem>
        <Link to={"/profile/threads/2"} className="Link">
          <MenuItem>My profile</MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default MainMenu;
