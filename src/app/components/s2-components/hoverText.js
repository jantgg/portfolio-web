"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./hoverText.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HoverText = ({ 
    texto, 
    width = '100%',
    justifyContent = 'center',
    fontSize = '1vw',
    textAlign = 'center',
    cursor = 'pointer',
    delay= 'true',
}) => {
    const containerRef = useRef();
    const linea1Ref = useRef();
    const linea2Ref = useRef();


    useEffect(() => {
        const spansLinea1 = linea1Ref.current.children;
        const spansLinea2 = linea2Ref.current.children;
        // Calcula el delay en función de la longitud del texto
  
        const delayc = delay != 'true' ? 0 : 0.01;
        const duration = 0.2;
    
        // Establece la posición inicial de linea2
        gsap.set(spansLinea2, { yPercent: 100, opacity: 1 });
    
        containerRef.current.addEventListener('mouseenter', () => {
            for (let i = 0; i < spansLinea1.length; i++) {
                gsap.to(spansLinea1[i], { yPercent: -100, opacity: 0, duration: duration, delay: i * delayc, ease: "Power1.easeOut" });
                gsap.to(spansLinea2[i], { yPercent: 0, opacity: 1, duration: duration, delay: i * delayc, ease: "Power1.easeOut" });
            }
        });
    
        containerRef.current.addEventListener('mouseleave', () => {
            gsap.to(spansLinea1, { yPercent: 0, opacity: 1, duration: duration, ease: "Power1.easeOut" });
            gsap.to( spansLinea2, { yPercent: 100, opacity: 1, duration: duration, ease: "Power1.easeOut" });
        });
    }, [texto, delay]);
    

    const containerStyles = {
        width: width,
        justifyContent: justifyContent,
        fontSize: fontSize,
        textAlign: textAlign,
        cursor: cursor,
        textDecoration: 'none',
        color: 'inherit',
    };

    const renderContent = (content) => {
        if (typeof content === 'string') {
            return content.split("").map((char, index) => (
                <span key={`line-${index}`}>{char}</span>
            ));
        } else {
            return <>{content}</>;
        }
    };
  
    return (
        <div className="ath-container" style={containerStyles} ref={containerRef}>
            <div className="ath-linea1" ref={linea1Ref}>
                {renderContent(texto)}
            </div>
            <div className="ath-linea2" ref={linea2Ref}>
                {renderContent(texto)}
            </div>
        </div>
    );
};

export default HoverText;
