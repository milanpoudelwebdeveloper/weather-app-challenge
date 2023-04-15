import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import SearchResults from "./SearchResults";
import { axiosInstance } from "../../axiosConfig";

const NavBar = ({ setLocation }) => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (input.length > 0) {
        axiosInstance
          .get(
            `https://nominatim.openstreetmap.org/search?q=${input}&format=json&addressdetails=1&limit=4`
          )
          .then((res) => {
            setSearchResults(res.data);
          });
      }
    }, 700);
  }, [input]);

  return (
    <nav className="navContainer">
      <div className="avatarContainer">
        <img src="images/avatar.png" alt="avatar" className="avatarImg" />
        <p>
          <span>Hello,</span>
          Good Morning
        </p>
      </div>

      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search places"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <AiOutlineSearch color="#F97F29" size={20} />
        {input && (
          <SearchResults
            searchResults={searchResults}
            setLocation={setLocation}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
