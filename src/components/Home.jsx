import React from "react";
import aboutus from "../assets/aboutus.png";
import banner from "../assets/home-right.png";
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row justify-between text-white items-center p-6 sm:p-10 md:p-20">
        {/* Left Section (Text) */}
        <div className="w-full md:w-2/4 text-center md:text-left md:pt-10">
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tighter mb-5">
            Hey, I'm <span className="text-blue-950">SANJAY RATNANI</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-2xl tracking-tighter mt-3 sm:mt-5">
            Web Developer
          </p>
          <button
            className="mt-5 text-black py-2 px-4 text-sm sm:text-base 
                 font-semibold rounded-3xl flex items-center justify-center sm:justify-start gap-3
                 bg-white shadow-lg transition-all duration-300 hover:border-none
                 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white"
          >
            Contact Me
            <span className="p-2 sm:p-3 bg-black text-white rounded-full flex items-center justify-center transition-all duration-300">
              <FaArrowRight className="text-xs sm:text-sm" />
            </span>
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full md:w-2/4 flex justify-center">
          <img
            src={banner}
            alt="profile-pic"
            className="w-3/4 sm:w-1/2 md:w-[75%]"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
