import React from "react";
import { Parallax } from "react-parallax";

const ParallaxComponent = () => {
  return (
    <div>
      <Parallax
        bgImage="assets/images/parallax4.jpg"
        strength={2000} 
        className="custom-class bg-fixed bg-cover bg-center h-64" 
      >
        <div className="h-64 flex justify-center items-center text-center "> 
          <h2 className="text-gray-700 bg-[#e8cfe0] px-8 py-4 font-sans text-2xl font-bold md:text-3xl lg:text-4xl italic tracking-wide skew-x-12">"Don't save what is left after spending; spend what is left after saving." </h2>
        </div>
      </Parallax>
      
    </div>
  );
};

export default ParallaxComponent;
