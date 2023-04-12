import React from "react";
import Search from "./Search";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navContainer">
      <div className="avatarContainer">
        <img src="images/avatar.png" alt="avatar" className="avatarImg" />
      </div>
      <p>Hello, User</p>
      <Search />
    </nav>
  );
};

export default NavBar;
