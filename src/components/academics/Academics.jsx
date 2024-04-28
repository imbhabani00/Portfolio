import React from 'react';

const Academics = ({ darkMode }) => {
  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} py-12 flex items-center justify-center`}>
      <div className="container mx-auto px-2 md:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-indigo-600 lg:mt-4 mb-8 text-center">Academics</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-indigo-500 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Full Stack Web Development</h3>
            <p className="text-sm">Coding Ninja</p>
            <p className="text-sm">2023-2024</p>
          </div>

          <div className="p-6 bg-indigo-500 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Master in Computer Application</h3>
            <p className="text-sm">Trident Academy Of Technology</p>
            <p className="text-sm">2021-2023</p>
          </div>

          <div className="p-6 bg-indigo-500 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Bachelor in Computer Application</h3>
            <p className="text-sm">Trident Academy Of Technology</p>
            <p className="text-sm">2017-2020</p>
          </div>

          <div className="p-6 bg-indigo-500 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Internship</h3>
            <p className="text-sm">Java C Enterprises</p>
            <p className="text-sm">2023-2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
