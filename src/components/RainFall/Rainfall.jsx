import React from "react";

const Rainfall = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        backgroundImage: "url(/images/rainfall.avif)",
        // background: "#DFF297",
        backgroundSize: "cover",
        backgroundPosition: "top right",
        borderRadius: "20px",
        padding: "20px",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        Tomorrow
      </p>
      <div>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Moderate
        </p>
        <p>Rainfall</p>
      </div>
    </div>
  );
};

export default Rainfall;
