import React from "react";

const AirInfoCard = () => {
  return (
    <div
      className="infoCard"
      style={{
        backgroundImage: "url(/images/wind.jpg)",
      }}
    >
      <p className="infoHeadAir">Air Info</p>
      <p
        style={{
          color: "white",
        }}
      >
        How's the wind like?
      </p>
      <p className="airInfo">22 C</p>
      <div className="infoContainer">
        <div className="pressure">
          <p className="infoHeading">Pressure</p>
          <p className="infoText">800mb</p>
        </div>
        <div className="visibility">
          <p className="infoHeading">Visibility</p>
          <p className="infoText">4.3 km</p>
        </div>
        <div className="humidity">
          <p className="infoHeading">Humidity</p>
          <p className="infoText">4.3 km</p>
        </div>
      </div>
    </div>
  );
};

export default AirInfoCard;
