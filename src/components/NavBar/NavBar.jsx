import React from "react";
import Search from "./Search";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navContainer">
      <div className="avatarContainer">
        <img src="images/avatar.png" alt="avatar" className="avatarImg" />
        <p
          style={{
            fontWeight: "600",
            fontSize: "18px",
            flexShrink: "0",
          }}
        >
          <span
            style={{
              fontWeight: "500",
              display: "block",
            }}
          >
            Hello,
          </span>
          Good Morning
        </p>
      </div>

      <Search />
    </nav>
  );
};

export default NavBar;
