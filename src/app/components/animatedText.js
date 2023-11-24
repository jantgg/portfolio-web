"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./animatedText.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AnimatedText = ({ 
    texto, 
    width = '100%', // Corregido el valor predeterminado
    justifyContent = 'center',
    fontSize = '1vw',
    textAlign = 'center'
}) => {
    const linea1Ref = useRef();
    const linea2Ref = useRef();

    useEffect(() => {
        const spansLinea1 = linea1Ref.current.children;
        const spansLinea2 = linea2Ref.current.children;
        // Calcula el delay en función de la longitud del texto
        const delay = texto.length > 13 ? 0 : 0.03;
        const duration = texto.length > 13 ? 1.5 : 1;

        for (let i = 0; i < spansLinea1.length; i++) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: spansLinea1[i],
                    start: "top bottom",
                    toggleActions: "play none none none",
                }
            })
            .to(spansLinea1[i], { yPercent: -100, opacity: 0, duration: duration, delay: i * delay, ease: "Power1.easeOut" })
            .fromTo(spansLinea2[i], { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: duration, delay: i * delay, ease: "Power1.easeOut" }, 0);
        }
    }, [texto]);

    const containerStyles = {
        width: width,
        justifyContent: justifyContent,
        fontSize: fontSize,
        textAlign: textAlign
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
