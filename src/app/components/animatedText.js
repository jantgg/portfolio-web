"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./animatedText.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const AnimatedText = ({ texto }) => {
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
          .to(spansLinea1[i], { yPercent: -100, opacity: 0, duration: 0.5, delay: i * 0.04 })
          .fromTo(spansLinea2[i], { yPercent: 100 }, { yPercent: 0, duration: 0.5, delay: i * 0.04 }, 0);
        }
      }, [texto]);
      
      
      
  
    return (
      <div className="at-container">
        <div className="at-linea1" ref={linea1Ref}>
          {texto.split("").map((char, index) => (
            <span key={`linea1-${index}`}>{char}</span>
          ))}
        </div>
        <div className="at-linea2" ref={linea2Ref}>
          {texto.split("").map((char, index) => (
            <span key={`linea2-${index}`}>{char}</span>
          ))}
        </div>
      </div>
    );
  };
  
  export default AnimatedText;