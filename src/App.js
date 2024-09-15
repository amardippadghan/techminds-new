import React, { useEffect } from "react";
import Header from "./components/Header";
import AnimatedCursor from "react-animated-cursor";
import { useSelector } from "react-redux";


function App() {
    const theme = useSelector((state) => state.theme.theme); 

   
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={14}
        color="193, 11, 111"
        outerAlpha={0.3}
        innerScale={0.8} 
        outerScale={6}
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
              innerSize: 16,
              outerSize: 16,
              color: "255, 255, 255", 
              outerAlpha: 0.4, 
              innerScale: 1, 
              outerScale: 5, 
            },
          },
        ]}
      />
      <Header />
    </>
  );
}

export default App;
