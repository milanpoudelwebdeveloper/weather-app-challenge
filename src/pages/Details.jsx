import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import SunInfo from "../components/SunInfo/SunInfo";
import ExtendedForecast from "../components/ExtendedForecast/ExtendedForecast";
import { useLocation } from "react-router";
import { axiosInstance } from "../axiosConfig";
import DetailCards from "../components/Details/DetailCards";

const Details = () => {
  const place = new URLSearchParams(useLocation().search).get("placeKey");
  const placeName = new URLSearchParams(useLocation().search).get("placeName");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (place) {
      getWeatherData(place);
    }
  }, [place]);

  const getWeatherData = async (locationKey) => {
    try {
      const weatherResponse = await axiosInstance.get(
        `/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`
      );
      const weatherData = weatherResponse.data;
      setWeatherData(weatherData[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <NavBar />
      <div className="parentWrapper">
        <div>
          <DetailCards weatherData={weatherData} />
          <ExtendedForecast locationKey={place} />
        </div>
        <SunInfo weatherData={weatherData} placeName={placeName} />
      </div>
    </div>
  );
};

export default Details;
