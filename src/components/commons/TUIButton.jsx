import React from "react";


const TUIButton = ({
  text,
  onClick,
  type = "button",
  className = "btn btn-info",
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
