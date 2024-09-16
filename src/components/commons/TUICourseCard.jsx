import React from "react";
import TUIButton from './TUIButton';

const TUICourseCard = ({ image, courseName, description,pointCourse }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-400 border border-purple-400  rounded-lg">
      <figure className="overflow-hidden rounded-t-sm">
        <img
          src={image}
          alt={courseName}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{courseName}</h2>
        <p>{description}</p>
        <ul className="list-disc list-inside">
          {pointCourse?.map((pointCourse, index) => (
            <li key={index} className="mt-2">
              {pointCourse}
            </li>
          ))}
        </ul>
        <div className="card-actions justify-end mt-4">
        <TUIButton text="Enroll Now" />
        <TUIButton text="Read More" />
      </div>
      
      </div>
    </div>
  );
};

export default TUICourseCard;
