import React from "react";

const TUICourseCard = ({ image, courseName, description }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 border  rounded-lg">
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
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm">Enroll Now</button>
          <button className="btn btn-outline btn-sm">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default TUICourseCard;
