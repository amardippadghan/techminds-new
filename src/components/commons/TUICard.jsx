import React from "react";

const TUICard = ({ title, points, icon }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl border border-purple-400 dark:shadow-lg dark:shadow-gray-600 light:shadow-gray-300 hover:shadow-2xl hover:bg-purple-400 transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="card-body">
        {icon && <div className="text-xl mb-4 flex justify-center">{icon}</div>}
        <h2 className="card-title">{title}</h2>
        <ul className="list-disc list-inside">
          {points?.map((point, index) => (
            <li key={index} className="mt-2">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TUICard;
