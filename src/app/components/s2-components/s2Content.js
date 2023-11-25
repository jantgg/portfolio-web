"use client";
import React, { useState, useEffect, useRef } from "react";
import "./s2Content.css";
import Image from "next/image";
import { MdArrowDownward } from "react-icons/md";
import Linea from "src/app/components/linea.js";
import Circulo from "src/app/components/circulo.js";
import AnimatedText from "src/app/components/animatedText.js";
import AnimatedP from "src/app/components/s2-components/animatedP.js";
import photo from "src/app/components/img/photo.jpg";

const S2Content = () => {
  return (
    <div className="s2c-main">
      <div className="s2c-p1">
        <h2 className="bold-text s2c-p1-h2">
          {" "}
          <AnimatedText
            justifyContent="end"
            fontSize="2vw"
            textAlign="right"
            texto="DESARROLLADOR FULL STACK"
          />
        </h2>
        <AnimatedP
            justifyContent="center"
            fontSize="1.2vw"
            textAlign="justify"
          />
        <p>
          
        </p>
      </div>
      <p className="s2c-p2"></p>
      <div className="s2c-photo">
        <Image src={photo} className="s2c-photo-inner" contain />
      </div>
      <div className="s2c-text"></div>
    </div>
  );
};

export default S2Content;