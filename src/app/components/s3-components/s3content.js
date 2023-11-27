"use client";
import React, { useState, useEffect, useRef } from "react";
import "./s3content.css";
import { MdArrowDownward } from "react-icons/md";
import Linea2 from "src/app/components/s3-components/linea2.js";
import Circulo from "src/app/components/circulo.js";
import AnimatedText from "src/app/components/animatedText.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
import gsap from "gsap";

const S3Content = () => {
  const [pTittle1, setPTittle1] = useState(false);
  const [pTittle2, setPTittle2] = useState(false);
  const [pTittle3, setPTittle3] = useState(false);

  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);

  useEffect(() => {
    // Crear una sola instancia de la animación para cada párrafo
    const anim1 = gsap.fromTo(p1Ref.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out", duration: 0.5  });
    const anim2 = gsap.fromTo(p2Ref.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out", duration: 0.5  });
    const anim3 = gsap.fromTo(p3Ref.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, ease: "power2.out", duration: 0.5  });

    div3Ref.current.addEventListener("mouseenter", () => {
      setPTittle1(true);
      anim1.play();
    });
    div3Ref.current.addEventListener("mouseleave", () => {
      setPTittle1(false);
      anim1.reverse();
    });

    div4Ref.current.addEventListener("mouseenter", () => {
      setPTittle2(true);
      anim2.play();
    });
    div4Ref.current.addEventListener("mouseleave", () => {
      setPTittle2(false);
      anim2.reverse();
    });

    div5Ref.current.addEventListener("mouseenter", () => {
      setPTittle3(true);
      anim3.play();
    });
    div5Ref.current.addEventListener("mouseleave", () => {
      setPTittle3(false);
      anim3.reverse();
    });
  }, []);
  
  return (
    <div className="s3-content">
      <div className="s3c-div1"></div>
      <div className="s3c-div2"></div>
      <div className="s3c-div3" ref={div3Ref}></div>
      <div className="s3c-div4" ref={div4Ref}></div>
      <div className="s3c-div5" ref={div5Ref}></div>
      <div className="s3c-div6">
        <h3 className="light-text">PROYECTO DESTACADO</h3>
        <p ref={p1Ref} className="bold-text">
          DASHBOARD
        </p>
        <p ref={p2Ref} className="bold-text">
          ONBIKES
        </p>
        <p ref={p3Ref} className="bold-text">
          DA PAOLO
        </p>
      </div>
    </div>
  );
};

export default S3Content;
