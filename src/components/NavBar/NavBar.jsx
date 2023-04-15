import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import SearchResults from "./SearchResults";
import { axiosInstance } from "../../axiosConfig";
import { Link } from "react-router-dom";
import UnitType from "../Common/UnitType";
import { toast } from "react-toastify";

const NavBar = ({ changeUnit, selectedUnit }) => {
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
            setSearchResults(res.data);
          })
          .catch((e) => {
            toast.error(
              e.message ||
                "Something went wrong getting places. Please try again"
            );
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
      <div className="wrapper">
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
      </div>
      <UnitType changeUnit={changeUnit} selectedUnit={selectedUnit} />
    </nav>
  );
};

export default NavBar;
