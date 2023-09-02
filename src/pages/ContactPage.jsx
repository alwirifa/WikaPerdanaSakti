import React from "react";
import Footer from "../components/IndexPage/Footer";
import ContactMap from "../components/ContactPage/ContactMap";
import Forn from "../components/ContactPage/Forn";

const ContactPage = () => {
  return (
    <div className="h-screen w-full">
      <Forn />
      <ContactMap/>
      <Footer/>
    </div>
  );
};

export default ContactPage;
