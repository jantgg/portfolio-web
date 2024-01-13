import React, { createContext, useState } from 'react';

// Creación del contexto
export const Section1Context = createContext();

export const Section1Provider = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const changeLoaded = (value) => setLoaded(value);

 // const { loaded, changeLoaded } = useContext(Section1Context);
  return (
    <Section1Context.Provider value={{ loaded, changeLoaded }}>
      {children}
    </Section1Context.Provider>
  );
};
