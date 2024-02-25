// GeneratedTextContext.js
import React, { createContext, useContext, useState } from 'react';

const Generated = createContext();

export const useGenerate = () => useContext(Generated);

export const GeneratedProvider = ({ children }) => {
  const [generated, setGenerated] = useState(true)
  return (
    <Generated.Provider value={{ generated, setGenerated }}>
      {children}
    </Generated.Provider>
  );
};
