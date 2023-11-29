"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import "./s2-p2.css";
import Image from "next/image";
import { MdArrowDownward } from "react-icons/md";
import Linea from "src/app/components/linea.js";
import Circulo from "src/app/components/circulo.js";
import AnimatedText from "src/app/components/animatedText.js";
import AnimatedP from "src/app/components/s2-components/animatedP.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
import img from "src/app/components/img/photo.jpg";
import { Section2Context } from 'src/app/components/s2-components/s2-context.js';

const S2P2 = ({ isActive }) => {

  return (
    <div className={`s2c-p2 ${isActive ? "bg-blue":"bg-red"}`}>
      <div className="p2-exp"></div>
      <div className="p2-est"></div>
    </div>
  );
};

export default S2P2;
