import React from "react";

const AirInfoCard = ({ weatherData }) => {
  return (
    <div
      className="infoCard"
      style={{
        backgroundImage: "url(/images/wind.jpg)",
        flex: "1",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          src="/images/snow.svg"
          alt="wind"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
        <div>
          <p className="infoHeadAir">Air Info</p>
          <p
            style={{
              color: "white",
            }}
          >
            How's the wind like?
          </p>
        </div>
      </div>
      <p className="airInfo">{weatherData?.main.pressure}</p>
      <div
        style={{
          background: "white",

          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <p
          style={{
            color: "black",
            fontWeight: "600",
            fontSize: "20px",
          }}
        >
          Wind Speed: {weatherData?.wind?.speed} km/h
        </p>
      </div>
    </div>
  );
};

export default AirInfoCard;
