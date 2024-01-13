"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./circulito.css";

const Circulito = ({ active, delay = 0.5 }) => {
  const circuloRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const circulo = circuloRef.current;
    const length = circulo.getTotalLength();
    gsap.set(circulo, { strokeDasharray: length, strokeDashoffset: length });
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (active && isInitialized) {
      const circulo = circuloRef.current;

      // Animación para el primer círculo
      gsap.to(circulo, {
        strokeDashoffset: 0,
        duration: 0.5,
        delay: delay,
        ease: "power2.linear",
        onComplete: () => setIsFinished(true),
      });
    }
  }, [active, isInitialized, delay]);

  return (
    <button
    className="circulito"
      style={{
        width: "1vw",
        height: "1vw",
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontSize: '3vw',
        color: "white",
        backgroundColor: "rgba(255, 255, 255, 0)",
        border: "none",
        outline: "none",
        padding: 0,
        textDecoration: "none",
        WebkitAppearance: "none",
        cursor: "pointer",
      }}
    >
      <div className={`inner-circle ${isFinished ? "": "hided"}`}></div>
 
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        style={{ position: "absolute", top: "0", left: "0" }}
      >
        <circle
          ref={circuloRef}
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeWidth="4"
          fill="transparent"
        />
      </svg>
    </button>
  );
};

export default Circulito;
