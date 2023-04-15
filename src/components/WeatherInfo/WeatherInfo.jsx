import React, { useContext } from "react";
import "./WeatherInfo.css";
import { units } from "../../constants/weatherInfo";
import { UnitContext } from "../../Context/UnitContextProvider";

const WeatherInfo = ({ weatherData }) => {
  const { selectedUnit } = useContext(UnitContext);
  console.log("the selected unit is: ", selectedUnit);
  const responseType = selectedUnit === units[0] ? "Metric" : "Imperial";
  const degreeType = selectedUnit === units[0] ? "C" : "F";
  return (
    <div className="weatherInfo">
      <div className="infoCard">
        <div className="labelText">
          <img src="/images/sunny.svg" alt="sunny" />
          <div>
            <h4 className="infoHead">Weather</h4>
            <p>What's the weather</p>
          </div>
        </div>
        <h1>
          {weatherData?.Temperature[responseType]?.Value}&deg; {degreeType}
        </h1>
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
        <div className="labelText">
          <img src="/images/snow.svg" alt="wind" className="infoIcon" />
          <div>
            <h4 className="infoHead">Air Info</h4>
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
        <p>"{weatherData?.Wind?.Direction?.English}" Direction</p>
        <div className="windInfo">
          <p>Wind Gust: {weatherData?.WindGust?.Speed?.Metric?.Value} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
