import React from "react";
import { useEffect } from "react";
import { axiosInstance } from "../../axiosConfig";

const ExtendedForecast = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      axiosInstance
        .get(
          "forecast/daily?lat=" +
            position.coords.latitude +
            "&lon=" +
            position.coords.longitude +
            "&cnt=7" +
            "&appid=" +
            import.meta.env.VITE_API_KEY
        )
        .then((res) => {
          console.log("hey daily forestcast is", res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }, []);
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
