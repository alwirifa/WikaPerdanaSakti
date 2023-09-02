import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('eng'); // Default bahasa Inggris

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'eng' ? 'ind' : 'eng');
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
