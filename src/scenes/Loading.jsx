import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="container">
      <div className="loader-container">
        <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
