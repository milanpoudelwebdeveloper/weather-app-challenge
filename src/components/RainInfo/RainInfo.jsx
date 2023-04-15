import React from "react";
import "./RainInfo.css";

const RainInfo = ({ weatherData }) => {
  const chanceOfRain = weatherData?.HasPrecipitation || false;
  return (
    <div className="rainInfo">
      <p>Today</p>
      <div>
        <p>{chanceOfRain ? "Chance of" : "Less chance of"}</p>
        <p>Rainfall</p>
      </div>
    </div>
  );
};

export default RainInfo;
