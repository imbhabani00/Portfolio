import React from 'react';

const academicData = [
  {
    course: "Bachelor in Computer Application (BCA)",
    college: "Academy Of Business And Adminstration",
    description: "My journey in the field of computer science began at the Academy of Business Administration, where I pursued my Bachelor of Computer Application (BCA) degree. This pivotal period instilled in me a deep appreciation for the power of technology and its transformative potential. Throughout my BCA program, I immersed myself in a diverse range of subjects, from programming languages to database management, gaining practical skills and theoretical knowledge that laid the foundation for my career in the digital realm. I am grateful for the supportive faculty, enriching academic environment, and countless opportunities for growth that shaped my academic experience at the Academy of Business Administration.",
    duration: "2017-2020",
    location: "Balasore"
  },
  {
    course: "Master in Computer Application (MCA)",
    college: "Trident Academy Of Technology",
    description: "My pursuit of excellence in the realm of computer science reached new heights at Trident Academy of Technology, where I undertook my Master of Computer Applications (MCA) degree. This transformative journey expanded my horizons, deepening my understanding of complex algorithms, software development methodologies, and cutting-edge technologies. Throughout my MCA program, I engaged in rigorous coursework, hands-on projects, and collaborative research, honing my analytical skills and problem-solving abilities. The supportive faculty, state-of-the-art facilities, and vibrant academic community at Trident empowered me to push boundaries and explore innovative solutions to real-world challenges. I am immensely grateful for the invaluable experiences and lifelong connections forged during my time at Trident Academy of Technology, which have prepared me to thrive in the dynamic landscape of the digital age.",
    duration: "2021-2023",
    location: "Bhubaneswar",

  },
  {
    course: "Internship",
    college: "Java C Enterprises",
    description: "Internship Experience : During my academic journey, I had the privilege of completing an internship at Java C Enterprises, where I immersed myself in front-end development technologies. Working with HTML, CSS, and JavaScript, I collaborated with a dynamic team to create responsive and visually appealing user interfaces for web applications. This experience not only honed my technical skills but also taught me the importance of effective communication, teamwork, and adaptability in a professional setting.",
    duration: "2023",
    location: "Bhubaneswar"
  },
  {
    course: "Full Stack Web Development",
    college: "Coding Ninja",
    description: "I completed an intensive 12-month Full Stack Web Development course at Coding Ninjas, where I acquired comprehensive proficiency in a wide array of technologies. This immersive program equipped me with the skills and knowledge needed to excel in every layer of web development, from front-end design to back-end implementation. As part of the curriculum, I obtained certifications in HTML, CSS, JavaScript, Node.js, React, MongoDB, SQL, Java, and Object-Oriented Programming (OOPs), demonstrating my mastery of these essential tools and frameworks. Through hands-on projects, real-world applications, and expert guidance from industry professionals, I developed a deep understanding of software engineering principles, best practices, and emerging trends in the ever-evolving field of web development. This certification not only validated my technical expertise but also instilled in me a sense of confidence and readiness to tackle complex challenges in the digital landscape.",
    duration: "2023-2024",
    location: "Remote",

  },
];

const Academics = ({ darkMode }) => {
  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} py-16`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-indigo-600 lg:mt-4 mb-16 text-center">Academics !</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {academicData.map((data, index) => (
            <div key={index} className={`p-6 ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl flex flex-col justify-between`}>
              <div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{data.college}</h3>
                <h4 className={`text-base font-semibold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Course: {data.course}</h4>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-black'}`}> {data.description}</p>
                <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Duration: {data.duration}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-black'}`}>Location: {data.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;
