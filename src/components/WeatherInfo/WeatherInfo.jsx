import React from "react";
import "./WeatherInfo.css";
import TempInfoCard from "./TempInfoCard";
import AirInfoCard from "./AirInfoCard";

const WeatherInfo = ({ weatherData }) => {
  return (
    <div className="weatherInfo">
      <TempInfoCard weatherData={weatherData} />
      <AirInfoCard weatherData={weatherData} />
    </div>
  );
};

export default WeatherInfo;
