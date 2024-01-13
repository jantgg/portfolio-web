"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import "./section1.css";
import { MdArrowDownward } from "react-icons/md";
import Circulo from "src/app/components/circulo.js";
import AnimatedTextS1 from "src/app/components/animatedTextS1.js";
import Loader from "src/app/components/loader/loader.js";
import { Section1Context } from 'src/app/components/loader/s1-context.js';


const Section1 = () => {
    const { loaded, changeLoaded } = useContext(Section1Context);

  return (
    <section className="section1">
      <Loader/>
      <div className="side-tittle">
        <span className="side-tittle-inner">
          <AnimatedTextS1
          animate={loaded}
            texto={
              <>
                <span>01 // 04 &nbsp; - &nbsp;SCROLL&nbsp;&nbsp;</span>
                <MdArrowDownward />
              </>
            }
            width="auto"
            justifyContent="start"
            fontSize="0.8vw"
            textAlign="left"
          />{" "}
        </span>
      </div>
      <div className="tittles ">
        {" "}
        <span className="t-1 light-text">
          <AnimatedTextS1
          animate={loaded}
            texto="DESARROLLADOR"
            width="100%"
            justifyContent="center"
            fontSize="3.5vw"
            textAlign="center"
          />{" "}
        </span>
        <span className="t-2 bold-text">
          <AnimatedTextS1
          animate={loaded}
            texto="FULL-STACK"
            width="100%"
            justifyContent="center"
            fontSize="10vw"
            textAlign="center"
          />
        </span>
        <span className="t-3">
          <span className="t-3-1 light-text">
            <AnimatedTextS1
            animate={loaded}
              texto="ENFOCADO EN"
              width="100%"
              justifyContent="end"
              fontSize="3.5vw"
              textAlign="right"
            />
          </span>
          <span className="t-3-2 bold-text">
            <AnimatedTextS1
            animate={loaded}
              texto="FRONT"
              width="100%"
              justifyContent="end"
              fontSize="10vw"
              textAlign="right"
            />{" "}
          </span>
        </span>
        <span className="t-p">
          <span className="t-p-child1">
            <AnimatedTextS1
            animate={loaded}
              texto="CREO INTERFACES DE USUARIO"
              width="100%"
              justifyContent="end"
              fontSize="1.2vw"
              textAlign="right"
            />
          </span>
          <span className="t-p-child2">
            <AnimatedTextS1
            animate={loaded}
              texto="ATRACTIVAS&nbsp;&nbsp; Y &nbsp;&nbsp;FUNCIONALES&nbsp;&nbsp; CON&nbsp;UNA"
              width="auto"
              justifyContent="end"
              fontSize="1.2vw"
              textAlign="right"
            />{" "}
          </span>
          <span className="t-p-child3">
            <AnimatedTextS1
            animate={loaded}
              texto="SÓLIDA&nbsp;&nbsp;&nbsp;&nbsp;COMPRENSIÓN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DE&nbsp;&nbsp;&nbsp;&nbsp;BACK-END"
              width="auto"
              justifyContent="end"
              fontSize="1.2vw"
              textAlign="right"
            />
          </span>
          <span className="t-p-child4">
            <AnimatedTextS1
            animate={loaded}
              texto="PARA OFRECER SOLUCIONES INTEGRALES"
              width="auto"
              justifyContent="end"
              fontSize="1.2vw"
              textAlign="right"
            />
          </span>
          <span className="t-p-child5">
            <AnimatedTextS1
            animate={loaded}
              texto=" Y EFICIENTES."
              width="auto"
              justifyContent="start"
              fontSize="1.2vw"
              textAlign="left"
            />
          </span>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "5vh",
            transform: "translateX(-0.45%)",
          }}
        >
          {" "}
          <Circulo hacerScroll={true}>
            {" "}
            <div className="espacio-fantasma"></div>
            <MdArrowDownward />
          </Circulo>
        </div>
      </div>
    </section>
  );
};

export default Section1;
