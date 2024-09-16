import React from "react";
import "./TUIButton.css";

const TUIButton = ({
  text,
  onClick,
  type = "button",
  className = " custom-button", // Added custom-button class
}) => {
  return (
    <button
      type={type}
      className={`${className} hover:bg-info hover:text-white transition-all duration-300 ease-in-out`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TUIButton;
