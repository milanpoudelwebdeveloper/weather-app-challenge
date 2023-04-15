import React from "react";
import "./CountryInfo.css";
import RainInfo from "../RainInfo/RainInfo";
import { BsFillSunFill } from "react-icons/bs";
import UVInfo from "./UVInfo";

const CountryInfo = ({ weatherData, placeName }) => {
  const getFormattedTime = (timeStamp) => {
    const date = new Date(timeStamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };

  return (
    <div className="sunInfo">
      <div className="topInfo">
        <div>
          <p className="place-name">{placeName}</p>
        </div>
      </div>
      <div className="sunInfoWrapper">
        <BsFillSunFill color="#F97F29" size={40} />
        <div className="info-container">
          <p className="time-text">Current Time: </p>
          <p className="time">
            {getFormattedTime(weatherData?.LocalObservationDateTime)}
          </p>
        </div>
      </div>
      <UVInfo weatherData={weatherData} />
      <RainInfo weatherData={weatherData} />
    </div>
  );
};

export default CountryInfo;
