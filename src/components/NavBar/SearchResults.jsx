import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ searchResults, closeSearchResults }) => {
  const navigate = useNavigate();

  const goToDetails = (result) => {
    navigate(
      "/details?placeKey=" + result?.Key + "&placeName=" + result?.LocalizedName
    );
    closeSearchResults();
  };

  return (
    <div className="resultsContainer">
      {searchResults?.slice(0, 5).map((result) => (
        <div
          key={result?.Key}
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
