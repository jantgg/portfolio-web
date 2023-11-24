"use client";
import React, { useState, useEffect, useRef } from "react";
import "./section1.css";
import { MdArrowDownward } from "react-icons/md";
import Circulo from "src/app/components/circulo.js";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="side-tittle">
        <span className="side-tittle-inner">
          01 // 04 &nbsp; - &nbsp;SCROLL&nbsp;&nbsp; <MdArrowDownward />{" "}
        </span>
      </div>
      <div className="tittles ">
        {" "}
        <span className="t-1 light-text">DESARROLLADOR</span>
        <span className="t-2 ">FULL-STACK</span>
        <span className="t-3 ">
          <span className="t-3-1 light-text">ENFOCADO EN</span>
          <span className="t-3-2">FRONT</span>
        </span>
        <span className="t-p">
          <span className="t-p-child1">INTERFACES DE USUARIO</span>
          <span className="t-p-child2">
            {" "}
            ATRACTIVAS&nbsp; Y&nbsp; &nbsp;FUNCIONALES&nbsp;&nbsp; CON
            &nbsp;&nbsp;UNA
          </span>
          <span className="t-p-child3">
            SÓLIDA &nbsp;&nbsp;&nbsp;COMPRENSIÓN&nbsp;&nbsp; DEL&nbsp;&nbsp;
            BACK-END
          </span>
          <span className="t-p-child4">PARA OFRECER SOLUCIONES INTEGRALES</span>
          <span className="t-p-child5">Y EFICIENTES.</span>
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
          <Circulo hacerScroll={true}> <MdArrowDownward /></Circulo>
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
