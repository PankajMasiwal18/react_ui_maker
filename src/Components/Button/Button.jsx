import React from "react";
import "./Button.css";

export const Button = ({ children, bgColor, btnType, size, fluid }) => {
  return (
    <>
      <button
        className={`button ${bgColor ? bgColor : "blue"} 
        ${size ? size : "medium"}
        ${fluid} `}
      >
        {children}
      </button>
    </>
  );
};
