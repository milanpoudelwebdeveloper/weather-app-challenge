import React from "react";

const TempInfoCard = ({ weatherData }) => {
  console.log("the weather data is: ", weatherData);
  return (
    <div className="infoCard">
      <div
        style={{
          display: "flex",
        }}
      >
        <img src="/images/sunny.svg" alt="sunny" />
        <div>
          <p className="infoHead">Weather</p>
          <p>What's the weather</p>
        </div>
      </div>
      <p className="degreeInfo">{weatherData?.main?.temp}</p>
      <div className="infoContainer">
        <div className="pressure">
          <p className="infoHeading">Pressure</p>
          <p className="infoText">{weatherData?.main?.pressure} mb</p>
        </div>
        <div className="visibility">
          <p className="infoHeading">Visibility</p>
          <p className="infoText">{weatherData?.visibility}</p>
        </div>
        <div className="humidity">
          <p className="infoHeading">Humidity</p>
          <p className="infoText">{weatherData?.main?.humidity}</p>
        </div>
      </div>
    </div>
  );
};

export default TempInfoCard;
