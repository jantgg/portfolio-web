"use client"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const LineaV = ({ active, length = "5vw" }) => {
  const lineaRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const linea = lineaRef.current;
    gsap.set(linea, { transform: 'scaleY(0)' });
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (active && isInitialized) {
      const linea = lineaRef.current;

      // Animación para la línea
      gsap.to(linea, {
        transform: 'scaleY(1)',
        duration: 1,
        ease: "power2.linear"
      });
    }
  }, [active, isInitialized]);

  return (
    <div style={{ overflowY: "hidden", height: length }}>
      <div
        ref={lineaRef}
        style={{
          width: "1px",
          height: "100%",
          backgroundColor: "white",
          transformOrigin: "top",
        }}
      ></div>
    </div>
  );
};

export default LineaV;
