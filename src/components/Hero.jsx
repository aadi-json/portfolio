import React from "react";
import HeroImage from "../assets/heroImg.jpg";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          {""} , {""} Aditya Gawande {""}
        </span>
        , {""} Front-End Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-red-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a href="#contact">Contact With Me</a>
        </button>
        <button
          className="bg-gradient-to-r from-green-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a href="https://drive.google.com/file/d/1jcD4_E6UieTIYj1UGC9JRPx-IpNxgfW4/view?usp=drive_link">
            {" "}
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
