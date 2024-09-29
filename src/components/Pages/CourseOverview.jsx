import React from 'react';
import { useParams } from 'react-router-dom';
import CourseCard from "../commons/TUICourseCardOverview";
import courses from '../../constant/coursedata.json'; // Import the courses array

function CourseOverview() {
  const { id } = useParams(); // Get the id from URL parameters

  // Find the course that matches the id from params
  const course = courses.find((course) => course.id === id);

  // If course not found, show an error message
  if (!course) {
    return <div>Course not found!</div>;
  }

  return <CourseCard course={course} />;
}

export default CourseOverview;
