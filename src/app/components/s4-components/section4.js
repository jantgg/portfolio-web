"use client";
import React, { useState, useEffect, useRef } from "react";
import "./section4.css";
import Linea2 from "src/app/components/s3-components/linea2.js";
import CirculoS4 from "src/app/components/s4-components/circuloS4.js";
import AnimatedText from "src/app/components/animatedText.js";



const Section4 = () => {
  return (
    <section className="section4">
      <div className="line-container-s4">
        <Linea2 />
      </div>
      <div className="s4-content">
        <h3 className="light-text mb-5vh">
          {" "}
          <AnimatedText
            justifyContent="center"
            fontSize="1.5vw"
            textAlign="center"
            texto="¿TIENES UN PROYECTO EN MENTE?"
          />
        </h3>
        <div className=" mb-5vh">
          {" "}
          <AnimatedText
            justifyContent="center"
            fontSize="5vw"
            textAlign="center"
            texto="TRABAJEMOS JUNTOS"
          />
        </div>
        <CirculoS4 hacerScroll={true} fontSize="0.8vw">
          {" "}
          ESCRIBIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE
        </CirculoS4>
      </div>
      <div className="downbar">
        <span className=""> SIÉNTETE LIBRE DE CONTACTAR CONMIGO EN REDES</span>
        <div className="downbar-socials">
          {" "}
          <a className="navbar-mid-btn navbar-btn " href="mailto:jantgomezgil@hotmail.com">EMAIL</a>
          <a className="navbar-mid-btn navbar-btn " href="https://www.linkedin.com/in/jant-gg/" target="_blank" >LINKEDIN</a>
        </div>
      </div>
    </section>
  );
};

export default Section4;
