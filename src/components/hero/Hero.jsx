import React, { useState } from "react";
import bs from "../images/profile/bs.jpeg";
import frontEnd from "../../../public/ressume/FrontEnd.pdf";
import backEnd from "../../../public/ressume/BackEnd.pdf";
import fullStack from "../../../public/ressume/FullStack.pdf";
import dataAnalytics from "../../../public/ressume/DataAnalytics.pdf";

const Hero = ({ darkMode }) => {
  const [showCVOptions, setShowCVOptions] = useState(false);

  const handleToggleCVOptions = () => {
    setShowCVOptions(!showCVOptions);
  };

  return (
    <div
      className={`bg-${darkMode ? "black" : "white"} text-${
        darkMode ? "white" : "black"
      } py-8 lg:py-24`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-4">
        {/* Left Side */}
        <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0 lg:ml-4">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-4">
            Welcome{" "}
            <span className="text-indigo-600 ml-2 animate-blink">! ! !</span>
          </h1>
          <p className="text-base lg:text-lg mb-6">
            Hello, I'm{" "}
            <span className="text-indigo-600 text-3xl font-bold animate-pulse">
              BhabaniShankar Mishra
            </span>
            , a passionate web developer. Let's build something amazing
            together!
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 relative"
            onMouseEnter={handleToggleCVOptions}
            onMouseLeave={handleToggleCVOptions}
          >
            <button
              className={`bg-indigo-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-2 sm:mb-0 sm:mr-2`}
            >
              Download CV
            </button>
            {showCVOptions && (
              <div className="absolute mt-10 bg-white p-4 lg:p-8 rounded-lg shadow-lg">
                <a
                  href={frontEnd}
                  download="FrontEnd.pdf"
                  className="block py-2 px-4 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-800 rounded-md mb-2"
                >
                  FrontEnd
                </a>
                <a
                  href={backEnd}
                  download="BackEnd.pdf"
                  className="block py-2 px-4 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-800 rounded-md mb-2"
                >
                  BackEnd
                </a>
                <a
                  href={fullStack}
                  download="FullStack.pdf"
                  className="block py-2 px-4 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-800 rounded-md mb-2"
                >
                  FullStack
                </a>
                <a
                  href={dataAnalytics}
                  download="DataAnalytics.pdf"
                  className="block py-2 px-4 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-800 rounded-md"
                >
                  Data Analytics
                </a>
              </div>
            )}
          </div>
        </div>
        {/* Right Side */}
        <div className="lg:w-1/2 lg:flex justify-center items-center">
          {/* Center the image */}
          <div className="h-40 w-40 lg:h-60 lg:w-60 xl:h-80 xl:w-80 rounded-full overflow-hidden mx-auto lg:mx-0 mb-8 lg:mb-0">
            {/* Adjust size, make the image rounded, and add margin */}
            <img
              src={bs}
              alt="Profile"
              className="object-cover object-center h-full w-full animate-pulse" // Make the image fill its container
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
