"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./animatedP2.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import HoverText from "src/app/components/s2-components/hoverText.js";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AnimatedP = (

) => {
  const paragraphRef2 = useRef();

  useEffect(() => {
    const paragraph = paragraphRef2.current;
 
    const duration = 1;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: paragraph,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        paragraph,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: duration, ease: "Power1.easeOut" }
      );
  }, []);

  return (
    <div className="s2c-ts light-text" ref={paragraphRef2}>
    <HoverText texto="NEXT.JS" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false' /> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="REACT" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="FLASK" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="NODE.JS" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="JAVASCRIPT" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> 
    <HoverText texto="PYTHON" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="HTML5" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="CSS" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="MySQL" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="MONGOOSE" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/>
    <HoverText texto="MONGO-DB" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="GSAP" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="FRAMERMOTION" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="DISEÑO-UX" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> 
    <HoverText texto="WEB&MÓVIL" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="ANIMACIÓN" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    <HoverText texto="PHOTOSHOP" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/>
  </div>
  );
};

export default AnimatedP;
