import React , { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const value = {
    isOpen,
    setIsOpen, 
    toggleMenu,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
