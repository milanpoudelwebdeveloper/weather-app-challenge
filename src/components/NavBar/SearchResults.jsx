import React from "react";
import "./NavBar.css";

const SearchResults = ({ searchResults, setLocation }) => {
  const selectLocation = (result) => {
    setLocation((prev) => ({
      ...prev,
      longitute: result?.lon,
      latitude: result?.lat,
    }));
  };
  return (
    <div className="resultsContainer">
      {searchResults?.map((result) => (
        <div className="resultCard" onClick={() => selectLocation(result)}>
          {result?.display_name}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
