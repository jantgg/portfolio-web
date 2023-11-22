"use client";
import React, { useState, useEffect, useRef } from "react";
import "./section1.css";

const Section1 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  return (
    <section className="section1">
      <div className="tittles ">
        {" "}
        <span className="t-1 light-text">DESARROLLADOR</span>
        <span className="t-2 blod-text">FULL-STACK</span>
        <span className="t-3 light-text">ENFOCADO EN</span>
        <span className="t-4 blod-text">FRONT</span>
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
