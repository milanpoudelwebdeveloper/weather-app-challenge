import NavBar from "../components/NavBar/NavBar";
import WeatherInfo from "../components/WeatherInfo/WeatherInfo";
import SunInfo from "../components/SunInfo/SunInfo";
import ExtendedForecast from "../components/ExtendedForecast/ExtendedForecast";
import { useEffect, useState } from "react";
import { axiosInstance } from "../axiosConfig";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [locationKey, setLocationKey] = useState("");
  const [placeName, setPlaceName] = useState("Kathmandu");
  const location = {
    longitude: 85.30014,
    latitude: 27.700769,
  };

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    getWeatherData(location.longitude, location.latitude);
  }, [location]);

  const getWeatherData = async (longitude = 0, latitude = 0) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <NavBar />
      <div className="parentWrapper">
        <div>
          <WeatherInfo weatherData={weatherData} />
          <ExtendedForecast locationKey={locationKey} />
        </div>
        <SunInfo weatherData={weatherData} placeName={placeName} />
      </div>
    </div>
  );
};

export default Home;
