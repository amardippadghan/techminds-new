import React, { useEffect } from "react";
import Header from "./components/Header";
import AnimatedCursor from "react-animated-cursor";
import { useSelector } from "react-redux";


function App() {
    const theme = useSelector((state) => state.theme.theme); // Get the current theme from Redux state

    // Update HTML `data-theme` attribute based on the Redux state
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={14} // Slightly bigger outer size for smoother outer transition
        color="193, 11, 111"
        outerAlpha={0.3} // Slightly increase the transparency
        innerScale={0.8} // More responsive inner scaling for smooth movement
        outerScale={6} // A bit more noticeable outer scaling for hover effects
        hasBlendMode={true} // Enable blend mode for a smoother look
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
              outerSize: 16, // Larger outer size for custom targets
              color: "255, 255, 255", // White color for custom hover targets
              outerAlpha: 0.4, // More noticeable alpha for custom targets
              innerScale: 1, // Slightly larger inner scale
              outerScale: 5, // More pronounced outer scale for custom targets
            },
          },
        ]}
      />

      <Header />
    </>
  );
}

export default App;
