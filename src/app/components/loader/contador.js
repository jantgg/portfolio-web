"use client"
import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const [iniciarContador, setIniciarContador] = useState(false);

  useEffect(() => {
    let intervalo;

    if (iniciarContador) {
      intervalo = setInterval(() => {
        setContador(prevContador => {
          if (prevContador < 100) {
            return prevContador + 2;
          } else {
            clearInterval(intervalo);
            return 100;
          }
        });
      }, 20); // 20ms * 50 = 1000ms (1 segundo)
    }

    return () => clearInterval(intervalo);
  }, [iniciarContador]);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setIniciarContador(true)}>Iniciar Contador</button>
    </div>
  );
}

export default Contador;
