import React from "react";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } py-12 lg:py-2`}
    >
      <div className="container mx-auto px-4 lg:px-0">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-indigo-600 text-3xl lg:text-4xl font-bold mb-4 text-center">
            About Me
          </h2>
          <p className="leading-relaxed">
            Hi! I'm BhabaniShankar, a passionate frontend developer based in
            Odisha, India. I thrive on crafting engaging and user-centric web
            experiences using a blend of cutting-edge technologies like React.js,
            JavaScript, HTML, and CSS. With hands-on experience in frameworks
            like Tailwind CSS and Bootstrap, I specialize in creating sleek and
            responsive user interfaces that elevate the digital presence of
            businesses. Additionally, my expertise extends to backend development
            with Node.js and database management with MongoDB. I'm dedicated to
            continuous learning and staying updated with the latest trends in web
            development to deliver innovative solutions that exceed client
            expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

