import React from 'react';
import TUICourseCard from '../commons/TUICourseCard';
import frontend from '../../assets/images/frontend.jpg';
import backend from '../../assets/images/backend.png';
import mern from '../../assets/images/mernstack.png';
import salesforce from '../../assets/images/salesforce.png';
import crm from '../../assets/images/crm.png';
import salesforcecrm from '../../assets/images/Salesforce-CRM-development.png';

const courses = [
  {
    image: frontend,
    courseName: 'Front End Development',
    description: 'Learn the fundamentals of front end development including HTML, CSS, and JavaScript.',
    pointCourse: ['Three Months', 'Monday to Sunday', 'Saturday : Quiz', 'Sunday : Program test', 'Fee : 6000'],
    courseID : 'course_002'
  },
  {
    image: backend,
    courseName: 'Back End Development',
    description: 'Dive into server-side programming with Node.js, databases, and APIs.',
    pointCourse: ['Three Months', 'Monday to Sunday', 'Saturday : Quiz', 'Sunday : Program test', 'Fee : 6500'],
    courseID : 'course_003'
  },
  {
    image: mern,
    courseName: 'MERN Stack Development',
    description: 'Master MongoDB, Express, React, and Node.js to build full-stack applications.',
    pointCourse: ['Three Months', 'Monday to Sunday', 'Saturday : Quiz', 'Sunday : Program test', 'Fee : 7000'],
    courseID : 'course_004'
  },
  {
    image: 'https://img-c.udemycdn.com/course/750x422/2492962_f098.jpg', // Example image URL for Web Development
    courseName: 'Web Development Course',
    description: 'Learn the basics of web development with HTML, CSS, and JavaScript.',
    pointCourse: ['Two Months', 'Monday to Friday', 'Saturday : Quiz', 'Sunday : Project', 'Fee : 5000'],
    courseID : 'course_001'
  },
  // Uncomment and add more courses here if needed
  // {
  //   image: salesforce,
  //   courseName: 'Salesforce',
  //   description: 'Get to know Salesforce and how to use its tools for customer relationship management.',
  //   pointCourse: ['Four Months', 'Monday to Sunday', 'Saturday : Quiz', 'Sunday : Program test', 'Fee : 8000'],
  // },
  // {
  //   image: crm,
  //   courseName: 'CRM Training',
  //   description: 'Understand customer relationship management systems and how to implement them effectively.',
  //   pointCourse: ['Three Months', 'Monday to Sunday', 'Saturday : Quiz', 'Sunday : Program test', 'Fee : 6000'],
  // },
  // {
  //   image: salesforcecrm,
  //   courseName: 'Salesforce + CRM Training',
  //   description: 'Combine Salesforce skills with CRM training to optimize your business processes.',
  //   pointCourse: ['Three Months', 'Monday to Sunday', 'Saturday : Quiz', 'Sunday : Program test', 'Fee : 6000'],
  // },
];


const CoursesPage = () => {
  return (
    <div className=''>
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  mb-4 items-center text-center">
        Courses
      </h1>
      <div className="flex justify-center flex-wrap gap-10 p-4">
        {courses.map((course, index) => (
          <TUICourseCard
            key={index}
            image={course.image}
            courseName={course.courseName}
            description={course.description}
            pointCourse={course.pointCourse}
            courseID={course.courseID}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
