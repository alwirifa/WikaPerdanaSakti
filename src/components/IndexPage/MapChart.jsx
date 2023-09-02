import React from "react";
import worldMap from "../../assets/GIF-Peta-1.gif";

const MapChart = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12">
      <h1 className="md:text-4xl text-3xl font-semibold my-2">Export Destinations</h1>
      <img
        src={worldMap}
        alt="mapChart"
        className="md:h-[540px] w-[640] h-[210px] "
      />
      <div className="flex justify-center">
        <div className="border-r md:px-12 px-4 py-6 text-center">
          <p className="text-primary font-bold text-3xl">02</p>
          <h1>Product Category</h1>
        </div>
        <div className="border-r md:px-12 px-4 py-6 text-center">
          <p className="text-primary font-bold text-3xl">+28</p>
          <h1>Type of Product</h1>
        </div>
        <div className="md:px-12 px-4  py-6 text-center">
          <p className="text-primary font-bold text-3xl">07</p>
          <h1>Export Countries</h1>
        </div>
      </div>
    </div>
  );
};

export default MapChart;
