"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import "./s2-p2.css";
import Image from "next/image";
import { MdArrowDownward } from "react-icons/md";
import Linea from "src/app/components/linea.js";
import Circulito from "src/app/components/s2-components/circulito.js";
import LineaV from "src/app/components/s2-components/lineaV.js";
import AnimatedText from "src/app/components/animatedText.js";
import AnimatedP from "src/app/components/s2-components/animatedP.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
import img from "src/app/components/img/photo.jpg";
import { Section2Context } from "src/app/components/s2-components/s2-context.js";

const S2P2 = ({ isActive }) => {
  const [active, setActive] = useState(false);
  const [row1, setRow1] = useState(false);
  const [row2, setRow2] = useState(false);
  const [row3, setRow3] = useState(false);
  const [row4, setRow4] = useState(false);

  useEffect(() => {
    if (isActive === true) {
      setTimeout(() => setActive(!active), 700);
    } else {
      setActive(false);
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setRow1(!row1); // Primer cambio de estado

        setTimeout(() => {
          setRow2(!row2); // Segundo cambio de estado

          setTimeout(() => {
            setRow3(!row3); // Tercer cambio de estado

            setTimeout(() => {
              setRow4(!row4); // Cuarto cambio de estado
            }, 800);
          }, 800);
        }, 800);
      }, 800);
    } else {
      setActive(false);
      setRow1(false);
      setRow2(false);
      setRow3(false);
      setRow4(false);
    }
  }, [isActive]);

  return (
    <div className={`s2c-p2 ${isActive ? "" : "opa0"}`}>
      <div className="p2-exp">
        <h4 className={` ${isActive ? "opa1" : "opa0"}`}>
          EXPERIENCIA</h4>
        <div className={`p2-exp-1 ${isActive ? "opa1" : "opa0"}`}>
          <div className="p2-exp-lines">
            <Circulito active={row1} delay={0} />
            <LineaV active={row1} length="4vw" />
          </div>
          <p className={`p2-exp-p ${row1 ? "opa1" : ""}`}>
          <span className="p2-exp-p-tittle">PROGRAMADOR FULL STACK</span>
            <span className="p2-exp-p-description light-text">
              PRISMA DIGITAL
            </span>
            <span className="p2-exp-p-description light-text">
              DESARROLLO / DISEÑO
            </span>
            <span className="p2-exp-p-description light-text">
              2023-ACTUALIDAD
            </span>
          </p>
        </div>
        <div className={`p2-exp-1 ${isActive ? "opa1" : "opa0"}`}>
          <div className="p2-exp-lines">
            <Circulito active={row2} />
            <LineaV active={row2} length="4vw" />
          </div>
          <p className={`p2-exp-p ${row2 ? "opa1" : ""}`}>
            <span className="p2-exp-p-tittle">RESPONSABLE RETAIL</span>
            <span className="p2-exp-p-description light-text">SPRINTER</span>
            <span className="p2-exp-p-description light-text">
              RESPONSABLE / VENDEDOR / LOGÍSTICA
            </span>
            <span className="p2-exp-p-description light-text"> 2019-2022</span>
          </p>
        </div>
        <div className={`p2-exp-1 ${isActive ? "opa1" : "opa0"}`}>
          <div className="p2-exp-lines">
            <Circulito active={row3} />
            <LineaV active={row3} length="4vw" />
          </div>
          <p className={`p2-exp-p ${row3 ? "opa1" : ""}`}>
            <span className="p2-exp-p-tittle">HOSTELERÍA</span>
            <span className="p2-exp-p-description light-text">
              ALFIL / ZAMPA PIZZAS / CARPACCIO{" "}
            </span>
            <span className="p2-exp-p-description light-text">
              RESPONSABLE / PIZZERO / COCINERO
            </span>
            <span className="p2-exp-p-description light-text">
              ESPORÁDICO 2017-2022
            </span>
          </p>
        </div>
        <div className={`p2-exp-1 ${isActive ? "opa1" : "opa0"}`}>
          <div className="p2-exp-lines">
            <Circulito active={row4} />
          </div>
          <p className={`p2-exp-p ${row4 ? "opa1" : ""}`}>
          <span className="p2-exp-p-tittle">ENTRENADOR Y NUTRICIONISTA</span>
            <span className="p2-exp-p-description light-text">
              {" "}
              FREELANCE
            </span>
            <span className="p2-exp-p-description light-text"> 2015-2023</span>
          </p>
        </div>
      </div>
      <div className="p2-exp">
        <h4 className={` ${isActive ? "opa1" : "opa0"}`}>ESTUDIOS</h4>
        <div className={`p2-exp-1 ${isActive ? "opa1" : "opa0"}`}>
          <div className="p2-exp-lines">
            <Circulito active={row1} delay={0}/>
            <LineaV active={row1} length="4vw" />
          </div>
          <p className={`p2-exp-p ${row1 ? "opa1" : ""}`}>
          <span className="p2-exp-p-tittle">
              {" "}
             FULL STACK DEVELOPER
            </span>
            <span className="p2-exp-p-description light-text">
              4GEEKS ACADEMY ESPAÑA
            </span>
            <span className="p2-exp-p-description light-text">
              LEARN BY DOING
            </span>
            <span className="p2-exp-p-description light-text">2022-2023</span>
          </p>
        </div>
        <div className={`p2-exp-1 ${isActive ? "opa1" : "opa0"}`}>
          <div className="p2-exp-lines">
            <Circulito active={row2} />
            <LineaV active={row2} length="4vw" />
          </div>
          <p className={`p2-exp-p ${row2 ? "opa1" : ""}`}>
            <span className="p2-exp-p-tittle">NUTRICIÓN DEPORTIVA</span>
            <span className="p2-exp-p-description light-text">
              MÁSTER ICNS INSTITUTO
            </span>
            <span className="p2-exp-p-description light-text"> 2018-2019</span>
          </p>
        </div>
        <div className={`p2-exp-1 ${isActive ? "opa1" : "opa0"}`}>
          <div className="p2-exp-lines">
            <Circulito active={row3} />
          </div>
          <p className={`p2-exp-p ${row3 ? "opa1" : ""}`}>
          <span className="p2-exp-p-tittle">TÉCNICO SUPERIOR DEPORTE</span>
            <span className="p2-exp-p-description light-text">
              {" "}
              FP SUPERIOR, MEDAC, MÁLAGA
            </span>
            <span className="p2-exp-p-description light-text"> 2015-2017</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default S2P2;
