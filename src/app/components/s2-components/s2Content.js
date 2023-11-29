"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import "./s2Content.css";
import Image from "next/image";
import { MdArrowDownward } from "react-icons/md";
import Linea from "src/app/components/linea.js";
import Circulo from "src/app/components/circulo.js";
import AnimatedText from "src/app/components/animatedText.js";
import AnimatedP from "src/app/components/s2-components/animatedP.js";
import S2P2 from "src/app/components/s2-components/s2-p2.js";
import img from "src/app/components/img/photo.jpg";
import { Section2Context } from 'src/app/components/s2-components/s2-context.js';

const S2Content = () => {
  const { textoMovil, changeTextoMovil, textoL, changeTextoL, photo, changePhoto, boton, changeBoton } = useContext(Section2Context);

  useEffect(() => {
if (boton === false) {
  setTimeout(() => changeTextoMovil(boton), 200);
} else {
  changeTextoMovil(boton);
}
  }, [boton]);

  return (
    <div className="s2c-main">
      <div className={`s2c-p1 ${boton ? "": "opa0"}`}>
        <h2 className="bold-text s2c-p1-h2">
          {" "}
          <AnimatedText
            justifyContent="end"
            fontSize="2vw"
            textAlign="right"
            texto="JUAN ANTONIO GÓMEZ GIL"
          />
        </h2>
        <AnimatedP
          justifyContent="center"
          fontSize="1.2vw"
          textAlign="justify"
        />
      </div>
      <div className={`s2c-photo ${boton ? "": "s2c-photo-d"}`}>
        <Image
          src={img}
          className="s2c-photo-inner"
          contain="true"
          alt="Juan Antonio Gomez Gil personal photo"
        />
      </div>
      <div className={`s2c-button ${boton ? "": ""}`}>
        <Circulo onCustomClick={() => changeBoton(!boton)} fontSize="1vw">
          {boton ? <>SABER&nbsp;&nbsp;&nbsp;<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MÁS</>:<>VOLVER</>}
       
        </Circulo>
      </div>
      <S2P2 isActive={!textoMovil}/>
    </div>
  );
};

export default S2Content;
