"use client";
import React, { useState, useEffect, useRef } from "react";
import "./section2.css";
import { MdArrowDownward } from "react-icons/md";
import Linea from "src/app/components/linea.js";
import Circulo from "src/app/components/circulo.js";
import AnimatedText from "src/app/components/animatedText.js";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="linea-container">
        <Linea />
        <AnimatedText texto="hola paco"/>

      </div>
    </section>
  );
};

export default Section2;
