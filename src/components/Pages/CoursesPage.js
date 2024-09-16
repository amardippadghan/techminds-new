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
    pointCourse: ['Three Months', 'Monday to Sunday', 'Saturday : Quize ', 'Sunday : Program test', 'Fee : 6000'],
  },
  {
    image: backend,
    courseName: 'Back End Development',
    description: 'Dive into server-side programming with Node.js, databases, and APIs.',
    pointCourse: ['Three Months', 'Monday to Sunday', 'Saturday : Quize ', 'Sunday : Program test', 'Fee : 6500'],
  },
  {
    image: mern,
    courseName: 'MERN Stack',
    description: 'Master MongoDB, Express, React, and Node.js to build full-stack applications.',
    pointCourse: ['Three Months', 'Monday to Sunday', 'Saturday : Quize ', 'Sunday : Program test', 'Fee : 7000'],
  },
  {
    image: salesforce,
    courseName: 'Salesforce',
    description: 'Get to know Salesforce and how to use its tools for customer relationship management.',
    pointCourse: ['Four Months', 'Monday to Sunday', 'Saturday : Quize ', 'Sunday : Program test', 'Fee : 8000'],
  },
  {
    image: crm,
    courseName: 'CRM Training',
    description: 'Understand customer relationship management systems and how to implement them effectively.',
    pointCourse: ['Three Months', 'Monday to Sunday', 'Saturday : Quize ', 'Sunday : Program test', 'Fee : 6000'],
  },
  {
    image: salesforcecrm,
    courseName: 'Salesforce + CRM Training',
    description: 'Combine Salesforce skills with CRM training to optimize your business processes.',
    pointCourse: ['Three Months', 'Monday to Sunday', 'Saturday : Quize ', 'Sunday : Program test', 'Fee : 6000'],
  },
];

const CoursesPage = () => {
  return (
    <div className=''>
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
            pointCourse={course.pointCourse}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
