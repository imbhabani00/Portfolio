import React from 'react';
import ResturantApp from "../images/projectImages/ResturantApp.jpeg";
import FitnessApp from "../images/projectImages/FitnessApp.jpeg";
import Portfolio from "../images/projectImages/Portfolio.jpeg";
import EducationalWebpage from "../images/projectImages/EducationalWebpage.jpeg";
const projects = [
  {
    name: "Resturant App",
    image: ResturantApp,
    sourceCode: "https://github.com/imbhabani00/MERN_RESTURANT_APPLICATION.git",
    hoisted: "https://mern-resturant-application.vercel.app/",
    languages: "JavaScript, React, Tailwind, Mongoose, Nodejs"
  },
  {
    name: "Fitness App",
    image: FitnessApp,
    sourceCode: "https://github.com/imbhabani00/MERN_STACK_GYM_APPLICATION.git",
    hoisted: "https://mern-stack-gym-webpage.vercel.app/",
    languages: "JavaScript, React, Tailwind, Mongoose, Nodejs"
  },
  {
    name: "Portfolio",
    image: Portfolio,
    sourceCode: "https://portfolio-xi-seven-83.vercel.app/",
    hoisted: "https://portfolio-ten-chi-62.vercel.app/",
    languages: "Javascript, Reactjs, Tailwind"
  },
  {
    name: "Educational Webpage",
    image: EducationalWebpage,
    sourceCode: "https://github.com/imbhabani00/Educational_Website.git",
    hoisted: "https://educational-website-gamma.vercel.app/",
    languages: "Javascript, Reactjs, Tailwind"
  }
];

const Projects = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
     <h2 className="text-3xl lg:text-4xl font-bold text-indigo-600  mb-16 text-center">Projects !</h2>
      <div className="flex flex-wrap justify-center gap-6 p-6">
      
        {projects.map((project, index) => (
          <div key={index} className={`rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl w-full md:w-1/3 lg:w-1/4 text-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold my-4">{project.name}</h3>
            <h3 className="text-md font-medium mb-4 text-indigo-600">Languages: {project.languages}</h3>
            <div className="flex justify-around p-4">
              <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-500 font-bold">Source Code</a>
              <a href={project.hoisted} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-indigo-500 font-bold">Hoisted</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
