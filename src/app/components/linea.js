"use client"
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Linea = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".mi-linea", 
            { transform: 'translateX(-100%)' },
            {
                transform: 'translateX(0)',
                duration: 2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: ".mi-linea",
                    start: "top bottom",
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    return (
        <div style={{ height: "2px", overflow: "hidden" }}>
            <div className="mi-linea" style={{height: "2px", background: "white", width: "100%", transform: 'translateX(-100%)'}}></div>
        </div>
    );
}
export default Linea;

