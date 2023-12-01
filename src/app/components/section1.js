"use client";
import React, { useState, useEffect, useRef } from "react";
import "./section1.css";
import { MdArrowDownward } from "react-icons/md";
import Circulo from "src/app/components/circulo.js";
import AnimatedText from "src/app/components/animatedText.js";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="side-tittle">
        <span className="side-tittle-inner">
          <AnimatedText
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
          <AnimatedText
            texto="DESARROLLADOR"
            width="100%"
            justifyContent="center"
            fontSize="3.5vw"
            textAlign="center"
          />{" "}
        </span>
        <span className="t-2 bold-text">
          <AnimatedText
            texto="FULL-STACK"
            width="100%"
            justifyContent="center"
            fontSize="10vw"
            textAlign="center"
          />
        </span>
        <span className="t-3">
          <span className="t-3-1 light-text">
            <AnimatedText
              texto="ENFOCADO EN"
              width="100%"
              justifyContent="end"
              fontSize="3.5vw"
              textAlign="right"
            />
          </span>
          <span className="t-3-2 bold-text">
            <AnimatedText
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
            <AnimatedText
              texto="CREO INTERFACES DE USUARIO"
              width="100%"
              justifyContent="end"
              fontSize="1.2vw"
              textAlign="right"
            />
          </span>
          <span className="t-p-child2">
            <AnimatedText
              texto="ATRACTIVAS&nbsp;&nbsp; Y &nbsp;&nbsp;FUNCIONALES&nbsp;&nbsp; CON&nbsp;UNA"
              width="auto"
              justifyContent="end"
              fontSize="1.2vw"
              textAlign="right"
            />{" "}
          </span>
          <span className="t-p-child3">
            <AnimatedText
              texto="SÓLIDA&nbsp;&nbsp;&nbsp;&nbsp;COMPRENSIÓN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DE&nbsp;&nbsp;&nbsp;&nbsp;BACK-END"
              width="auto"
              justifyContent="end"
              fontSize="1.2vw"
              textAlign="right"
            />
          </span>
          <span className="t-p-child4">
            <AnimatedText
              texto="PARA OFRECER SOLUCIONES INTEGRALES"
              width="auto"
              justifyContent="end"
              fontSize="1.2vw"
              textAlign="right"
            />
          </span>
          <span className="t-p-child5">
            <AnimatedText
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

      {/* <span className="first-line">
        <span className="first-line-t">
          <span style="">F</span>
          <span style="">U</span>
          <span style="">L</span>
          <span style="">L</span>
          <span style=""> </span>
          <span style="">S</span>
          <span style="">T</span>
          <span style="">A</span>
          <span style="">C</span>
          <span style="">K</span>
        </span>
        <span className="first-line-b">
          <span style="">D</span>
          <span style="">E</span>
          <span style="">V</span>
          <span style="">E</span>
          <span style="">L</span>
          <span style="">O</span>
          <span style="">P</span>
          <span style="">E</span>
          <span style="">R</span>
          <span style=""></span>
          <span style=""></span>
          <span style=""></span>
          <span style=""></span>
          <span style=""></span>
        </span>
      </span> */}
    </section>
  );
};

export default Section1;
