import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ searchResults }) => {
  const navigate = useNavigate();

  const goToDetails = (result) => {
    navigate(
      "/details?placeKey=" + result?.Key + "&placeName=" + result?.LocalizedName
    );
  };

  return (
    <div className="resultsContainer">
      {searchResults?.map((result) => (
        <div
          key={result?.key}
          className="resultCard"
          onClick={() => goToDetails(result)}
        >
          {result?.LocalizedName}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
