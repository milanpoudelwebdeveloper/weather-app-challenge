import React from "react";

const AirInfoCard = ({ weatherData }) => {
  return (
    <div className="infoCard airInfo">
      <div>
        <img src="/images/snow.svg" alt="wind" className="infoIcon" />
        <div>
          <p className="infoHead">Air Info</p>
          <p
            style={{
              color: "white",
            }}
          >
            How's the wind like?
          </p>
        </div>
      </div>
      <h1>{weatherData?.main.pressure}</h1>
      <div className="windInfo">
        <p>Wind Speed: {weatherData?.wind?.speed} km/h</p>
      </div>
    </div>
  );
};

export default AirInfoCard;
