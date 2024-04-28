import React from "react";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      name: "Brain-Wave",
      image: "/img/first.jpeg",
      link: "https://brainwavebs.netlify.app/",
    },
    {
      id: 2,
      name: "Netflix",
      image: "/img/second.jpeg",
      link: "https://netflixbs.netlify.app/",
    },
    {
      id: 3,
      name: "Food-Landing",
      image: "/img/third.jpeg",
      link: "https://foodpagebs.netlify.app/",
    },
    {
      id: 4,
      name: "College-Dunia",
      image: "/img/fourth.jpeg",
      link: "https://collegeduniabs.netlify.app/",
    },
  ];

  return (
    <div
      className={`bg-${darkMode ? "black" : "white"} text-${
        darkMode ? "white" : "black"
      } py-12 md:py-20`}
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-8 text-indigo-600 text-center text-2xl font-bold lg:text-3xl">
            Projects
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Explore the culmination of my passion and dedication through a
            diverse array of projects that showcase my expertise. From web
            development to graphic design, each project reflects a journey of
            creativity and innovation. Dive into the intricate details, unravel
            the challenges overcome, and witness the transformative power of
            collaboration. Embark on a visual voyage that transcends boundaries
            and inspires new possibilities. Welcome to my portfolio, where every
            project tells a unique story of ingenuity and craftsmanship.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-80 md:h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
              style={{ minWidth: "0" }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition duration-300 transform group-hover:scale-105"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
              />
              <h3 className="z-10 absolute inset-x-0 bottom-0 text-center text-white text-lg md:text-3xl font-semibold bg-indigo-600 px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
                {project.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
