"use client";
import React, { useState, useEffect, useRef } from "react";
import "./section3.css";
import { MdArrowDownward } from "react-icons/md";
import Linea2 from "src/app/components/s3-components/linea2.js";
import Circulo from "src/app/components/circulo.js";
import AnimatedText from "src/app/components/animatedText.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
import S3Content from "src/app/components/s3-components/s3content.js";


const Section3 = () => {
  return (
    <section className="section3">
      <div className="line-container-s3">
        <Linea2 />
        
      </div>
      <div className="s3-upbar">
        <span className="s3-upbar-count">
          <AnimatedText
            texto="03 /"
            width="auto"
            justifyContent="start"
            fontSize="1vw"
            textAlign="left"
          />{" "}
        </span>
        <span className="s3-upbar-projects bold-text">
          <AnimatedText
            texto="PROYECTOS"
            width="auto"
            justifyContent="start"
            fontSize="1vw"
            textAlign="left"
          />{" "}
        </span>
  
        <span className="s3-upbar-count2">
          <AnimatedText
            texto="/ 04"
            width="auto"
            justifyContent="start"
            fontSize="1vw"
            textAlign="left"
          />{" "}
        </span>
      </div>
      <S3Content/>
    </section>
  );
};

export default Section3;
