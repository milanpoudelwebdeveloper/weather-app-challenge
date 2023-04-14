import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import SunInfo from "./components/SunInfo/SunInfo";
import ExtendedForecast from "./components/ExtendedForecast/ExtendedForecast";
import { useEffect, useState } from "react";
import { axiosInstance } from "./axiosConfig";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        axiosInstance
          .get(
            "weather?lat=" +
              position.coords.latitude +
              "&lon=" +
              position.coords.longitude +
              "&appid=" +
              import.meta.env.VITE_API_KEY
          )
          .then((res) => {
            setWeatherData(res.data);
          });
      },
      (err) => {
        console.log("Error getting current location: ", err);
      }
    );
  }, []);
  return (
    <div className="container">
      <NavBar />
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <WeatherInfo weatherData={weatherData} />
          <ExtendedForecast weatherData={weatherData} />
        </div>
        <SunInfo weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
