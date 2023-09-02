import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { EngMenu } from "../data/EngData";
import { IndoMenu } from "../data/IndoData";
import Collapse from "react-collapse";
import LanguageSwitch from "./LangguageSwitch";
import { useLanguage } from "../LanguageProvider";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentLanguage } = useLanguage();

  const menu = currentLanguage === "eng" ? EngMenu : IndoMenu;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuToggle = () => {
    setShowMenu(!showMenu);
  };

  const closeMobileMenu = () => {
    setShowMenu(false);
  };

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed w-full top-0  z-50 ${
          isScrolled ? "bg-white/80 shadow-md" : ""
        } transition-all duration-500`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <motion.div
          className="max-w-7xl mx-auto w-full flex justify-between items-center px-6 py-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          {/* logo */}
          <h1 className="text-2xl font-semibold">Wika Perdana Sakti</h1>
          {/* Main Menu */}
          <div className="hidden md:flex flex-row items-center gap-8">
            {menu.map((item, index) => (
              <div
                className="group relative text-xs font-semibold cursor-pointer hover:text-primary hover:underline"
                key={index}>
                <Link to={item.link}>{item.label}</Link>
                {item.submenu && (
                  <div className="absolute top-full hidden group-hover:block hover:block ">
                    <div className="py-3">
                      <div className="w-4 h-4 left-5 absolute mt-1 bg-white border-l-2 border-t-2 rotate-45"></div>
                    </div>
                    <div className="bg-white border-2 p-3.5 rounded-md shadow-md ">
                      {item.submenu.map((submenuItem, subIndex) => (
                        <div
                          key={subIndex} // Tambahkan unique key di sini
                          className="flex items-center w-40 mt-2 space-x-2 cursor-pointer text-gray-500 hover:text-[#C51A1A] font-semibold text-xs ">
                          <img src={submenuItem.img} alt="img" className="h-8" />
                          <p>{submenuItem.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* Language switcher */}
            <LanguageSwitch />

            {/* lagguage switcher */}
          </div>
          <button className="block md:hidden text-xl" onClick={menuToggle}>
            <FiMenu />
          </button>
        </motion.div>

        {/* Mobile */}
        <div className="md:hidden block z-40">
          <AnimatePresence>
            {showMenu && (
              <motion.div
                className="fixed inset-0 flex flex-col bg-white"
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5 }}>
                <div className="flex justify-between border-b px-6 py-4">
                  <h1 className="text-xl font-semibold">Wika Perdana Sakti</h1>
                  <button className="text-xl" onClick={closeMobileMenu}>
                    <FiX />
                  </button>
                </div>
                <div className="flex flex-col mt-6 px-6">
                  {menu.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center w-full  ">
                        <a
                          className="text-sm font-bold h-full w-3/5 my-2 py-3 hover:text-primary cursor-pointer"
                          href={item.link}>
                          {item.label}
                        </a>
                        {item.submenu && (
                          <button
                            className="text-2xl p-4 absolute right-2"
                            onClick={() => toggleSubmenu(index)}>
                            {submenuOpen === index ? (
                              <MdExpandLess />
                            ) : (
                              <MdExpandMore />
                            )}
                          </button>
                        )}
                      </div>
                      {item.submenu && (
                        <Collapse isOpened={submenuOpen === index}>
                          <div className="bg-gray-100 flex flex-col ">
                            {item.submenu.map((submenuItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={submenuItem.link}
                                className="text-gray-600 py-2 px-4">
                                {submenuItem.label}
                              </a>
                            ))}
                          </div>
                        </Collapse>
                      )}
                    </div>
                  ))}
                  {/* Language switcher */}
                  <div className="absolute bottom-0 left-0 w-full px-6 py-8 flex gap-4 text-base font-semibold bg-gray-200  ">
                    <LanguageSwitch />
                  </div>
                  {/* language switcher */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Mobile End */}
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
