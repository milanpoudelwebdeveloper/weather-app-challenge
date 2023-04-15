import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import SearchResults from "./SearchResults";
import { axiosInstance } from "../../axiosConfig";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const date = new Date();

  const greetings = () => {
    if (date.getHours() < 12) {
      return "Good Morning";
    } else if (date.getHours() < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (input.length > 0) {
        setOpen(true);
        axiosInstance
          .get(`/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${input}`)
          .then((res) => {
            console.log("the places list are", res.data);
            setSearchResults(res.data);
          });
      }
    }, 900);
  }, [input]);

  const closeSearchResults = () => {
    setOpen(false);
    setInput("");
  };

  return (
    <nav className="navContainer" onClick={closeSearchResults}>
      <Link to="/">
        <div className="avatarContainer">
          <img src="images/avatar.webp" alt="avatar" className="avatarImg" />
          <p>
            <span>Hello,</span>
            {greetings()}
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
        {input && open && (
          <SearchResults
            searchResults={searchResults}
            closeSearchResults={closeSearchResults}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
