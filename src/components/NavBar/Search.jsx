import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./NavBar.css";

const Search = () => {
  return (
    <div className="searchContainer">
      <input type="text" placeholder="Search places" />
      <AiOutlineSearch />
    </div>
  );
};

export default Search;
