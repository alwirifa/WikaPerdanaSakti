import React from "react";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const images = [
  {
    img: "https://i0.wp.com/stiebp.ac.id/wp-content/uploads/2019/11/1572585235_Penasaran-Sama-Bisnis-Kayu-Kelapa-Yuk-Simak-Penjelasanya.jpg?fit=1250%2C720&ssl=1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate fringilla pharetra. In ultrices viverra erat vitae rutrum. Donec at velit nisi. Nunc ornare, elit non sodales posuere, tellus mauris malesuada turpis, in maximus enim justo eget libero. Phasellus rutrum, arcu in pellentesque congue, urna eros consequat lorem, non fermentum neque arcu at ipsum. Nunc tempor nisl sed tempus eleifend. Etiam bibendum risus id vehicula convallis.",
  },
  {
    img: "https://images.tokopedia.net/img/cache/700/attachment/2019/6/13/156042843426253/156042843426253_aaabfee7-1913-425a-8a45-f96c10625476.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate fringilla pharetra. In ultrices viverra erat vitae rutrum. Donec at velit nisi. Nunc ornare, elit non sodales posuere, tellus mauris malesuada turpis, in maximus enim justo eget libero. Phasellus rutrum, arcu in pellentesque congue, urna eros consequat lorem, non fermentum neque arcu at ipsum. Nunc tempor nisl sed tempus eleifend. Etiam bibendum risus id vehicula convallis. .",
  },
  {
    img: "https://bhinnekacomonlineshop.files.wordpress.com/2020/01/plastic-pallet.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate fringilla pharetra. In ultrices viverra erat vitae rutrum. Donec at velit nisi. Nunc ornare, elit non sodales posuere, tellus mauris malesuada turpis, in maximus enim justo eget libero. Phasellus rutrum, arcu in pellentesque congue, urna eros consequat lorem, non fermentum neque arcu at ipsum. Nunc tempor nisl sed tempus eleifend. Etiam bibendum risus id vehicula convallis. .",
  },
];
const Article = () => {
  return (
    <div className="w-full py-12 md:py-24"> {/* Adjust the vertical padding */}
      <div className="max-w-7xl mx-auto w-full relative ">
        <h1 className="text-primary text-lg md:text-xl lg:text-2xl font-semibold">ARTIKEL</h1>
        <div className="absolute right-0 flex justify-center items-center gap-1 cursor-pointer">
          <a className="text-primary text-xs md:text-sm lg:text-base font-semibold">
            LIHAT SEMUA ARTIKEL
          </a>
          <MdChevronRight className="text-lg md:text-xl lg:text-2xl text-primary" />
        </div>
        <div className="flex justify-center  items-center flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 mt-8 md:mt-12"> {/* Adjust the spacing */}
          {images.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col max-w-xs items-center gap-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <img src={item.img} alt="" className="h-48 w-full object-cover rounded-t-md" />
              <p className="text-xs px-6 pb-6">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;


