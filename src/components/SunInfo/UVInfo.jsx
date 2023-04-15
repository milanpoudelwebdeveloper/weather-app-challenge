import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import "./CountryInfo.css";

const UVInfo = ({ weatherData }) => {
  let uviValue = weatherData?.uvi?.toFixed(1) || 0;
  let uviDesc = "No Info Available";

  switch (uviValue) {
    case uviValue < 3:
      uviDesc = "Low";
      break;
    case uviValue >= 3 && uviValue < 6:
      uviDesc = "Moderate";
      break;
    case uviValue >= 6 && uviValue < 8:
      uviDesc = "High";
      break;
    case uviValue >= 8 && uviValue < 11:
      uviDesc = "Very High";
      break;
    default:
      uviDesc = "No Info Available";
  }

  return (
    <div className="uv-info">
      <BsFillSunFill color="#F97F29" size={30} />
      <div>
        <p>{weatherData?.UVIndex || 0} UVI index</p>
        <p className="uvDesc">{weatherData?.UVIndexText} Range of UV</p>
      </div>
    </div>
  );
};

export default UVInfo;
