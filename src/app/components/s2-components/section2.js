"use client";
import React, { useState, useEffect, useRef } from "react";
import "./section2.css";
import { MdArrowDownward } from "react-icons/md";
import Linea from "src/app/components/linea.js";
import Circulo from "src/app/components/circulo.js";
import AnimatedText from "src/app/components/animatedText.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
import S2Content from "src/app/components/s2-components/s2Content.js";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="linea-container">
        <Linea />
   

      
      </div>
      <div className="s2-upbar">
          <span className="s2-upbar-count">
            <AnimatedText
              texto="01 // 04"
              width="auto"
              justifyContent="start"
              fontSize="1vw"
              textAlign="left"
            />{" "}
          </span>
          <span className="s2-upbar-about bold-text">
            <AnimatedText
              texto="ABOUT"
              width="auto"
              justifyContent="start"
              fontSize="1vw"
              textAlign="left"
            />{" "}
          </span>
          <div className="s2-upbar-social">
            <a>  <HoverText texto="EMAIL" /></a><span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
            <a>  <HoverText texto="LINKEDIN" /></a><span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
            <a>  <HoverText texto="GITHUB" /></a>
          </div>
        </div>
        <S2Content/>
    </section>
  );
};

export default Section2;