import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000); // Ganti gambar setiap 8 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full flex relative overflow-hidden">
      <div className="h-full flex">
        {images.map((hero, index) => (
          <div
            key={index}
            className={`h-screen w-screen ${
              index === currentSlide ? "opacity-100" : "opacity-0 absolute"
            } transition-opacity duration-1000`}>
            <div className="h-full w-full absolute inset-0 bg-gradient-to-r from-white/90  md:to-white/20 to-white/40 "></div>
            <img
              src={hero.img}
              alt="img"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 h-full w-full z-40 flex items-center">
              <div className="max-w-7xl mx-auto w-full px-6 flex flex-col space-y-4 justify-center items-start">
                <h1 className="max-w-xl text-5xl font-semibold">{hero.head}</h1>
                <p className="max-w-xl text-md font-semibold text-gray-800">
                  {hero.text}
                </p>
                <a href={hero.link} className="py-2 px-3 rounded-sm text-xs font-semibold text-white bg-primary cursor-pointer" >
                  {hero.btn} 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:block hidden">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 m-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full focus:outline-none z-40">
          <MdChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 m-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full focus:outline-none z-40">
          <MdChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="flex justify-center items-center space-x-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-primary px-2" : "bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
