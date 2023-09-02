import React from "react";
import { MdLocationOn, MdPhone, MdEmail, MdArrowUpward } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const EngFooter = [
  {
    Head: "Company",
    submenu: [
      {
        label: "About us",
        link: "/about",
      },
      {
        label: "Services & Facilities",
        link: "/services",
      },
      {
        label: "Contact Us",
        link: "/contact",
      },
    ],
  },
  {
    Head: "Pallets",
    submenu: [
      {
        label: "Two Way Entry",
        link: "/",
      },
      {
        label: "Four Way Entry",
        link: "/",
      },
    ],
  },
  {
    Head: "Support",
    submenu: [
      {
        label: "News & Article",
        link: "/",
      },
      {
        label: "FAQ",
        link: "/",
      },
      {
        label: "Privacy Policy",
        link: "/",
      },
    ],
  },
];

const profile = [
  {
    label:
      "Jl. Warga Baru No.01, Ciwareng, Kec. Babakancikao, Kabupaten Purwakarta, Jawa Barat 41151, Indonesia",
    icon: <MdLocationOn />,
  },
  {
    label: "+62 812-8252-6995",
    icon: <MdPhone />,
  },
  {
    label: "email@gmail.com",
    icon: <MdEmail />,
  },
];

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-footer w-full flex flex-col items-center justify-center relative py-16 pb-24">
      <div className="max-w-7xl mx-auto w-full px-6 ">
        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col ">
            <h1 className="text-white text-2xl font-semibold mb-">
              Wika Perdana Sakti
            </h1>
            <div className="max-w-xs text-[#CCCCCC] space-y-2 mt-2">
              {profile.map((item, index) => (
                <div key={index} className="flex text-sm relative">
                  <p className="absolute top-1 text-lg ">{item.icon}</p>
                  <p className="pl-6">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-36 ml-0 ">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-32">
              {EngFooter.map((item, index) => (
                <div key={index} className="text-lg text-white">
                  {item.Head}
                  {item.submenu && (
                    <div className="text-xs space-y-1 mt-2 text-[#cccccc]">
                      {item.submenu.map((subItem, index) => (
                        <div
                          key={index}
                          className="hover:text-primary cursor-pointer">
                          {subItem.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className=" absolute bottom-8 text-xs text-[#CCCCCC]">
        © Copyright 2023 PT Wika Perdana Sakti. All Rights Reserved
      </p>
      <button
        onClick={handleScrollToTop}
        className="absolute bottom-16 right-10 bg-white p-3 rounded-full shadow-md text-primary hover:bg-primary hover:text-white focus:outline-none transition duration-300">
        <MdArrowUpward size={24} />
      </button>
    </div>
  );
};

export default Footer;
