import React, { useEffect } from "react";

const ContactMap = () => {
  useEffect(() => {
    // Define the event handler function
    function handleScroll(event) {
      // Your event handling code here
    }

    // Add the scroll event listener with passive option set to true
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div className="pb-24 flex items-center justify-center ">
      <div className="max-w-7xl mx-auto md:w-[900px] h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928.2120079004783!2d107.44068584870372!3d-6.526683313798133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e690f3ade5ccf87%3A0xe0b0686bfb3bd72d!2sAgus%20Palet!5e0!3m2!1sen!2sid!4v1693669098971!5m2!1sen!2sid"
          style={{ border: "0", width: "100%", height: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
