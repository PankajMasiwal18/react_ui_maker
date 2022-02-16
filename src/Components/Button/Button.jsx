import React from "react";
import "./Button.css";

export const Button = ({ children, bgColor, btnType, size }) => {
  return (
    <>
      <button className={`button ${bgColor ? bgColor : "blue"} `}>
        {children}
      </button>
    </>
  );
};
