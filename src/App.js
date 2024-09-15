import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import AnimatedCursor from "react-animated-cursor";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Overview from './components/Overview/Overview';



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
        color="128, 128, 128 "
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
      <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
        </Routes>
        </Router>
      <Footer />
    </>
  );
}

export default App;
