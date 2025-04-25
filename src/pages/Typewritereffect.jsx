import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
    <>
      
        <Typewriter
          words={["Frontend", "Backend", "Web Developer"]}
          loop={0} 
          cursor
          cursorStyle="|"
          typeSpeed={100} 
          deleteSpeed={50} 
          delaySpeed={1500} 
        />
      
    </>
  );
};

export default TypewriterEffect;
