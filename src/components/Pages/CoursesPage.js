import React from 'react';
import TUICourseCard from '../commons/TUICourseCard'; // Adjust the import path as necessary

const courses = [
  {
    image: 'path/to/front-end-image.jpg',
    courseName: 'Front End Development',
    description: 'Learn the fundamentals of front end development including HTML, CSS, and JavaScript.',
  },
  {
    image: 'path/to/backend-image.jpg',
    courseName: 'Back End Development',
    description: 'Dive into server-side programming with Node.js, databases, and APIs.',
  },
  {
    image: 'path/to/mern-stack-image.jpg',
    courseName: 'MERN Stack',
    description: 'Master MongoDB, Express, React, and Node.js to build full-stack applications.',
  },
  {
    image: 'path/to/salesforce-image.jpg',
    courseName: 'Salesforce',
    description: 'Get to know Salesforce and how to use its tools for customer relationship management.',
  },
  {
    image: 'path/to/crm-training-image.jpg',
    courseName: 'CRM Training',
    description: 'Understand customer relationship management systems and how to implement them effectively.',
  },
  {
    image: 'path/to/salesforce-crm-training-image.jpg',
    courseName: 'Salesforce + CRM Training',
    description: 'Combine Salesforce skills with CRM training to optimize your business processes.',
  },
];

const CoursesPage = () => {
  return (
  <div>
  <h2 className="text-xl md:text-2xl font-bold text-primary text-center mb-2">
  Courses
</h2>
  <div className="flex justify-center flex-wrap gap-10 p-4">
  {courses.map((course, index) => (
    <TUICourseCard
      key={index}
      image={course.image}
      courseName={course.courseName}
      description={course.description}
    />
  ))}
</div>
  </div>
  );
};

export default CoursesPage;
