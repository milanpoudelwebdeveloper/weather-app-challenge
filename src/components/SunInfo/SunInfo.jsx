import React from "react";
import "./SunInfo.css";
import Rainfall from "../RainFall/Rainfall";
import { BsFillSunFill } from "react-icons/bs";
import UVInfo from "./UVInfo";

const SunInfo = ({ weatherData }) => {
  const getFormattedTime = (timeStamp) => {
    const date = new Date(timeStamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="sunInfo">
      <div className="topInfo">
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Sun
          </p>
          <p
            style={{
              fontSize: "14px",
            }}
          >
            Kathmandu, Nepal
          </p>
        </div>

        <p
          style={{
            color: "#F97F29",
            fontSize: "30px",
            fontWeight: "600",
          }}
        >
          22 C
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <BsFillSunFill color="#F97F29" size={40} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            padding: "0 40px",
          }}
        >
          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
              Sun rise:{" "}
            </p>
            <p>{getFormattedTime(weatherData?.sys?.sunrise)}</p>
          </div>
          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
              Sun set:{" "}
            </p>
            <p>{getFormattedTime(weatherData?.sys?.sunset)}</p>
          </div>
        </div>
      </div>
      <UVInfo weatherData={weatherData} />
      <Rainfall />
    </div>
  );
};

export default SunInfo;
