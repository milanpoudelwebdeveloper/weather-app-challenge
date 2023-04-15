import NavBar from "../components/NavBar/NavBar";
import WeatherInfo from "../components/WeatherInfo/WeatherInfo";

import ExtendedForecast from "../components/ExtendedForecast/ExtendedForecast";
import { useEffect, useState } from "react";
import { axiosInstance } from "../axiosConfig";
import CountryInfo from "../components/SunInfo/CountryInfo";
import { toast } from "react-toastify";
import Spinner from "../components/Common/Spinner";
import { units } from "../constants/weatherInfo";

const Home = () => {
  const [unit, setUnit] = useState(units[0]);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [locationKey, setLocationKey] = useState("");
  const [placeName, setPlaceName] = useState("Kathmandu");
  const location = {
    longitude: 85.30014,
    latitude: 27.700769,
  };

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (location?.latitude && location?.longitude) {
      getWeatherData(location.longitude, location.latitude);
    }
  }, []);

  const getWeatherData = async (longitude = 0, latitude = 0) => {
    setLoading(true);
    try {
      const locationResponse = await axiosInstance.get(
        `/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longitude}`
      );
      setPlaceName(locationResponse.data.LocalizedName);
      const locationKey = locationResponse.data.Key;
      setLocationKey(locationKey);
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

  const changeUnit = () => {
    if (unit === units[0]) {
      setUnit(units[1]);
    } else {
      setUnit(units[0]);
    }
  };
  return (
    <div className="container">
      <NavBar changeUnit={changeUnit} selectedUnit={unit} />
      {loading ? <Spinner /> : null}
      <div className="parentWrapper">
        <div className="mainContainer">
          <WeatherInfo weatherData={weatherData} unit={unit} />
          <ExtendedForecast locationKey={locationKey} unit={unit} />
        </div>
        <CountryInfo weatherData={weatherData} placeName={placeName} />
      </div>
    </div>
  );
};

export default Home;
