import React from "react";
import "./WeatherInfo.css";
import TempInfoCard from "./TempInfoCard";
import AirInfoCard from "./AirInfoCard";

const WeatherInfo = () => {
  return (
    <div className="weatherInfo">
      <TempInfoCard />
      <AirInfoCard />
    </div>
  );
};

export default WeatherInfo;
