"use client";
import React, { useState, useEffect, useRef } from "react";
import "./section4.css";
import { MdArrowDownward } from "react-icons/md";
import Linea2 from "src/app/components/s3-components/linea2.js";
import Circulo from "src/app/components/circulo.js";
import AnimatedText from "src/app/components/animatedText.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
import S3Content from "src/app/components/s3-components/s3Content.js";

const Section4 = () => {
  return (
    <section className="section4">
      <div className="line-container-s4">
        <Linea2 />
      </div>
      <div className="s4-content">
        <h3 className="light-text">
          {" "}
          <AnimatedText
            justifyContent="center"
            fontSize="1.5vw"
            textAlign="center"
            texto="¿TIENES UN PROYECTO EN MENTE?"
          />
        </h3>
        <p className="bold-text">
          {" "}
          <AnimatedText
            justifyContent="center"
            fontSize="4vw"
            textAlign="center"
            texto="TRABAJEMOS JUNTOS"
          />
        </p>
        <Circulo hacerScroll={true} fontSize="0.8vw">
          {" "}
          ESCRIBIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE
        </Circulo>
      </div>
      <div className="downbar">
        <span className=""> SIÉNTETE LIBRE DE CONTACTAR CONMIGO EN REDES</span>
        <div className="downbar-socials">
          {" "}
          <a className="navbar-mid-btn navbar-btn ">EMAIL</a>
          <a className="navbar-mid-btn navbar-btn ">LINKEDIN</a>
        </div>
      </div>
    </section>
  );
};

export default Section4;
