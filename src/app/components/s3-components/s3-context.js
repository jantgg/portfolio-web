import React, { createContext, useState } from 'react';

// Creación del contexto
export const Section3Context = createContext();

export const Section3Provider = ({ children }) => {
  // Estados
  const [textoMovil3, setTextoMovil3] = useState(true);
  const [textoL3, setTextoL3] = useState(true);
  const [photo3, setPhoto3] = useState(true);
  const [boton3, setBoton3] = useState(true);

  // Funciones para cambiar los estados
  const changeTextoMovil3 = (value) => setTextoMovil3(value);
  const changeTextoL3 = (value) => setTextoL3(value);
  const changePhoto3 = (value) => setPhoto3(value);
  const changeBoton3 = (value) => setBoton3(value);
 // const { TextoMovil, changeTextoMovil } = useContext(Section3Context);
  return (
    <Section3Context.Provider value={{ textoMovil3, changeTextoMovil3, textoL3, changeTextoL3, photo3, changePhoto3, boton3, changeBoton3 }}>
      {children}
    </Section3Context.Provider>
  );
};
