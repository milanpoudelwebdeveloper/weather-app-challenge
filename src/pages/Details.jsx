import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import SunInfo from "./components/SunInfo/SunInfo";
import ExtendedForecast from "./components/ExtendedForecast/ExtendedForecast";
import { useEffect, useState } from "react";
import { axiosInstance } from "./axiosConfig";
import Details from "../components/Details/Details";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({
    longitude: 85.30014,
    latitude: 27.700769,
  });

  useEffect(() => {
    getWeatherData(location.longitude, location.latitude);
  }, [location]);

  const getWeatherData = (longitude = 0, latitude = 0) => {
    axiosInstance
      .get(
        "weather?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&appid=" +
          import.meta.env.VITE_API_KEY
      )
      .then((res) => {
        setWeatherData(res.data);
        console.log("hey weather data is", res.data);
      })
      .catch((e) => {
        console.log("Something went wrong", e);
      });
  };

  return (
    <div className="container">
      <NavBar setLocation={setLocation} />
      <div className="parentWrapper">
        <div>
          <Details />
          <ExtendedForecast weatherData={weatherData} />
        </div>
        <SunInfo weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
