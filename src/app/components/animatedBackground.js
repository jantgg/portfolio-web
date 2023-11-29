"use client"
import React, { useRef, useEffect, useState } from "react";

import "./background.css";

const AnimatedBackground = () => {
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {

    const checkScrollBottom = () => {

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setIsBottom(true);
  
      } else {
        setIsBottom(false);
    
      }
    };

    window.addEventListener('scroll', checkScrollBottom);

    // remover el event listener cuando el componente se desmonte
    return () => window.removeEventListener('scroll', checkScrollBottom);
  }, []);

  return (
    <div className={`background-container noise ${isBottom ? "background-bottom":""}`}>

      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
    </div>
  );
};


export default AnimatedBackground;
