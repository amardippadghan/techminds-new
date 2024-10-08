import React from "react";
import "./TUIButton.css";

const TUIButton = ({
  text,
  onClick,
  type = "button",
  className = "custom-button",
}) => {
  return (
    <button
      type={type}
      className={`${className} responsive-button px-4 rounded-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TUIButton;
