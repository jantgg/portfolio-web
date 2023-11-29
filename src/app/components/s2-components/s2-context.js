import React, { createContext, useState } from 'react';

// Creación del contexto
export const Section2Context = createContext();

export const Section2Provider = ({ children }) => {
  // Estados
  const [textoMovil, setTextoMovil] = useState(true);
  const [textoL, setTextoL] = useState(true);
  const [photo, setPhoto] = useState(true);
  const [boton, setBoton] = useState(true);

  // Funciones para cambiar los estados
  const changeTextoMovil = (value) => setTextoMovil(value);
  const changeTextoL = (value) => setTextoL(value);
  const changePhoto = (value) => setPhoto(value);
  const changeBoton = (value) => setBoton(value);
 // const { TextoMovil, changeTextoMovil } = useContext(Section2Context);
  return (
    <Section2Context.Provider value={{ textoMovil, changeTextoMovil, textoL, changeTextoL, photo, changePhoto, boton, changeBoton }}>
      {children}
    </Section2Context.Provider>
  );
};
