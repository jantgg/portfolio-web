"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import "./section2.css";
import { MdArrowDownward } from "react-icons/md";
import Linea from "src/app/components/linea.js";
import Circulo from "src/app/components/circulo.js";
import AnimatedText from "src/app/components/animatedText.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
import S2Content from "src/app/components/s2-components/s2Content.js";

import { Section2Context } from 'src/app/components/s2-components/s2-context.js';

const Section2 = () => {
  const { boton, changeTextoMovil } = useContext(Section2Context);

  return (

  
      <section className="section2">
        <div className="linea-container">
          <Linea />
        </div>
        <div className="s2-upbar">
          <span className="s2-upbar-count">
            <AnimatedText
              texto="02 /"
              width="auto"
              justifyContent="start"
              fontSize="1vw"
              textAlign="left"
            />{" "}
          </span>
          <span className="s2-upbar-about bold-text">
            <AnimatedText
              texto="SOBRE MÍ"
              width="auto"
              justifyContent="start"
              fontSize="1vw"
              textAlign="left"
            />{" "}
          </span>
          <div className="s2-upbar-social">
            <a href="mailto:jantgomezgil@hotmail.com">
              {" "}
              <HoverText texto="EMAIL"   />
            </a>
            <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
            <a target="_blank"  href="https://www.linkedin.com/in/jant-gg/">
              {" "}
              <HoverText texto="LINKEDIN"  />
            </a>
            <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
            <a target="_blank" href="https://github.com/jantgg">
              {" "}
              <HoverText texto="GITHUB"  />
            </a>
          </div>
          <span className="s2-upbar-count2">
            <AnimatedText
              texto="/ 04"
              width="auto"
              justifyContent="start"
              fontSize="1vw"
              textAlign="left"
            />{" "}
          </span>
        </div>
        <S2Content />
        <p className={`s2c-text-m ${boton ? "":"s2c-text-m-small"}`} >
          <span className="s2c-text-m-l">
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> / <strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> /<strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> /<strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /       <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> / <strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> /<strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> /<strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> / 
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> / <strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> /<strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> /<strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /       <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> / <strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> /<strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> /<strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /       <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> / <strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> /<strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> /
            <strong>NEXT.JS</strong> / REACT / <strong>JAVASCRIPT</strong> /
            HTML5 / <strong>CSS</strong> /<strong>NEXT.JS</strong> / REACT /{" "}
            <strong>JAVASCRIPT</strong> / HTML5 / <strong>CSS</strong> / 
          </span>
          <span className="s2c-text-m-r">
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA / <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA / <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA / <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA / <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA /{" "}
            <strong>PYTHON</strong> / <strong>NODE.JS</strong> / MONGOOSE /
            MONGO-DB / <strong>FLASK</strong> / POSTGRE-SQL / PRISMA / 
          </span>
          <span className="s2c-text-m-l">
            GSAP / ANIMACIÓN / <strong>DISEÑO UX</strong> /
            WEB&MÓVIL / PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP /  GSAP / ANIMACIÓN / <strong>DISEÑO UX</strong> /
            WEB&MÓVIL / PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP /  GSAP / ANIMACIÓN / <strong>DISEÑO UX</strong> /
            WEB&MÓVIL / PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP /  GSAP / ANIMACIÓN / <strong>DISEÑO UX</strong> /
            WEB&MÓVIL / PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP /  GSAP / ANIMACIÓN / <strong>DISEÑO UX</strong> /
            WEB&MÓVIL / PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP /  GSAP / ANIMACIÓN / <strong>DISEÑO UX</strong> /
            WEB&MÓVIL / PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / GSAP / FRAMER
            MOTION / ANIMACIÓN / <strong>DISEÑO UX</strong> / WEB&MÓVIL /
            PHOTOSHOP / GSAP / ANIMACIÓN /{" "}
            <strong>DISEÑO UX</strong> / WEB&MÓVIL / PHOTOSHOP / 
          </span>
        </p>
      </section>

  );
};

export default Section2;
