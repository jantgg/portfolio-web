"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import "./loader.css";
import { MdArrowDownward } from "react-icons/md";
import Linea from "src/app/components/linea.js";
import Circulo from "src/app/components/circulo.js";
import LoadText from "src/app/components/loader/loadText.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
import S2Content from "src/app/components/s2-components/s2Content.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";


import { Section1Context } from "src/app/components/loader/s1-context.js";

const Loader = () => {
  const { loaded, changeLoaded } = useContext(Section1Context);
  const [contador, setContador] = useState(0);
  const [iniciarContador, setIniciarContador] = useState(true);
  const [desvanecer, setDesvanecer] = useState(false);

   useEffect(() => {
     let intervalo;

     if (iniciarContador) {
       intervalo = setInterval(() => {
         setContador((prevContador) => {
           if (prevContador < 100) {
             return prevContador + 2;
           } else {
             clearInterval(intervalo);
             return 100;
           }
         });
       }, 1300 / 50); // Dividir 2.3 segundos en 50 actualizaciones
     }

     return () => clearInterval(intervalo);
   }, [iniciarContador]);

   useEffect(() => {
    setTimeout(() => {
      setDesvanecer(true);
      setTimeout(() => { changeLoaded(true)}, 100)
    }, 2400);
  }, [changeLoaded]);


  return (
    <section className={`loader ${desvanecer ? "gone" : ""}`}>
      <LoadText
        texto="JUAN ANTONIO"
        width="100%"
        justifyContent="center"
        fontSize="7vw"
        textAlign="center"
      />
      <LoadText
        texto="GOMEZ GIL"
        width="100%"
        justifyContent="center"
        fontSize="7vw"
        textAlign="center"
      />

      <div className="counter">{contador.toString().padStart(3, '0')}%</div>
    </section>
  );
};

export default Loader;
