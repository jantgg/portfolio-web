"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./animatedText.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

{/* <AnimatedText 
    texto="Tu texto aquí" 
    width="100%" 
    justifyContent="center" 
    fontSize="16px" 
    textAlign="center" 
/> */}


const AnimatedText = ({ 
    texto, 
    width = '1005', // Valor predeterminado
    justifyContent = 'center', // Valor predeterminado
    fontSize = '1vw', // Valor predeterminado
    textAlign = 'center' // Valor predeterminado
}) => {
    const linea1Ref = useRef();
    const linea2Ref = useRef();
  
    useEffect(() => {
        const spansLinea1 = linea1Ref.current.children;
        const spansLinea2 = linea2Ref.current.children;
      
        for (let i = 0; i < spansLinea1.length; i++) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: spansLinea1[i],
                    start: "top bottom",
                    toggleActions: "play none none none",
                }
            })
            .to(spansLinea1[i], { yPercent: -100, opacity: 0, duration: 0.7, delay: i * 0.04 })
            .fromTo(spansLinea2[i], { yPercent: 100 }, { yPercent: 0, duration: 0.7, delay: i * 0.04 }, 0);
        }
    }, [texto]);
      
    // Estilos en línea para el div padre
    const containerStyles = {
        width: width, // Establece el ancho
        justifyContent: justifyContent, // Establece la alineación horizontal
        fontSize: fontSize, // Establece el tamaño de la fuente
        textAlign: textAlign // Establece la alineación del texto
    };
        // Función para renderizar el contenido del texto, incluyendo íconos o componentes
        const renderContent = (content) => {
            if (typeof content === 'string') {
                return content.split("").map((char, index) => (
                    <span key={`line-${index}`}>{char}</span>
                ));
            } else {
                // Aquí asumimos que el contenido es un componente o un elemento JSX
                return <>{content}</>;
            }
        };
    
  
    return (
        <div className="at-container" style={containerStyles}>
        <div className="at-linea1" ref={linea1Ref}>
            {renderContent(texto)}
        </div>
        <div className="at-linea2" ref={linea2Ref}>
            {renderContent(texto)}
        </div>
    </div>

    );
};
  
export default AnimatedText;
