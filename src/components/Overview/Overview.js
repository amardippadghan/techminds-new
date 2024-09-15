// src/components/Overview.js

import React from 'react';
import Overviewimg from '../../assets/images/Overview1.webp';
import { useSelector } from 'react-redux';

const Overview = () => {

    const textColor = useSelector((state) => state.theme.textColor);
    const subTextColor = useSelector((state) => state.theme.subTextColor);

    return (
        <div className='p-4 bg-base-200 min-h-screen'>
            <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side */}
                <div className="lg:w-1/2 p-4 text-center lg:text-left">
                    <h1 className={`text-3xl lg:text-4xl font-bold ${textColor} mb-4`}>
                        Online MERN Stack Development and Salesforce Courses
                    </h1>
                    <p className={`${subTextColor} text-lg`}>
                        Elevate your skills with our comprehensive online courses on MERN Stack Development and Salesforce.
                    </p>
                </div>

                {/* Right Side */}
                <div className="lg:w-1/2 p-4">
                    <img
                        src={Overviewimg}
                        alt="Courses"
                        className="w-full h-auto rounded-lg shadow-xl"
                    />
                </div>
            </div>
            {/* About TMIH */}
            <div className='p-4'>
                <h2 className={`text-2xl font-bold ${textColor} text-center mb-4`}>
                    About Tech Mind It Hub Online MERN Stack Development and Salesforce
                </h2>
                <p className={` text-center ${subTextColor}`}>
                    Tech Mind It Hub is an innovative online learning platform designed to provide high-quality education
                    and training in the latest technology fields. It focuses on empowering individuals with practical skills and
                    knowledge that can lead to successful careers in software development and enterprise solutions.
                    The platform offers a variety of courses tailored to meet industry standards and help learners stay ahead in the tech world.
                </p>
            </div>
        </div>
    );
};

export default Overview;
