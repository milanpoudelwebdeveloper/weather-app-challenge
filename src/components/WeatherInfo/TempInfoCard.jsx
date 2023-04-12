import React from "react";

const TempInfoCard = () => {
  return (
    <div className="infoCard">
      <p className="infoHead">Weather</p>
      <p>What's the weather</p>
      <p className="degreeInfo">22 C</p>
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

export default TempInfoCard;
