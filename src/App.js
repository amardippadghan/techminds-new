import React, { useEffect } from "react";
import "./index.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Overview from "./components/Overview/Overview";
import TUICorousal from "./components/commons/TUICorousal";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
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
    // ... add more items as needed
  ];
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Overview />} />
        </Routes>
      </Router>
      <TUICorousal items={techItems} />
      <Footer />
    </>
  );
}

export default App;
