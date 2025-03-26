
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === "fadeOut") {
      setTransitionStage("fadeIn");
      setDisplayLocation(location);
    }
  };

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={handleAnimationEnd}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: transitionStage === "fadeOut" ? "black" : "transparent"
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
