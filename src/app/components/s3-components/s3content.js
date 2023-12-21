"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import "./s3content.css";
import Circulo from "src/app/components/circulo.js";
import Dapaolo from "src/app/components/img/dapaolo1.jpg";
import AnimatedP2 from "src/app/components/s3-components/animatedP2.js";
import HoverText from "src/app/components/s2-components/hoverText.js";
import gsap from "gsap";
import Image from "next/image";
import { Section3Context } from 'src/app/components/s3-components/s3-context.js';

const S3Content = () => {
  const { textoMovil3, changeTextoMovil3, textoL3, changeTextoL3, photo3, changePhoto3, boton3, changeBoton3 } = useContext(Section3Context);

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
    div3Ref.current.addEventListener("mouseenter", () =>
      handleMouseEnter(p1Ref, 1)
    );
    div3Ref.current.addEventListener("mouseleave", () =>
      handleMouseLeave(p1Ref, 1)
    );

    div4Ref.current.addEventListener("mouseenter", () =>
      handleMouseEnter(p2Ref, 2)
    );
    div4Ref.current.addEventListener("mouseleave", () =>
      handleMouseLeave(p2Ref, 2)
    );

    div5Ref.current.addEventListener("mouseenter", () =>
      handleMouseEnter(p3Ref, 3)
    );
    div5Ref.current.addEventListener("mouseleave", () =>
      handleMouseLeave(p3Ref, 3)
    );

    // Limpieza de los event listeners
    return () => {
      div3Ref.current.removeEventListener("mouseenter", () =>
        handleMouseEnter(p1Ref, 1)
      );
      div3Ref.current.removeEventListener("mouseleave", () =>
        handleMouseLeave(p1Ref, 1)
      );

      div4Ref.current.removeEventListener("mouseenter", () =>
        handleMouseEnter(p2Ref, 2)
      );
      div4Ref.current.removeEventListener("mouseleave", () =>
        handleMouseLeave(p2Ref, 2)
      );

      div5Ref.current.removeEventListener("mouseenter", () =>
        handleMouseEnter(p3Ref, 3)
      );
      div5Ref.current.removeEventListener("mouseleave", () =>
        handleMouseLeave(p3Ref, 3)
      );
    };
  }, []);

  return (
    <div className="s3-content">
      <div className="s3c-div1">
      <Circulo onCustomClick={() => changeBoton3(!boton3)} fontSize="0.8vw">
          {boton3 ? <>         VER TODOS<br></br>
          LOS<br></br> PROYECTOS</>:<>VOLVER</>}
        </Circulo>
      </div>
      <div className={`s3c-div2  ${boton3 ? "opa3" :"hided3"}`}>
        <AnimatedP2 />
      </div>
      <a className={`s3c-div3 ${pTittle2 || pTittle3 ? "oscuro" :""} ${boton3 ? "opa3" :"hided3"}  `} ref={div3Ref}>
        <Image src={Dapaolo} contain="true" className="s3c-img" />
        <div className={`s3c-project-details ${pTittle1 ? "opa1" : ""}`}>
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
        </div>
      </a>
      <a className={`s3c-div4 ${pTittle1 || pTittle3 ? "oscuro" :""} ${boton3 ? "opa3" :"hided3"}  `} ref={div4Ref}>
      <Image src={Dapaolo} contain="true" className="s3c-img" />
        {" "}
        <div className={`s3c-project-details ${pTittle2 ? "opa1" : ""}`}>
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
        </div>
      </a>
      <a className={`s3c-div5 ${pTittle1 || pTittle2 ? "oscuro" :""} ${boton3 ? "opa3" :"hided3"}  `} ref={div5Ref}>
      <Image src={Dapaolo} contain="true" className="s3c-img" />
        {" "}
        <div className={`s3c-project-details ${pTittle3 ? "opa1" : ""}`}>
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
        </div>
      </a>
      <div className={`s3c-div6 ${boton3 ? "opa3" :"hided3"}`}>
 

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
              DASHBOARD
        </p>
        <p
          ref={p3Ref}
          className="bold-text"
          style={{ opacity: 0, transform: "translateY(100%)" }}
        >
          DA PAOLO
        </p>
      </div>
      <div className={`s3c-div7 ${boton3 ?  "hided3":"opa3"}`}>
        <div className={`container-img-div7 ${project1 ? "opa3":"hided3"}`}>
        <Image src={Dapaolo} contain="true" className="s3c-img-div7" />
        </div>
        <div className={`container-img-div7 ${project2 ? "opa3":"hided3"}`}>
        <Image src={Dapaolo} contain="true" className="s3c-img-div7" />
        </div>
        <div className={`container-img-div7 ${project3 ? "opa3":"hided3"}`}>
        <Image src={Dapaolo} contain="true" className="s3c-img-div7" />
        </div>
        <div className={`container-img-div7 ${project4 ? "opa3":"hided3"}`}>
        <Image src={Dapaolo} contain="true" className="s3c-img-div7" />
        </div>
        <div className={`container-img-div7 ${project5 ? "opa3":"hided3"}`}>
        <Image src={Dapaolo} contain="true" className="s3c-img-div7" />
        </div>
        <div className={`container-img-div7 ${project6 ? "opa3":"hided3"}`}>
        <Image src={Dapaolo} contain="true" className="s3c-img-div7" />
        </div>
      </div>
      <div className={`s3c-div8 ${boton3 ?  "hided3" : "opa3"}`}>
      <div className={`div8-son ${project1 ? "contrast-div8-son":""}`} onMouseEnter={() => {setProject1(true); setProject2(false); setProject3(false); setProject4(false); setProject5(false); setProject6(false)}}>
       
       <div className="div8-son-l">      
       <h4 className={`s3c-p-name bold `}><span className={`s3c-span-name ${project1 ? "":"s3c-p-tittle-center"}`}>DASHBOARD</span> <span className={`smaller-desc ${project1 ? "s3c-p-opa1":"s3c-p-opa0"}`}>NEXT.JS / NODE.JS / MONGODB / MONGOOSE</span></h4>
       <p className={`s3c-p-desc light-text ${project1 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span className="normal-text">CONTROL Y GESTIÓN DE CLIENTES, PROVEEDORES, PRODUCTOS, SERVICIOS, TAREAS, GASTOS Y VENTAS</span>
       </p>
       </div>
       <div className={`div8-son-socials ${project1 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span><HoverText texto="LINK" /></span>
        <span><HoverText texto="LINKEDIN" /></span>
        <span><HoverText texto="GITHUB" /></span>
        <span><HoverText texto="VIDEO" /></span>
       </div>

        </div>
      <div className={`div8-son ${project2 ? "contrast-div8-son":""}`} onMouseEnter={() => {setProject1(false); setProject2(true); setProject3(false); setProject4(false); setProject5(false); setProject6(false)}}>
      <div className="s3c-top-line"></div>
       <div className="div8-son-l">      
       <h4 className={`s3c-p-name bold `}><span className={`s3c-span-name ${project2 ? "":"s3c-p-tittle-center"}`}>DASHBOARD</span> <span className={`smaller-desc ${project2 ? "s3c-p-opa1":"s3c-p-opa0"}`}>NEXT.JS / NODE.JS / MONGODB / MONGOOSE</span></h4>
       <p className={`s3c-p-desc light-text ${project2 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span className="normal-text">CONTROL Y GESTIÓN DE CLIENTES, PROVEEDORES, PRODUCTOS, SERVICIOS, TAREAS, GASTOS Y VENTAS</span>
       </p>
       </div>
       <div className={`div8-son-socials ${project2 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span><HoverText texto="LINK" /></span>
        <span><HoverText texto="LINKEDIN" /></span>
        <span><HoverText texto="GITHUB" /></span>
        <span><HoverText texto="VIDEO" /></span>
       </div>
      </div>
      <div className={`div8-son ${project3 ? "contrast-div8-son":""}`} onMouseEnter={() => {setProject1(false); setProject2(false); setProject3(true); setProject4(false); setProject5(false); setProject6(false)}}>
               <div className="s3c-top-line"></div>
       <div className="div8-son-l">      
       <h4 className={`s3c-p-name bold `}><span className={`s3c-span-name ${project3 ? "":"s3c-p-tittle-center"}`}>DASHBOARD</span> <span className={`smaller-desc ${project3 ? "s3c-p-opa1":"s3c-p-opa0"}`}>NEXT.JS / NODE.JS / MONGODB / MONGOOSE</span></h4>
       <p className={`s3c-p-desc light-text ${project3 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span className="normal-text">CONTROL Y GESTIÓN DE CLIENTES, PROVEEDORES, PRODUCTOS, SERVICIOS, TAREAS, GASTOS Y VENTAS</span>
       </p>
       </div>
       <div className={`div8-son-socials ${project3 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span><HoverText texto="LINK" /></span>
        <span><HoverText texto="LINKEDIN" /></span>
        <span><HoverText texto="GITHUB" /></span>
        <span><HoverText texto="VIDEO" /></span>
       </div>
      </div>
      <div className={`div8-son ${project4 ? "contrast-div8-son":""}`} onMouseEnter={() => {setProject1(false); setProject2(false); setProject3(false); setProject4(true); setProject5(false); setProject6(false)}}>
               <div className="s3c-top-line"></div>
       <div className="div8-son-l">      
       <h4 className={`s3c-p-name bold `}><span className={`s3c-span-name ${project4 ? "":"s3c-p-tittle-center"}`}>DASHBOARD</span> <span className={`smaller-desc ${project4 ? "s3c-p-opa1":"s3c-p-opa0"}`}>NEXT.JS / NODE.JS / MONGODB / MONGOOSE</span></h4>
       <p className={`s3c-p-desc light-text ${project4 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span className="normal-text">CONTROL Y GESTIÓN DE CLIENTES, PROVEEDORES, PRODUCTOS, SERVICIOS, TAREAS, GASTOS Y VENTAS</span>
       </p>
       </div>
       <div className={`div8-son-socials ${project4 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span><HoverText texto="LINK" /></span>
        <span><HoverText texto="LINKEDIN" /></span>
        <span><HoverText texto="GITHUB" /></span>
        <span><HoverText texto="VIDEO" /></span>
       </div>
      </div>
      <div className={`div8-son ${project5 ? "contrast-div8-son":""}`} onMouseEnter={() => {setProject1(false); setProject2(false); setProject3(false); setProject4(false); setProject5(true); setProject6(false)}}>
               <div className="s3c-top-line"></div>
       <div className="div8-son-l">      
       <h4 className={`s3c-p-name bold `}><span className={`s3c-span-name ${project5 ? "":"s3c-p-tittle-center"}`}>DASHBOARD</span> <span className={`smaller-desc ${project5 ? "s3c-p-opa1":"s3c-p-opa0"}`}>NEXT.JS / NODE.JS / MONGODB / MONGOOSE</span></h4>
       <p className={`s3c-p-desc light-text ${project5 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span className="normal-text">CONTROL Y GESTIÓN DE CLIENTES, PROVEEDORES, PRODUCTOS, SERVICIOS, TAREAS, GASTOS Y VENTAS</span>
       </p>
       </div>
       <div className={`div8-son-socials ${project5 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span><HoverText texto="LINK" /></span>
        <span><HoverText texto="LINKEDIN" /></span>
        <span><HoverText texto="GITHUB" /></span>
        <span><HoverText texto="VIDEO" /></span>
       </div>
      </div>
      <div className={`div8-son ${project6 ? "contrast-div8-son":""}`} onMouseEnter={() => {setProject1(false); setProject2(false); setProject3(false); setProject4(false); setProject5(false); setProject6(true)}}>
               <div className="s3c-top-line"></div>
       <div className="div8-son-l">      
       <h4 className={`s3c-p-name bold `}><span className={`s3c-span-name ${project6 ? "":"s3c-p-tittle-center"}`}>DASHBOARD</span> <span className={`smaller-desc ${project6 ? "s3c-p-opa1":"s3c-p-opa0"}`}>NEXT.JS / NODE.JS / MONGODB / MONGOOSE</span></h4>
       <p className={`s3c-p-desc light-text ${project6 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span className="normal-text">CONTROL Y GESTIÓN DE CLIENTES, PROVEEDORES, PRODUCTOS, SERVICIOS, TAREAS, GASTOS Y VENTAS</span>
       </p>
       </div>
       <div className={`div8-son-socials ${project6 ? "s3c-p-opa1":"s3c-p-opa0"}`}>
        <span><HoverText texto="LINK" /></span>
        <span><HoverText texto="LINKEDIN" /></span>
        <span><HoverText texto="GITHUB" /></span>
        <span><HoverText texto="VIDEO" /></span>
       </div>
      </div>
      </div>
    </div>
  );
};

export default S3Content;
