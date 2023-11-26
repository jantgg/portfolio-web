"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
{
  /* <Circulo ruta="/otra-pagina">Ir a Otra Pagina</Circulo> */
}
{
  /* <Circulo hacerScroll={true}>Bajar una Pantalla</Circulo> */
}

const Circulo = ({ children, ruta, hacerScroll, fontSize= '3vw', }) => {
  const router = useRouter();
  const circuloRef = useRef(null);
  const secondCircleRef = useRef(null);
  const childrenRef = useRef(null);
  const btnRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [isWithinMargin, setIsWithinMargin] = useState(true);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const circulo = circuloRef.current;
    const length = circulo.getTotalLength();
    gsap.set(circulo, { strokeDasharray: length, strokeDashoffset: length });

    ScrollTrigger.create({
      trigger: circuloRef.current.parentElement,
      start: "top bottom",
      onEnter: () =>
        gsap.to(circulo, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power2.linear",
        }),
    });
  }, []);

  useEffect(() => {
    if (!isClient) return;
  
    gsap.registerPlugin(ScrollTrigger);
  
    const secondCircle = secondCircleRef.current;
  
    ScrollTrigger.create({
      trigger: circuloRef.current.parentElement,
      start: "top bottom",
      onEnter: () => {
        gsap.to(secondCircle, {
          opacity: 1,
          delay: 1, // Retraso de 1 segundo
          duration: 0
        });
      }
    });
  }, [isClient]);
  

  useEffect(() => {
    if (!isClient) return;

    const marginX = window.innerWidth * 0.06; // 6vw en píxeles
    const marginY = window.innerWidth * 0.06; // 4vh en píxeles

    const handleMouseMove = (e) => {
      const btn = btnRef.current;
      const secondCircle = secondCircleRef.current;
      const childrenContainer = childrenRef.current;
      if (!btn || !secondCircle || !childrenContainer) return;

      const btnRect = btn.getBoundingClientRect();
      const centerX = btnRect.left + btnRect.width / 2;
      const centerY = btnRect.top + btnRect.height / 2;

      const x = e.clientX - centerX;
      const y = e.clientY - centerY;

      const distanceX = Math.abs(x);
      const distanceY = Math.abs(y);

      if (distanceX > marginX || distanceY > marginY) {
        if (isWithinMargin) {
          setIsWithinMargin(false);
          // Devolver el botón, el segundo círculo y el children a su posición original
          gsap.to([btn, secondCircle, childrenContainer], {
            x: 0,
            y: 0,
            ease: "power3.in",
            duration: 0.3,
          });
        }
      } else {
        setIsWithinMargin(true);
        // Mover el botón y el segundo círculo
        gsap.to(btn, {
          x: x,
          y: y,
          ease: "power3.out",
          duration: 0.3,
        });
        // Mover el segundo círculo a la mitad de la distancia
        gsap.to(secondCircle, {
          x: x / 2,
          y: y / 2,
          ease: "power3.out",
          duration: 0.3,
        });
        // Mover el children a un 75% de la distancia del primer círculo
        gsap.to(childrenContainer, {
          x: x * 0.25,
          y: y * 0.25,
          ease: "power3.out",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isClient, isWithinMargin]);

  const handleClick = () => {
    if (isClient && ruta) {
      router.push(ruta);
    }
    if (isClient && hacerScroll) {
      gsap.to(window, {
        scrollTo: window.innerHeight,
        duration: 2,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      style={{
        width: "7.5vw",
        height: "7.5vw",
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontSize: fontSize,
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
      {/* Primer círculo */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        style={{ position: "absolute", top: "0", left: "0",}}
      >
        <circle
          ref={circuloRef}
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeWidth="0.8"
          fill="transparent"
        />
      </svg>
      {/* Segundo círculo con los mismos estilos */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        style={{ position: "absolute", top: "0", left: "0", opacity:'0'}}
        ref={secondCircleRef}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeWidth="0.8"
          fill="transparent"
        />
      </svg>

      <div ref={childrenRef} style={{ position: "absolute",marginTop:'1vh' }}>
        {children}
      </div>
    </button>
  );
};
export default Circulo;
