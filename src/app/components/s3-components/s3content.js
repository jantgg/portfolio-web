"use client";
import React, { useState, useEffect, useRef } from "react";
import "./s3content.css";
import Circulo from "src/app/components/circulo.js";
import Dapaolo from "src/app/components/img/dapaolo1.jpg";
import AnimatedP2 from "src/app/components/s3-components/animatedP2.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
import gsap from "gsap";
import Image from "next/image";

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
  const h3Ref = useRef(null);

  useEffect(() => {
    // Establecer el estado inicial
    gsap.set([p1Ref.current, p2Ref.current, p3Ref.current, h3Ref.current], {
      opacity: 0,
    });
    gsap.set(h3Ref.current, { opacity: 0 });

    // Funciones para manejar la animación
    const handleMouseEnter = (ref, titleNumber) => {
      gsap.to(ref.current, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.5,
      });
      gsap.to(h3Ref.current, { opacity: 1, duration: 0.5 });

      if (titleNumber === 1) setPTittle1(true);
      if (titleNumber === 2) setPTittle2(true);
      if (titleNumber === 3) setPTittle3(true);
    };

    const handleMouseLeave = (ref, titleNumber) => {
      gsap.to(ref.current, {
        y: 100,
        opacity: 0,
        ease: "power2.out",
        duration: 0.5,
      });
      gsap.to(h3Ref.current, { opacity: 0, duration: 0.5 });

      if (titleNumber === 1) setPTittle1(false);
      if (titleNumber === 2) setPTittle2(false);
      if (titleNumber === 3) setPTittle3(false);
    };

    // Event listeners
    div3Ref.current.addEventListener("mouseenter", () =>
      handleMouseEnter(p1Ref, 1)
    );
    div3Ref.current.addEventListener("mouseleave", () =>
      handleMouseLeave(p1Ref, 1)
    );

    div4Ref.current.addEventListener("mouseenter", () =>
      handleMouseEnter(p2Ref, 2)
    );
    div4Ref.current.addEventListener("mouseleave", () =>
      handleMouseLeave(p2Ref, 2)
    );

    div5Ref.current.addEventListener("mouseenter", () =>
      handleMouseEnter(p3Ref, 3)
    );
    div5Ref.current.addEventListener("mouseleave", () =>
      handleMouseLeave(p3Ref, 3)
    );

    // Limpieza de los event listeners
    return () => {
      div3Ref.current.removeEventListener("mouseenter", () =>
        handleMouseEnter(p1Ref, 1)
      );
      div3Ref.current.removeEventListener("mouseleave", () =>
        handleMouseLeave(p1Ref, 1)
      );

      div4Ref.current.removeEventListener("mouseenter", () =>
        handleMouseEnter(p2Ref, 2)
      );
      div4Ref.current.removeEventListener("mouseleave", () =>
        handleMouseLeave(p2Ref, 2)
      );

      div5Ref.current.removeEventListener("mouseenter", () =>
        handleMouseEnter(p3Ref, 3)
      );
      div5Ref.current.removeEventListener("mouseleave", () =>
        handleMouseLeave(p3Ref, 3)
      );
    };
  }, []);

  return (
    <div className="s3-content">
      <div className="s3c-div1">
        <Circulo hacerScroll={true} fontSize="0.8vw">
          {" "}
          VER TODOS<br></br>
          LOS<br></br> PROYECTOS
        </Circulo>
      </div>
      <div className="s3c-div2">
        <AnimatedP2 />
      </div>
      <a className={`s3c-div3 ${pTittle2 || pTittle3 ? "oscuro" :""}  `} ref={div3Ref}>
        <Image src={Dapaolo} contain="true" className="s3c-img" />
        <div className={`s3c-project-details ${pTittle1 ? "opa1" : ""}`}>
          <span>
            {" "}
            <HoverText texto="REACT" />
          </span>
          <span>
            {" "}
            <HoverText texto="FLASK" />
          </span>
          <span>
            {" "}
            <HoverText texto="SQL" />
          </span>
        </div>
      </a>
      <a className={`s3c-div4 ${pTittle1 || pTittle3 ? "oscuro" :""}  `} ref={div4Ref}>
      <Image src={Dapaolo} contain="true" className="s3c-img" />
        {" "}
        <div className={`s3c-project-details ${pTittle2 ? "opa1" : ""}`}>
          <span>
            {" "}
            <HoverText texto="NEXT.JS" />
          </span>
          <span>
            {" "}
            <HoverText texto="NODE.JS" />
          </span>
          <span>
            {" "}
            <HoverText texto="MONGO-DB" />
          </span>
        </div>
      </a>
      <a className={`s3c-div5 ${pTittle1 || pTittle2 ? "oscuro" :""}  `} ref={div5Ref}>
      <Image src={Dapaolo} contain="true" className="s3c-img" />
        {" "}
        <div className={`s3c-project-details ${pTittle3 ? "opa1" : ""}`}>
          <span>
            {" "}
            <HoverText texto="NEXT.JS" />
          </span>
          <span>
            {" "}
            <HoverText texto="PARALLAX" />
          </span>
          <span>
            {" "}
            <HoverText texto="PHOTOSHOP" />
          </span>
        </div>
      </a>
      <div className="s3c-div6">
        <h3 ref={h3Ref} className="light-text">
          PROYECTO DESTACADO
        </h3>

        <p
          ref={p1Ref}
          className="bold-text"
          style={{ opacity: 0, transform: "translateY(100%)" }}
        >
     ONBIKES 
        </p>

        <p
          ref={p2Ref}
          className="bold-text"
          style={{ opacity: 0, transform: "translateY(100%)" }}
        >
              DASHBOARD
        </p>
        <p
          ref={p3Ref}
          className="bold-text"
          style={{ opacity: 0, transform: "translateY(100%)" }}
        >
          DA PAOLO
        </p>
      </div>
    </div>
  );
};

export default S3Content;
