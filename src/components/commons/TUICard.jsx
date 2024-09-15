import React from "react";

const TUICard = ({ title, points }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border dark:shadow-lg dark:shadow-gray-600 light:shadow-gray-300 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <ul className="list-disc list-inside">
          {points?.map((point, index) => (
            <li key={index} className="mt-2">
              {point}
            </li>
          ))}
        </ul>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">Enroll Now</button>
          <button className="btn btn-outline btn-sm">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default TUICard;
