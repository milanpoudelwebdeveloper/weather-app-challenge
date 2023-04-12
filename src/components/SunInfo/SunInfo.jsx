import React from "react";
import "./SunInfo.css";
import Rainfall from "../RainFall/Rainfall";
import { BsFillSunFill } from "react-icons/bs";

const SunInfo = () => {
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
      <div>
        <BsFillSunFill color="#F97F29" size={40} />
        <p>Sun rise: </p>
        <p>4 am</p>

        <p>Sun rise: </p>
        <p>4 am</p>
      </div>
      <Rainfall />
    </div>
  );
};

export default SunInfo;
