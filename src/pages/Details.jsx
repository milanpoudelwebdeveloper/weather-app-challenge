import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import ExtendedForecast from "../components/ExtendedForecast/ExtendedForecast";
import { useLocation } from "react-router";
import { axiosInstance } from "../axiosConfig";
import DetailCards from "../components/Details/DetailCards";
import CountryInfo from "../components/SunInfo/CountryInfo";
import { toast } from "react-toastify";
import Spinner from "../components/Common/Spinner";

const Details = () => {
  const place = new URLSearchParams(useLocation().search).get("placeKey");
  const placeName = new URLSearchParams(useLocation().search).get("placeName");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (place) {
      getWeatherData(place);
    }
  }, [place]);

  const getWeatherData = async (locationKey) => {
    setLoading(true);
    try {
      const weatherResponse = await axiosInstance.get(
        `/currentconditions/v1/${locationKey}?apikey=${apiKey}&details=true`
      );
      const weatherData = weatherResponse.data;
      setWeatherData(weatherData[0]);
      setLoading(false);
    } catch (error) {
      toast.error(error.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <NavBar />
      {loading ? (
        <Spinner />
      ) : (
        <div className="parentWrapper">
          <div>
            <DetailCards weatherData={weatherData} />
            <ExtendedForecast locationKey={place} />
          </div>
          <CountryInfo weatherData={weatherData} placeName={placeName} />
        </div>
      )}
    </div>
  );
};

export default Details;
