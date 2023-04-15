import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { axiosInstance } from "../../axiosConfig";
import SunInfo from "../SunInfo/SunInfo";
import ExtendedForecast from "../ExtendedForecast/ExtendedForecast";

const Details = () => {
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

  const details = [
    {
      id: "1",
      title: "Wind Status",
      value: "10 m/s",
      unit: "m/s",
    },
    {
      id: "2",
      title: "Humidity",
      value: "10%",
      unit: "%",
    },
    {
      id: "3",
      title: "Visibility",
      value: "10 km",
      unit: "km",
    },
    {
      id: "4",
      title: "Air Quality",
      value: "Good",
      unit: "Great",
    },
    {
      id: "5",
      title: "Air Quality",
      value: "Good",
      unit: "Great",
    },
    {
      id: "5",
      title: "Air Quality",
      value: "Good",
      unit: "Great",
    },
  ];
  return (
    <div className="container">
      <NavBar setLocation={setLocation} />
      <div className="parentWrapper">
        <div>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                background: "#f7f7f7",
                padding: "20px",
                gap: "20px",
              }}
            >
              {details?.map((item) => (
                <div
                  style={{
                    background: "white",
                    padding: "20px",
                    height: "max-content",
                  }}
                >
                  <p>{item.title}</p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginTop: "40px",
                      textAlign: "center",
                    }}
                  >
                    {item.value}
                  </p>
                  <p
                    style={{
                      marginTop: "40px",
                    }}
                  >
                    {item.unit}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <ExtendedForecast />
        </div>
        <SunInfo weatherData={weatherData} />
      </div>
    </div>
  );
};

export default Details;
