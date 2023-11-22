"use client"
import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Solo ejecutar en el lado del cliente
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 10);
        lastScrollY.current = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-name telegraf">JANT G.</div>
      <div className="navbar-mid">
        <a className="navbar-mid-btn light-text">PROYECTOS</a>
        <a className="navbar-mid-btn light-text">SOBRE MÍ</a>
      </div>
      <button className="navbar-mid-btn navbar-end light-text">DISPONIBLE PARA FREELANCE</button>
    </section>
  );
};

export default Navbar;
