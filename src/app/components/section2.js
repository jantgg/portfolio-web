"use client";
import React, { useState, useEffect, useRef } from "react";
import "./section2.css";
import { MdArrowDownward } from "react-icons/md";
import Linea from "src/app/components/linea.js";
import Circulo from "src/app/components/circulo.js";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="linea-container">
        <Linea />

      </div>
    </section>
  );
};

export default Section2;
