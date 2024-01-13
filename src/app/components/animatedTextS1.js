"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./animatedTextS1.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AnimatedTextS1 = ({ 
    texto, 
    width = '100%',
    justifyContent = 'center',
    fontSize = '1vw',
    textAlign = 'center',
    marginBottom = '0px',
    animate,
}) => {
    const linea1RefS1 = useRef();
    const linea2RefS1 = useRef();

    useEffect(() => {
        if (animate) {
            const spansLinea1S1 = linea1RefS1.current.children;
            const spansLinea2S1 = linea2RefS1.current.children;
    
            const delay = texto.length > 13 ? 0 : 0.03;
            const duration = texto.length > 13 ? 1.5 : 1;
    
            for (let i = 0; i < spansLinea1S1.length; i++) {
                gsap.fromTo(spansLinea1S1[i], { yPercent: 0, opacity: 0.3 }, { yPercent: -100, opacity: 0, duration: duration, delay: i * delay, ease: "Power1.easeOut" });
                gsap.fromTo(spansLinea2S1[i], { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: duration, delay: i * delay, ease: "Power1.easeOut" });
            }
        }
    }, [texto, animate]);
    

    const containerStylesS1 = {
        width: width,
        justifyContent: justifyContent,
        fontSize: fontSize,
        textAlign: textAlign,
        marginBottom: marginBottom,
    };
 

    const renderContentS1 = (content) => {
        if (typeof content === 'string') {
            return content.split("").map((char, index) => (
                <span key={`line-${index}`}>{char}</span>
            ));
        } else {
            return <>{content}</>;
        }
    };
  
    return (
        <div className="ats1-container" style={containerStylesS1}>
            <div className="ats1-linea1" ref={linea1RefS1}>
                {renderContentS1(texto)}
            </div>
            <div className="ats1-linea2" ref={linea2RefS1}>
                {renderContentS1(texto)}
            </div>
        </div>
    );
};

export default AnimatedTextS1;
