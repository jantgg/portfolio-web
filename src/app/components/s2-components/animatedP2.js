"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./animatedP2.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AnimatedP = ({
  texto,
  width = "100%", // Corregido el valor predeterminado
  justifyContent = "center",
  fontSize = "1vw",
  textAlign = "center",
  marginBottom = "0px",
}) => {
  const paragraphRef = useRef();

  useEffect(() => {
    const paragraph = paragraphRef.current;
    // Calcula la duración de la animación en función de la longitud del texto
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
  }, [texto]);

  const containerStyles = {
    width: width,
    justifyContent: justifyContent,
    fontSize: fontSize,
    textAlign: textAlign,
    marginBottom: marginBottom,
  };

  return (
    <div className="ap-container" style={containerStyles}>
      <p ref={paragraphRef} className="ap-paragraph light-text">
        Ofrezco soluciones <strong>completas</strong> y{" "}
        <strong>eficientes</strong> centradas en el <strong>usuario.</strong>{" "}
        desarrollo interfaces que ofrecen una{" "}
        <strong>experiencia excepcional</strong> en cada proyecto. Armonía entre <strong>funcionalidad</strong> y{" "}
          <strong>diseño.</strong>
      </p>

      {/* <p ref={paragraphRef} className="ap-paragraph light-text">
            Ofrezco soluciones <strong>completas</strong> y <strong>eficientes</strong> centradas en el <strong>usuario,</strong> siendo mi
            pasión el <strong>Front-End</strong>, donde centro mi desarrollo en crear interfaces
            que ofrezcan una <strong>experiencia excepcional .</strong> En cada proyecto, me esfuerzo por lograr una
            perfecta armonía entre la <strong>funcionalidad</strong> y la <strong>estética visual .</strong>
            </p> */}
    </div>
  );
};

export default AnimatedP;
