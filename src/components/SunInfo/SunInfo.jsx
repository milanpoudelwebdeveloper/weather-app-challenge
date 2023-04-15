import React from "react";
import "./SunInfo.css";
import RainInfo from "../RainInfo/RainInfo";
import { BsFillSunFill } from "react-icons/bs";
import UVInfo from "./UVInfo";

const SunInfo = ({ weatherData }) => {
  const getFormattedTime = (timeStamp) => {
    const date = new Date(timeStamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="sunInfo">
      <div className="topInfo">
        <div>
          <p>Sun</p>
          <p>Kathmandu, Nepal</p>
        </div>

        <p className="temp">22 C</p>
      </div>
      <div className="sunInfoWrapper">
        <BsFillSunFill color="#F97F29" size={40} />
        <div className="headingWrapper">
          <div>
            <p className="heading">Sun rise: </p>
            <p>{getFormattedTime(weatherData?.sys?.sunrise)}</p>
          </div>
          <div>
            <p className="heading">Sun set: </p>
            <p>{getFormattedTime(weatherData?.sys?.sunset)}</p>
          </div>
        </div>
      </div>
      <UVInfo weatherData={weatherData} />
      <RainInfo />
    </div>
  );
};

export default SunInfo;
