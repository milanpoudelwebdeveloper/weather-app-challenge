import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import SearchResults from "./SearchResults";
import { axiosInstance } from "../../axiosConfig";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (input.length > 0) {
        axiosInstance
          .get(
            `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=bKsUpZYLAYXff9qYXBAcIVEfIWvN8cZY&q=${input}`
          )
          .then((res) => {
            console.log("the places list are", res.data);
            setSearchResults(res.data);
          });
      }
    }, 700);
  }, [input]);

  return (
    <nav className="navContainer">
      <Link to="/">
        <div className="avatarContainer">
          <img src="images/avatar.webp" alt="avatar" className="avatarImg" />
          <p>
            <span>Hello,</span>
            Good Morning
          </p>
        </div>
      </Link>

      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search places"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <AiOutlineSearch color="#F97F29" size={20} />
        {input && <SearchResults searchResults={searchResults} />}
      </div>
    </nav>
  );
};

export default NavBar;
