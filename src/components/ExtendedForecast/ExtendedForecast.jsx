import React from "react";

const ExtendedForecast = () => {
  return (
    <div
      style={{
        background: "#f7f7f7",
        padding: "30px",
        marginTop: "20px",
        borderRadius: "20px",
      }}
    >
      <h2>Extended Forecast</h2>
      <div
        style={{
          display: "flex",
          gap: "80px",
          marginTop: "40px",
        }}
      >
        <div>
          <img src="./images/cloudy.svg" alt="cloudy" />
          <h3>Sunday</h3>
          <p>22 C</p>
        </div>
        <div>
          <img src="./images/haze.svg" alt="cloudy" />
          <h3>Sunday</h3>
          <p>22 C</p>
        </div>
        <div>
          <img src="./images/partly-cloudy.svg" alt="cloudy" />
          <h3>Sunday</h3>
          <p>22 C</p>
        </div>
        <div>
          <img src="./images/rain.svg" alt="cloudy" />
          <h3>Sunday</h3>
          <p>22 C</p>
        </div>
        <div>
          <img src="./images/rain.svg" alt="cloudy" />
          <h3>Sunday</h3>
          <p>22 C</p>
        </div>
        <div>
          <img src="./images/rain.svg" alt="cloudy" />
          <h3>Sunday</h3>
          <p>22 C</p>
        </div>
      </div>
    </div>
  );
};

export default ExtendedForecast;
