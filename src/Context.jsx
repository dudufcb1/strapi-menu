import React from 'react';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //Contexto para la barra sidebar, lateral.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //Contexto para los submenus horizontales
  const [pageId, setPageId] = useState(null);

  //Funciones para controlar los sidebars
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
