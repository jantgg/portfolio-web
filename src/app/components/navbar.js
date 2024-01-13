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
        const isAtBottom = window.innerHeight + currentScrollY >= document.body.offsetHeight;

        if (isAtBottom) {
          setIsVisible(true); // Hacer visible el Navbar cuando se está en el fondo de la página
        } else {
          setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 10);
        }

        lastScrollY.current = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToVH = (vh) => {
    const height = window.innerHeight * vh / 100;
    window.scrollTo({ top: height, behavior: 'smooth' });
  };

  return (
    <section className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
    <div className="navbar-name telegraf" onClick={scrollToTop}><span>JANTGG.</span></div>
    <div className="navbar-mid">
      <a className="navbar-mid-btn navbar-btn light-text" onClick={() => scrollToVH(200)}>PROYECTOS</a>
      <a className="navbar-mid-btn navbar-btn light-text" onClick={() => scrollToVH(100)}>SOBRE MÍ</a>
    </div>
    <div className='navbar-end'>
      <button className="navbar-end-btn navbar-btn light-text" onClick={() => scrollToVH(320)}>DISPONIBLE PARA FREELANCE</button>
    </div>
  </section>
  );
};

export default Navbar;
