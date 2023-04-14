import React from "react";
import { BsFillSunFill } from "react-icons/bs";

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
    <div
      style={{
        background: "#1A283E",
        display: "flex",
        borderRadius: "20px",
        padding: "20px",
        alignItems: "center",
        gap: "20px",
        margin: "30px 0",
      }}
    >
      <BsFillSunFill color="#F97F29" size={30} />
      <div
        style={{
          color: "#fff",
        }}
      >
        <p
          style={{
            fontSize: "18px",
          }}
        >
          {weatherData?.uvi?.toFixed(1) || 0} UVI index
        </p>
        <p
          style={{
            fontSize: "14px",
          }}
        >
          {uviDesc}
        </p>
      </div>
    </div>
  );
};

export default UVInfo;
