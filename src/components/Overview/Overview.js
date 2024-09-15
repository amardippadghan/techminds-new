// src/components/Overview.js

import React from 'react';


const Overview = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 bg-gray-100 min-h-screen">
      {/* Left Side */}
      <div className="lg:w-1/2 p-4 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Online MERN Stack Development and Salesforce Courses
        </h1>
        <p className="text-lg text-gray-600">
          Elevate your skills with our comprehensive online courses on MERN Stack Development and Salesforce.
        </p>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 p-4">
        <img
          src="https://via.placeholder.com/500x300" // Replace with your image URL
          alt="Courses"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Overview;
