import React from "react";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } py-16 lg:py-2`}
    >
      <div className="container px-4 lg:px-0 mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-indigo-600 mt-4 mb-8 lg:mb-16 text-center">About Me !</h2>

          <p className="ml-4 lg:ml-0 lg:pl-4 lg:pr-8">
            Passionate and driven, I am a tech enthusiast with a dual academic background in both Bachelor's and Master's degrees in Computer
            Applications. My journey into the world of technology has been
            enriched by diverse experiences, including an internship that
            provided invaluable real-world insights. Furthermore, I have honed
            my skills through a comprehensive 12-month Full Stack Web
            Development course, where I delved deep into technologies like
            HTML, CSS, JavaScript, Node.js, React.js, MongoDB, SQL, Java, and
            Python.
          </p>
          <p className="ml-4 mt-4 lg:ml-0 lg:pl-4 lg:pr-8">
            My quest for knowledge extends beyond conventional boundaries, as I
            have also explored data analytics tools such as Power BI, Pandas,
            NumPy, and Excel. This multidisciplinary approach reflects my
            belief in the power of continuous learning and adaptability in
            today's fast-paced digital landscape.
          </p>
          <p className="ml-4 mt-4 lg:ml-0 lg:pl-4 lg:pr-8">
            With a solid foundation in both front-end and back-end development,
            coupled with a proficiency in data analysis and visualization, I am
            poised to tackle challenges and contribute meaningfully to
            innovative projects. I am eager to leverage my skills and passion
            for technology to drive positive change and make a lasting impact
            in the world of IT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
