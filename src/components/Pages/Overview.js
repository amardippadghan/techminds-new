// src/components/Overview.js

import React from 'react';
import Overviewimg from '../../assets/images/Overview2.webp';
import TUICard from '../commons/TUICard';
import { useSelector } from 'react-redux';
import TUICarousel from '../commons/TUICorousal';
import CoursesPage from './CoursesPage';

const Overview = () => {
    const theme = useSelector((state) => state.theme.theme);


    const techItems = [
        { title: "Tailwind CSS", image: "/path/to/tailwind-logo.png" },
        { title: "JavaScript", image: "/path/to/javascript-logo.png" },
        { title: "React JS", image: "/path/to/react-logo.png" },
        { title: "Next JS", image: "/path/to/nextjs-logo.png" },
        { title: "Redux", image: "/path/to/redux-logo.png" },
        { title: "Node JS", image: "/path/to/nodejs-logo.png" },
        { title: "MongoDB", image: "/path/to/mongodb-logo.png" },
        { title: "Git", image: "/path/to/git-logo.png" },
        { title: "Docker", image: "/path/to/docker-logo.png" },
        { title: "Figma", image: "/path/to/figma-logo.png" },
        { title: "AdobeXD", image: "/path/to/adobexd-logo.png" },
        { title: "Sketch", image: "/path/to/sketch-logo.png" },
        { title: "Adobe Photoshop", image: "/path/to/adobephotoshop-logo.png" },
    ];
    return (
        <div className='p-4 bg-base-200 min-h-screen'>
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 p-4 text-center lg:text-left ml-5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                        Online MERN Stack Development and Salesforce Courses
                    </h1>
                    <p className="text-base md:text-lg text-secondary">
                        Elevate your skills with our comprehensive online courses on MERN Stack Development and Salesforce.
                    </p>
                </div>

                {/* Right Side */}
                <div className="lg:w-1/2 p-4">
                    <img
                        src={Overviewimg}
                        alt="Courses"
                        className="w-[65%] h-[65%] ml-16"
                    />
                </div>
            </div>
            {/* About TMIH */}
            <div className='p-4 mb-4'>
                <h2 className="text-xl md:text-2xl font-bold text-primary text-center mb-4">
                    About Tech Mind It Hub Online MERN Stack Development and Salesforce
                </h2>
                <p className="text-base md:text-lg text-secondary text-center">
                    Tech Mind It Hub is an innovative online learning platform designed to provide high-quality education
                    and training in the latest technology fields. It focuses on empowering individuals with practical skills and
                    knowledge that can lead to successful careers in software development and enterprise solutions.
                    The platform offers a variety of courses tailored to meet industry standards and help learners stay ahead in the tech world.
                </p>
            </div>
            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-7">
                <TUICard
                    title="Our Services"
                    points={[
                        'A certificate will be provided upon completing the course.',
                        'Guest lecture by an experienced person.',
                        'Our team will be available to resolve queries at any time.'
                    ]}
                />
                <TUICard
                    title="Duration"
                    points={[
                        'Frontend : 3 months',
                        'Backend : 3 months',
                        'MERN stack : 4 months',
                        'Salesforce and CRM training : 3 months'
                    ]}
                />
                <TUICard
                    title="Date & time"
                    points={[
                        'FrontEnd :  9 to 10 pm',
                        'Backend : 10 to 11 pm',
                        'MERN stack : 9 to 11 pm',
                        'Salesforce and CRM training : 9 to 11 pm'
                    ]}
                />
                <TUICard
                    title="Program Overview"
                    points={[
                        'Monday to Friday Online Lecture',
                        'Saturday - Quiz',
                        'Sunday – program test',
                        'Daily Assignment',
                        'Daily Note Provide',
                        'Three project'
                    ]}
                />
            </div>
            {/* CoursesPage */}
           <div p-4 mb-7>
           <CoursesPage />
           </div>
            {/* Cards End */}
            <div className="p-4 mb-7">
                <h2 className="text-xl md:text-2xl font-bold text-primary text-center mb-4">
                    Tools Covered
                </h2>
                <TUICarousel items={techItems} />
            </div>
        </div>
    );
};

export default Overview;
