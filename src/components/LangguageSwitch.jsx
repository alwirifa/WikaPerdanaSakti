import React from "react";
import { useLanguage } from "../LanguageProvider.jsx";
import { id, us } from "../assets/index.js";

function LanguageSwitch() {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <div  className="flex ">
      <div className="hidden md:block border-l border-gray-500 pl-8 py-2" />
        
      <div className="flex space-x-6 md:text-xs text-lg font-semibold cursor-pointer">
        <div
          className={`flex items-center  justify-center  gap-1 cursor-pointer ${currentLanguage === 'ind' ? 'bg-green-200' : ''}`}
          onClick={() => toggleLanguage()}>
          <img src={id} alt="id" className="md:h-4 md:w-4 h-6 w-6 rounded-full" />
          <div className="flex flex-col items-center justify-center ">
            <p className="">ID</p>
          </div>
        </div>
        <div className="md:hidden block border-r py-2 border-gray-500">
        </div>
        <div
          className={`flex items-center  justify-center  gap-1 cursor-pointer ${currentLanguage === 'eng' ? 'bg-green-200' : ''}`}
          onClick={() => toggleLanguage()}>
          <img src={us} alt="us" className="md:h-4 md:w-4 h-6 w-6 rounded-full" />
          <div className="flex flex-col items-center justify-center">
            <p>EN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitch;
