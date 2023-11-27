"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./animatedP2.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AnimatedP2 = ({
  texto,
  width = "100%", // Corregido el valor predeterminado
  justifyContent = "center",
  fontSize = "2vw",
  textAlign = "justify",
  marginBottom = "0px",
}) => {
  const paragraphRef2 = useRef();

  useEffect(() => {
    const paragraph2 = paragraphRef2.current;
    // Calcula la duración de la animación en función de la longitud del texto
    const duration = 1;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: paragraph2,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        paragraph2,
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: duration, ease: "Power1.easeOut" }
      );
  }, [texto]);

  const containerStyles2 = {
    width: width,
    justifyContent: justifyContent,
    fontSize: fontSize,
    textAlign: textAlign,
    marginBottom: marginBottom,
  };

  return (
    <div className="ap-container2" style={containerStyles2}>
      <p ref={paragraphRef2} className="ap-paragraph2 light-text">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aqui
        tienes una selección de <strong>proyectos</strong> que muestran mi <strong>profesionalidad</strong> al crear
        aplicaciones web que respondan a las <strong>necesidades</strong> y <strong>tendencias actuales</strong>.
      </p>
    </div>
  );
};

export default AnimatedP2;
