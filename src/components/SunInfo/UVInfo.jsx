import React from "react";
import { BsFillSunFill } from "react-icons/bs";

const UVInfo = () => {
  return (
    <div
      style={{
        background: "#1A283E",
        display: "flex",
        borderRadius: "20px",
        padding: "20px",
        alignItems: "center",
        gap: "20px",
        margin: "30px 0",
      }}
    >
      <BsFillSunFill color="#F97F29" size={30} />
      <div
        style={{
          color: "#fff",
        }}
      >
        <p
          style={{
            fontSize: "18px",
          }}
        >
          20 UV
        </p>
        <p
          style={{
            fontSize: "14px",
          }}
        >
          Moderate risk from UV rays
        </p>
      </div>
    </div>
  );
};

export default UVInfo;
