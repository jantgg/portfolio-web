"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import "./s3content.css";
import Circulo from "src/app/components/circulo.js";
import Dapaolo from "src/app/components/img/dapaolod.png";
import onbikes from "src/app/components/img/onbikes.png";
import skfilms from "src/app/components/img/skfilms.png";
import tatoo from "src/app/components/img/tatoo.png";
import negocio from "src/app/components/img/negocio.png";
import netflix from "src/app/components/img/netflix.png";
import AnimatedP2 from "src/app/components/s3-components/animatedP2.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
import gsap from "gsap";
import Image from "next/image";
import { Section3Context } from "src/app/components/s3-components/s3-context.js";

const S3Content = () => {
  const { boton3, changeBoton3 } = useContext(Section3Context);
  const [pTittle1, setPTittle1] = useState(false);
  const [pTittle2, setPTittle2] = useState(false);
  const [pTittle3, setPTittle3] = useState(false);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);
  const h3Ref = useRef(null);

  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);
  const [project4, setProject4] = useState(false);
  const [project5, setProject5] = useState(false);
  const [project6, setProject6] = useState(false);

  useEffect(() => {
    if (boton3 === false) {
      setProject1(true);
    } else {
      setProject1(false);
      setProject2(false);
      setProject3(false);
      setProject4(false);
      setProject5(false);
      setProject6(false);
    }
  }, [boton3]);

  useEffect(() => {
    const currentDiv3 = div3Ref.current;
    const currentDiv4 = div4Ref.current;
    const currentDiv5 = div5Ref.current;

    // Establecer el estado inicial
    gsap.set([p1Ref.current, p2Ref.current, p3Ref.current, h3Ref.current], {
      opacity: 0,
    });
    gsap.set(h3Ref.current, { opacity: 0 });

    // Funciones para manejar la animación
    const handleMouseEnter = (ref, titleNumber) => {
      gsap.to(ref.current, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 0.5,
      });
      gsap.to(h3Ref.current, { opacity: 1, duration: 0.5 });

      if (titleNumber === 1) setPTittle1(true);
      if (titleNumber === 2) setPTittle2(true);
      if (titleNumber === 3) setPTittle3(true);
    };

    const handleMouseLeave = (ref, titleNumber) => {
      gsap.to(ref.current, {
        y: 100,
        opacity: 0,
        ease: "power2.out",
        duration: 0.5,
      });
      gsap.to(h3Ref.current, { opacity: 0, duration: 0.5 });

      if (titleNumber === 1) setPTittle1(false);
      if (titleNumber === 2) setPTittle2(false);
      if (titleNumber === 3) setPTittle3(false);
    };

    // Event listeners
    if (currentDiv3) {
      currentDiv3.addEventListener("mouseenter", () =>
        handleMouseEnter(p1Ref, 1)
      );
      currentDiv3.addEventListener("mouseleave", () =>
        handleMouseLeave(p1Ref, 1)
      );
    }

    if (currentDiv4) {
      currentDiv4.addEventListener("mouseenter", () =>
        handleMouseEnter(p2Ref, 2)
      );
      currentDiv4.addEventListener("mouseleave", () =>
        handleMouseLeave(p2Ref, 2)
      );
    }

    if (currentDiv5) {
      currentDiv5.addEventListener("mouseenter", () =>
        handleMouseEnter(p3Ref, 3)
      );
      currentDiv5.addEventListener("mouseleave", () =>
        handleMouseLeave(p3Ref, 3)
      );
    }
    // Limpieza de los event listeners
    return () => {
      if (currentDiv3) {
        currentDiv3.removeEventListener("mouseenter", () =>
          handleMouseEnter(p1Ref, 1)
        );
        currentDiv3.removeEventListener("mouseleave", () =>
          handleMouseLeave(p1Ref, 1)
        );
      }

      if (currentDiv4) {
        currentDiv4.removeEventListener("mouseenter", () =>
          handleMouseEnter(p2Ref, 2)
        );
        currentDiv4.removeEventListener("mouseleave", () =>
          handleMouseLeave(p2Ref, 2)
        );
      }

      if (currentDiv5) {
        currentDiv5.removeEventListener("mouseenter", () =>
          handleMouseEnter(p3Ref, 3)
        );
        currentDiv5.removeEventListener("mouseleave", () =>
          handleMouseLeave(p3Ref, 3)
        );
      }
    };
  }, []);

  return (
    <div className="s3-content">
      <div className="s3c-div1">
        <Circulo onCustomClick={() => changeBoton3(!boton3)} fontSize="0.8vw">
          {boton3 ? (
            <>
              {" "}
              VER TODOS<br></br>
              LOS<br></br> PROYECTOS
            </>
          ) : (
            <>VOLVER</>
          )}
        </Circulo>
      </div>
      <div className={`s3c-div2  ${boton3 ? "opa3" : "hided3"}`}>
        <AnimatedP2 />
      </div>
      <a
        href="https://youtu.be/KnRoTVy80_8"
        target="_blank"
        className={`s3c-div3 ${pTittle2 || pTittle3 ? "oscuro" : ""} ${
          boton3 ? "opa3" : "hided3"
        }  `}
        ref={div3Ref}
      >
        <Image alt="imagen" src={onbikes} contain="true" className="s3c-img" />
        {/* <div className={`s3c-project-details white-text ${pTittle1 ? "opa1" : ""}`}>
          <span>
            {" "}
            <HoverText texto="REACT" />
          </span>
          <span>
            {" "}
            <HoverText texto="FLASK" />
          </span>
          <span>
            {" "}
            <HoverText texto="SQL" />
          </span>
        </div> */}
      </a>
      <a
        href="https://www.youtube.com/watch?v=eVDP6W3bXG0"
        target="_blank"
        className={`s3c-div4 ${pTittle1 || pTittle3 ? "oscuro" : ""} ${
          boton3 ? "opa3" : "hided3"
        }  `}
        ref={div4Ref}
      >
        <Image alt="imagen" src={negocio} contain="true" className="s3c-img" />{" "}
        {/* <div className={`s3c-project-details white-text ${pTittle2 ? "opa1" : ""}`}>
          <span>
            {" "}
            <HoverText texto="NEXT.JS" />
          </span>
          <span>
            {" "}
            <HoverText texto="NODE.JS" />
          </span>
          <span>
            {" "}
            <HoverText texto="MONGO-DB" />
          </span>
        </div> */}
      </a>
      <a
        href="https://nextjs-restaurant-dapaolo.vercel.app/"
        target="_blank"
        className={`s3c-div5 ${pTittle1 || pTittle2 ? "oscuro" : ""} ${
          boton3 ? "opa3" : "hided3"
        }  `}
        ref={div5Ref}
      >
        <Image alt="imagen" src={Dapaolo} contain="true" className="s3c-img" />{" "}
        {/* <div className={`s3c-project-details white-text ${pTittle3 ? "opa1" : ""}`}>
          <span>
            {" "}
            <HoverText texto="NEXT.JS" />
          </span>
          <span>
            {" "}
            <HoverText texto="PARALLAX" />
          </span>
          <span>
            {" "}
            <HoverText texto="PHOTOSHOP" />
          </span>
        </div> */}
      </a>
      <div className={`s3c-div6 ${boton3 ? "opa3" : "hided3"}`}>
        <p
          ref={p1Ref}
          className="bold-text"
          style={{ opacity: 0, transform: "translateY(100%)" }}
        >
          ONBIKES
        </p>

        <p
          ref={p2Ref}
          className="bold-text"
          style={{ opacity: 0, transform: "translateY(100%)" }}
        >
          MI NEGOCIO
        </p>
        <p
          ref={p3Ref}
          className="bold-text"
          style={{ opacity: 0, transform: "translateY(100%)" }}
        >
          DA PAOLO
        </p>
      </div>
      <div className={`s3c-div7 ${boton3 ? "hided3" : "opa3"}`}>
        <div className={`container-img-div7 ${project1 ? "opa3" : "hided3"}`}>
          <Image
            alt="imagen"
            src={negocio}
            contain="true"
            className="s3c-img-div7"
          />
        </div>
        <div className={`container-img-div7 ${project2 ? "opa3" : "hided3"}`}>
          <Image
            alt="imagen"
            src={onbikes}
            contain="true"
            className="s3c-img-div7"
          />
        </div>
        <div className={`container-img-div7 ${project3 ? "opa3" : "hided3"}`}>
          <Image
            alt="imagen"
            src={Dapaolo}
            contain="true"
            className="s3c-img-div7"
          />
        </div>
        <div className={`container-img-div7 ${project4 ? "opa3" : "hided3"}`}>
          <Image
            alt="imagen"
            src={skfilms}
            contain="true"
            className="s3c-img-div7"
          />
        </div>
        <div className={`container-img-div7 ${project5 ? "opa3" : "hided3"}`}>
          <Image
            alt="imagen"
            src={tatoo}
            contain="true"
            className="s3c-img-div7"
          />
        </div>
        <div className={`container-img-div7 ${project6 ? "opa3" : "hided3"}`}>
          <Image
            alt="imagen"
            src={netflix}
            contain="true"
            className="s3c-img-div7"
          />
        </div>
      </div>
      <div className={`s3c-div8 ${boton3 ? "hided3" : "opa3"}`}>
        <div
          className={`div8-son ${project1 ? "contrast-div8-son" : ""}`}
          onMouseEnter={() => {
            setProject1(true);
            setProject2(false);
            setProject3(false);
            setProject4(false);
            setProject5(false);
            setProject6(false);
          }}
        >
          <h4 className={`center-title-project ${project1 ? "opa0" : "opa1"}`}>
            MI NEGOCIO
          </h4>
          <div className="div8-son-l">
            <h4 className={`s3c-p-name bold `}>
              <span className={`s3c-span-name ${project1 ? "opa1" : "opa0"}`}>
                MI NEGOCIO
              </span>{" "}
              <span
                className={`smaller-desc ${
                  project1 ? "s3c-p-opa1" : "s3c-p-opa0"
                }`}
              >
                NEXT.JS / NODE.JS / MONGODB / MONGOOSE
              </span>
            </h4>
            <p
              className={`s3c-p-desc light-text ${
                project1 ? "s3c-p-opa1" : "s3c-p-opa0"
              }`}
            >
              <span className="normal-text">
                CONTROL Y GESTIÓN DE CLIENTES, PROVEEDORES, PRODUCTOS,
                SERVICIOS, TAREAS, GASTOS Y VENTAS
              </span>
            </p>
          </div>
          <div
            className={`div8-son-socials ${
              project1 ? "s3c-p-opa1" : "s3c-p-opa0"
            }`}
          >
            <a>
              <HoverText
                target="_blank"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7143984188545822720/"
                texto="LINKEDIN"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://github.com/jantgg/mi_negocio"
                texto="GITHUB"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://youtu.be/eVDP6W3bXG0"
                texto="VIDEO"
              />
            </a>
          </div>
        </div>
        <div
          className={`div8-son ${project2 ? "contrast-div8-son" : ""}`}
          onMouseEnter={() => {
            setProject1(false);
            setProject2(true);
            setProject3(false);
            setProject4(false);
            setProject5(false);
            setProject6(false);
          }}
        >
          <div className="s3c-top-line"></div>
          <h4 className={`center-title-project ${project2 ? "opa0" : "opa1"}`}>
            ONBIKES
          </h4>
          <div className="div8-son-l">
            <h4 className={`s3c-p-name bold `}>
              <span className={`s3c-span-name ${project2 ? "opa1" : "opa0"}`}>
                ONBIKES
              </span>{" "}
              <span
                className={`smaller-desc ${
                  project2 ? "s3c-p-opa1" : "s3c-p-opa0"
                }`}
              >
                REACT.JS / FLASK / CSS3 / SQL
              </span>
            </h4>
            <p
              className={`s3c-p-desc light-text ${
                project2 ? "s3c-p-opa1" : "s3c-p-opa0"
              }`}
            >
              <span className="normal-text">
                TEST CON SUGERENCIAS, CREACIÓN DE RUTAS CON MAPS, REGISTRO COMO
                FOTÓGRAFO, SECCIÓN FAVS, Y MÁS{" "}
              </span>
            </p>
          </div>
          <div
            className={`div8-son-socials ${
              project2 ? "s3c-p-opa1" : "s3c-p-opa0"
            }`}
          >
            <a>
              <HoverText
                target="_blank"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7142841278521683969/"
                texto="LINKEDIN"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://github.com/jantgg/Onbikes"
                texto="GITHUB"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://youtu.be/KnRoTVy80_8"
                texto="VIDEO"
              />
            </a>
          </div>
        </div>
        <div
          className={`div8-son ${project3 ? "contrast-div8-son" : ""}`}
          onMouseEnter={() => {
            setProject1(false);
            setProject2(false);
            setProject3(true);
            setProject4(false);
            setProject5(false);
            setProject6(false);
          }}
        >
          <div className="s3c-top-line"></div>
          <h4 className={`center-title-project ${project3 ? "opa0" : "opa1"}`}>
            DA PAOLO
          </h4>
          <div className="div8-son-l">
            <h4 className={`s3c-p-name bold `}>
              <span className={`s3c-span-name ${project3 ? "opa1" : "opa0"}`}>
                DA PAOLO
              </span>{" "}
              <span
                className={`smaller-desc ${
                  project3 ? "s3c-p-opa1" : "s3c-p-opa0"
                }`}
              >
                NEXT.JS / PHOTOSHOP / CSS3 / HTML5
              </span>
            </h4>
            <p
              className={`s3c-p-desc light-text ${
                project3 ? "s3c-p-opa1" : "s3c-p-opa0"
              }`}
            >
              <span className="normal-text">
                EFECTO PARALLAX CSS3, OPTIMIZACIÓN CON NEXT.JS, CINCO VISTAS
                ÚNICAS
              </span>
            </p>
          </div>
          <div
            className={`div8-son-socials ${
              project3 ? "s3c-p-opa1" : "s3c-p-opa0"
            }`}
          >
            <a>
              <HoverText
                target="_blank"
                href="https://nextjs-restaurant-dapaolo.vercel.app/"
                texto="LINK"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://github.com/jantgg/nextjs-restaurant-dapaolo"
                texto="GITHUB"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://youtu.be/B1ekpRTwoJw"
                texto="VIDEO"
              />
            </a>
          </div>
        </div>
        <div
          className={`div8-son ${project4 ? "contrast-div8-son" : ""}`}
          onMouseEnter={() => {
            setProject1(false);
            setProject2(false);
            setProject3(false);
            setProject4(true);
            setProject5(false);
            setProject6(false);
          }}
        >
          <div className="s3c-top-line"></div>
          <h4 className={`center-title-project ${project4 ? "opa0" : "opa1"}`}>
            SK FILMS
          </h4>
          <div className="div8-son-l">
            <h4 className={`s3c-p-name bold `}>
              <span className={`s3c-span-name ${project4 ? "opa1" : "opa0"}`}>
                SK FILMS
              </span>{" "}
              <span
                className={`smaller-desc ${
                  project4 ? "s3c-p-opa1" : "s3c-p-opa0"
                }`}
              >
                NEXT.JS / JAVASCRIPT / CSS3 / HTML5
              </span>
            </h4>
            <p
              className={`s3c-p-desc light-text ${
                project4 ? "s3c-p-opa1" : "s3c-p-opa0"
              }`}
            >
              <span className="normal-text">
                DISEÑO SINGLE PAGE, SIN NAVEGACIONES, ENFOQUE VISUAL DIRECTO
              </span>
            </p>
          </div>
          <div
            className={`div8-son-socials ${
              project4 ? "s3c-p-opa1" : "s3c-p-opa0"
            }`}
          >
            <a>
              <HoverText
                target="_blank"
                href="https://www.skfilms.es/"
                texto="LINK"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7142846895206424577/"
                texto="LINKEDIN"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://github.com/jantgg/skfilms"
                texto="GITHUB"
              />
            </a>
          </div>
        </div>
        <div
          className={`div8-son ${project5 ? "contrast-div8-son" : ""}`}
          onMouseEnter={() => {
            setProject1(false);
            setProject2(false);
            setProject3(false);
            setProject4(false);
            setProject5(true);
            setProject6(false);
          }}
        >
          <div className="s3c-top-line"></div>
          <h4 className={`center-title-project ${project5 ? "opa0" : "opa1"}`}>
            INKREDIBLE
          </h4>
          <div className="div8-son-l">
            <h4 className={`s3c-p-name bold `}>
              <span className={`s3c-span-name ${project5 ? "opa1" : "opa0"}`}>
                INKREDIBLE
              </span>{" "}
              <span
                className={`smaller-desc ${
                  project5 ? "s3c-p-opa1" : "s3c-p-opa0"
                }`}
              >
                NEXT.JS / JARALLAX / FLICKITY / FANCYBOX
              </span>
            </h4>
            <p
              className={`s3c-p-desc light-text ${
                project5 ? "s3c-p-opa1" : "s3c-p-opa0"
              }`}
            >
              <span className="normal-text">
                SINGLE PAGE, PARALLAX, CAROUSELS, SCROLL INTERACTIVO, IMPACTO
                VISUAL ALTO
              </span>
            </p>
          </div>
          <div
            className={`div8-son-socials ${
              project5 ? "s3c-p-opa1" : "s3c-p-opa0"
            }`}
          >
            <a>
              <HoverText
                target="_blank"
                href="https://tattoo-plum.vercel.app/"
                texto="LINK"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7143194325080879104/"
                texto="LINKEDIN"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://github.com/jantgg/tattoo"
                texto="GITHUB"
              />
            </a>
          </div>
        </div>
        <div
          className={`div8-son ${project6 ? "contrast-div8-son" : ""}`}
          onMouseEnter={() => {
            setProject1(false);
            setProject2(false);
            setProject3(false);
            setProject4(false);
            setProject5(false);
            setProject6(true);
          }}
        >
          <div className="s3c-top-line"></div>
          <h4 className={`center-title-project ${project6 ? "opa0" : "opa1"}`}>
            NETFLIX CLONE
          </h4>
          <div className="div8-son-l">
            <h4 className={`s3c-p-name bold `}>
              <span className={`s3c-span-name ${project6 ? "opa1" : "opa0"}`}>
                NETFLIX CLONE
              </span>{" "}
              <span
                className={`smaller-desc ${
                  project6 ? "s3c-p-opa1" : "s3c-p-opa0"
                }`}
              >
                NEXT.JS / NODE.JS / TYPESCRIPT / TAILWINDCSS
              </span>
            </h4>
            <p
              className={`s3c-p-desc light-text ${
                project6 ? "s3c-p-opa1" : "s3c-p-opa0"
              }`}
            >
              <span className="normal-text">
                AUTENTICACIÓN OAUTH, REGISTRO DE FAVORITOS, STREAMING FUNCIONAL
              </span>
            </p>
          </div>
          <div
            className={`div8-son-socials ${
              project6 ? "s3c-p-opa1" : "s3c-p-opa0"
            }`}
          >
            <a>
              <HoverText
                target="_blank"
                href="https://www.linkedin.com/posts/jant-gg_video-de-muestra-netflix-clone-by-jantgg-activity-7049378127315091458-9xPs?utm_source=share&utm_medium=member_desktop"
                texto="LINKEDIN"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://github.com/jantgg/netflixclonetrial"
                texto="GITHUB"
              />
            </a>
            <a>
              <HoverText
                target="_blank"
                href="https://youtu.be/jCSWWfrvmOA"
                texto="VIDEO"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S3Content;
