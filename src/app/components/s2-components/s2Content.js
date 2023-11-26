"use client";
import React, { useState, useEffect, useRef } from "react";
import "./s2Content.css";
import Image from "next/image";
import { MdArrowDownward } from "react-icons/md";
import Linea from "src/app/components/linea.js";
import Circulo from "src/app/components/circulo.js";
import AnimatedText from "src/app/components/animatedText.js";
import AnimatedP from "src/app/components/s2-components/animatedP.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
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
      </div>
      <div className="s2c-p2">
        <h2 className="bold-text s2c-p2-h2">
          {" "}
          <AnimatedText
            justifyContent="end"
            fontSize="2vw"
            textAlign="right"
            texto="STACK TECNOLÓGICO"
          />
        </h2>

        <div className="s2c-ts light-text">
          <HoverText texto="NEXT.JS" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false' /> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="REACT" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="FLASK" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="NODE.JS" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="JAVASCRIPT" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> 
          <HoverText texto="PYTHON" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="HTML5" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="CSS" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="MySQL" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="MONGOOSE" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/>
          <HoverText texto="MONGO-DB" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="GSAP" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="FRAMERMOTION" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="DISEÑO-UX" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> 
          <HoverText texto="WEB&MÓVIL" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="ANIMACIÓN" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/> <span className="bold-text">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
          <HoverText texto="PHOTOSHOP" width = 'auto' fontSize = '1.5vw' cursor='crosshair' delay='false'/>
        </div>
      </div>
      <div className="s2c-photo">
        <Image src={photo} className="s2c-photo-inner" contain />
      </div>
      <div className="s2c-button"><Circulo hacerScroll={true} fontSize='1vw'> SABER&nbsp;&nbsp;&nbsp;<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MÁS</Circulo></div>
    </div>
  );
};

export default S2Content;
