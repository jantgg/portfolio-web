"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./loadText.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const LoadText = ({ 
    texto, 
    width = '100%', // Corregido el valor predeterminado
    justifyContent = 'center',
    fontSize = '1vw',
    textAlign = 'center',
    marginBottom = '0px',
}) => {
    const linea1RefL = useRef();
    const linea2RefL = useRef();
    const [inciar, setIniciar] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
     setVisible(true)
     setTimeout(() => { 
        setIniciar(true)

     }, 1000)
    }, []);

    useEffect(() => {
        if (inciar) {
            const spansLinea1L = linea1RefL.current.children;
            const spansLinea2L = linea2RefL.current.children;
            const delay = 0.09;
            const duration = 0.5;

            gsap.to(linea1RefL.current, { opacity: 1, duration: 0.3 });

            for (let i = 0; i < spansLinea1L.length; i++) {
                gsap.timeline()
                .to(spansLinea1L[i], { yPercent: -100, opacity: 0, duration: duration, delay: 0.3 + i * delay, ease: "Power1.easeOut" }, 0)
                .fromTo(spansLinea2L[i], { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: duration, delay: 0.3 + i * delay, ease: "Power1.easeOut" }, 0);
            }
        }
    }, [inciar, texto]);

    const containerStylesLoader = {
        width: width,
        justifyContent: justifyContent,
        fontSize: fontSize,
        textAlign: textAlign,
        marginBottom: marginBottom,
    };
 

    const renderContentLoader = (content) => {
        if (typeof content === 'string') {
            return content.split("").map((char, index) => (
                <span key={`line-${index}`}>{char}</span>
            ));
        } else {
            return <>{content}</>;
        }
    };
    const renderContentLoader2 = (content) => {
        if (typeof content === 'string') {
            return content.split("").map((char, index) => (
                <span key={`line-${index}`}></span>
            ));
        } else {
            return <>{content}</>;
        }
    };
  
    return (
        <div className={`atL-container ${visible ? "opa1":""}`} style={containerStylesLoader}>
            <div className="atL-linea1" ref={linea1RefL}>
                {renderContentLoader(texto)}
            </div>
            <div className="atL-linea2" ref={linea2RefL}>
            {renderContentLoader2(texto)}
            </div>
        </div>
    );
};

export default LoadText;
