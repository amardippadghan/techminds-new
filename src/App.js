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
