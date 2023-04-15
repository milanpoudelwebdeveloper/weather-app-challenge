import React from "react";
import "./WeatherInfo.css";

const WeatherInfo = ({ weatherData }) => {
  return (
    <div className="weatherInfo">
      <div className="infoCard">
        <div className="labelText">
          <img src="/images/sunny.svg" alt="sunny" />
          <div>
            <p className="infoHead">Weather</p>
            <p>What's the weather</p>
          </div>
        </div>
        <h1>{weatherData?.Temperature["Metric"]?.Value} C</h1>
        <p>{weatherData?.WeatherText}</p>
        <div className="infoContainer">
          <div className="pressure">
            <p className="infoHeading">Pressure</p>
            <p className="infoText">
              {weatherData?.Pressure["Metric"].Value} mb
            </p>
          </div>
          <div className="visibility">
            <p className="infoHeading">Visibility</p>
            <p className="infoText">
              {weatherData?.Visibility["Metric"].Value} km
            </p>
          </div>
          <div className="humidity">
            <p className="infoHeading">Humidity</p>
            <p className="infoText">{weatherData?.RelativeHumidity}</p>
          </div>
        </div>
      </div>
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
        <h1>{weatherData?.Wind?.Speed?.Metric?.Value} km/h</h1>
        <p>{weatherData?.Wind?.Direction?.English} Direction</p>
        <div className="windInfo">
          <p>Wind Gust: {weatherData?.WindGust?.Speed?.Metric?.Value} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
