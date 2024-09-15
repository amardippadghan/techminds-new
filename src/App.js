import React, { useEffect } from "react";
import Header from "./components/Header";
import AnimatedCursor from "react-animated-cursor";
import { useSelector } from "react-redux";
import TUICard from "./components/commons/TUICard";
import TUICourseCard from "./components/commons/TUICourseCard";



function App() {

   const cardData = {
     title: "CS Fundamentals and Full-Stack Skills",
     points: [
       "20+ micro skilling exercises",
       "5+ work-like professional projects",
       "Master CS Fundamentals",
       "Learn Full-Stack or Backend skills",
       "Actual developer environment",
     ],
   };
    const theme = useSelector((state) => state.theme.theme); 

   
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
  return (
    <>
      <AnimatedCursor
        innerSize={6} // Reduced inner size
        outerSize={10} // Reduced outer size
        color={theme === "dark" ? "255, 255, 255" : "0, 0, 0"}
        outerAlpha={0.3}
        innerScale={0.7} // Reduced inner scale
        outerScale={4} // Reduced outer scale
        hasBlendMode={true}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12, // Reduced inner size for custom target
              outerSize: 12, // Reduced outer size for custom target
              color: "255, 255, 255",
              outerAlpha: 0.4,
              innerScale: 0.9, // Slightly smaller inner scale for custom target
              outerScale: 4.5, // Slightly smaller outer scale for custom target
            },
          },
        ]}
      />

      <Header />
      <div className="p-4">
        <TUICard title={cardData.title} points={cardData.points} />
      </div>
      <div className="p-4">
        <TUICourseCard
          image="https://img.freepik.com/free-vector/illustrated-webinar-banner-invitation-template_23-2148758920.jpg?t=st=1726407439~exp=1726411039~hmac=135958ab558198571cda7b02ea46dc8d9bcd3870e4a6606cd2eb3c18458473da&w=996"
          courseName="Introduction to React"
          description="Learn the fundamentals of React and build modern web applications."
        />
      </div>
    </>
  );
}

export default App;
