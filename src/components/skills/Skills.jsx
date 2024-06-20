import React from "react";

const Skills = ({ darkMode }) => {
  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Mongo",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "Express js",
      icon: "https://img.icons8.com/nolan/96/express-js.png",
    },
    {
      name: "python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "Power-Bi",
      icon: "https://img.icons8.com/color/100/power-bi.png",
    },
    {
      name: "NumPy",
      icon: "https://img.icons8.com/color/48/numpy.png",
    },
    {
      name: "Excel",
      icon: "data:image/jpeg;base64,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",
    },
    {
      name: "Pandas",
      icon: "https://img.icons8.com/color/48/pandas.png",
}
];

return (
  <div className={` py-20 text-center ${darkMode ? 'bg-black shadow-md' : ''}`}>
 <h2 className="text-3xl lg:text-4xl font-bold text-indigo-600 lg:mt-4 mb-16 text-center">Skills !</h2>
    <div className="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-16 xl:gap-6 py-16">
      {skills.map((skill, index) => (
        <div key={index} className="icon-container cursor-pointer transform transition duration-300 ease-in-out hover:scale-105">
          <img
            src={skill.icon}
            alt={skill.name}
            className={`w-24 h-24 md:w-52 md:h-32 ${darkMode ? 'bg-black border-white' : 'bg-white border-black'} shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-110`}
          />
          <p className={`${darkMode ? 'text-white' : 'text-black'} mt-2 text-sm font-medium`}>{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);


};

export default Skills;
