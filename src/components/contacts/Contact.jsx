import React from "react";

const Contact = ({ darkMode }) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:i.m.bhabani.00@gmail.com";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/7655975064";
  };

  return (



    <>
<div className="mt-1">

<h2 className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-10  text-center">Contact !</h2>
      <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen flex items-center justify-center -mt-20`}
    >
    
      <div className="-mt-40 bg-white shadow-md rounded-lg p-16 m-4 max-w-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 relative">

        <div className="mb-6">
          <p className="text-indigo-600 mb-2">BhabaniShankar Mishra</p>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <button
            onClick={handleEmailClick}
            className="text-indigo-600 hover:underline block mb-2"
          >
            i.m.bhabani.00@gmail.com
          </button>
        </div>
        <div className="mb-6">
          <label htmlFor="whatsapp" className="block text-gray-700 font-bold mb-2">
            WhatsApp Number
          </label>
          <button
            onClick={handleWhatsAppClick}
            className="text-indigo-600 hover:underline block mb-2"
          >
            7655975064
          </button>
        </div>
        <span className="text-gray-500 block mt-4 text-center">Thanks for contacting!</span>
      </div>
    </div>
</div>

     
    </>

  );
};

export default Contact;
