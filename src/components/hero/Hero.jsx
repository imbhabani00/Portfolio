import React, { useState } from "react";
import bs from "../../../public/img/bs.png";
const Hero = ({ darkMode }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleHireMeClick = () => {
    setShowModal(true);
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
            Welcome <span className="text-indigo-600 ml-2">! ! !</span>
          </h1>
          <p className="text-base lg:text-lg mb-6">
            Hello, I'm{" "}
            <span className="text-indigo-600 font-bold">
              BhabaniShankar Mishra
            </span>
            , a passionate web developer. Let's build something amazing
            together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/bs_mishra.pdf" download="i_m_bhabani.pdf">
              <button
                className={`bg-indigo-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-2 sm:mb-0 sm:mr-2`}
              >
                Download CV
              </button>
            </a>
            <button
              className={`bg-gray-900 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2`}
              onClick={handleHireMeClick}
            >
              Hire Me
            </button>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-4 lg:p-8 rounded-lg">
            <h2 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4 text-gray-900">
              Click On Contact
            </h2>
            <h2 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4 text-indigo-600">
              FIll the box....
            </h2>
            <p className="text-sm lg:text-base text-gray-700 mb-2 lg:mb-4">
              I'd love to hear from you!
            </p>
            <button
              className="bg-indigo-600 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
