import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/IndexPage/Footer";

const Layout = () => {
  

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
