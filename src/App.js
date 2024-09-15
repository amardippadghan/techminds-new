import React, { useEffect } from "react";
import "./index.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Overview from "./components/Pages/Overview";
import ContactUs from './components/Pages/ContactUs';

function App() {
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
          <Route path="/ContactUs" element={<ContactUs />} />

        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
