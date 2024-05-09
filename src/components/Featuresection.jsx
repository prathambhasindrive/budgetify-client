import React from "react";
import featuresData from "../data/features.json";
const Featuresection = () => {
  return (
    <>
      <div className="feature-section flex flex-col bg-[#e8cfe0] justify-center items-center box-border pt-2 ">
        <h2 className="text-4xl font-mono font-bold text-green-900">Features</h2>
        <div className="feature-cards flex flex-wrap w-[95%] md:w-[90%] lg:w-[85%] justify-center items-center">
          {featuresData.features.map((feature) => (
            <div key={feature.name} className="feature bg-[#d4bacc] relative flex flex-col h-[350px] w-[350px] m-8 justify-center items-center border-white border-2 border-solid rounded-xl px-4 hover:border-transition transition-colors duration-2000 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-[#cbafc3] cursor-pointer">
              <img src={feature.icon} alt={feature.name} className="h-[75px] w-[75px]  p-2 rounded-xl absolute top-6"/>
              <h3 className="text-2xl font-bold text-green-900 text-center absolute top-28">{feature.name}</h3>
              <p className="text-base text-center text-cyan-900 absolute bottom-14 px-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Featuresection;
