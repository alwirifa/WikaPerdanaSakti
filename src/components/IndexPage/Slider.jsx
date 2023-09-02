import React from "react";

import slides1 from "../../assets/papajian.jpg";

const Slider = () => {
  return (
    <div className="bg-gray-100 py-12 w-full" id="about">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row justify-center lg:gap-6 items-center">
        <div className="lg:w-1/2">
          <div className="max-w-md mx-auto px-6 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Tentang Kami</h1>
            <p className="font-semibold">
              Wika Perdana Sakti merupakan produsen pallet professional yang
              berada di Purwakarta.
            </p>
            <p className="text-sm">
              Dedikasi kami dalam mengikuti dan mewujudkan setiap keinginan
              konsumen kami. Kehebatan kami terletak dalam kemampuan kami untuk
              sepenuhnya memahami kebutuhan unik setiap pelanggan. Dengan
              komitmen terhadap kualitas dan inovasi, kami selalu berusaha untuk
              memberikan solusi yang melampaui harapan.
            </p>
            <div className="text-xs py-2 w-24 rounded-md flex justify-center font-semibold text-white bg-primary cursor-pointer">
              Selengkapnya
            </div>
          </div>
        </div>
        <img
          src={slides1}
          alt="img"
          className="h-64 lg:h-auto lg:w-1/2 mt-6 lg:mt-0 max-w-lg object-contain rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default Slider;
