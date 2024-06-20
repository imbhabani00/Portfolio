import React from "react";
import shakti from "../images/teamImages/shakti.jpeg";
import tanmayMohapatra from "../images/teamImages/tanmay.jpeg";
import tanmaySyamal from "../images/teamImages/tanmayShyamal.jpeg";
import bhabani from "../images/profile/bs.jpeg";
import jyoti from "../images/teamImages/jyoti.jpeg";
import sefali from "../images/teamImages/sefali.jpeg";
import jagmohan from "../images/teamImages/jagmohan.jpeg";
import rashmi from "../images/teamImages/rashmi.jpeg";

const MyTeam = ({ darkMode }) => {
  const teamMembers = [
    {
      name: "Shakti Sankar Behera",
      role: "Back-End Developer",
      photo: shakti,
      linkedin: "https://www.linkedin.com/in/shakti-sankar-behera-43b513276/"
    },
    {
      name: "Rashmi Ranjan Panda",
      role: "ReactJs Devloper",
      photo: rashmi,
      linkedin: "https://www.linkedin.com/in/r-rashmi-panda-5b3776209/"
    },
    {
      name: "Tanmay Kumar Mohapatra",
      role: "Java Developer",
      photo: tanmayMohapatra,
      linkedin: "https://www.linkedin.com/in/tanmay-kumar-mohapatra-020973227/"
    },
    {
      name: "Tanmay Shymal",
      role: "UI/UX Designer",
      photo: tanmaySyamal,
      linkedin: "https://www.linkedin.com/in/tanmay-shyamal-b6b831276/"
    },
    {
      name: "BhabaniShankar",
      role: "Front-End Developer",
      photo: bhabani,
      linkedin: "https://www.linkedin.com/in/bhabanishankar-mishra-96991b23b/"
    },
    {
      name: "Jyoti Ranjan Panda",
      role: "Business Analyst",
      photo: jyoti,
      linkedin: "https://www.linkedin.com/in/jyotiranjan-panda-41739a227/"
    },
    {
      name: "Sefali Priyadarshani",
      role: "Relationship Manager",
      photo: sefali,
      linkedin: "https://www.linkedin.com/in/sefali-priyadarsini-a98a711a0/"
    },
    {
      name: "Jagmohan Gope",
      role: "Db Engineer",
      photo: jagmohan,
      linkedin: "https://www.linkedin.com/in/jagmohangope/"
    },
  
  ];
  return (
    <>
      <div
        className={`${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        } py-16 sm:py-8 lg:py-12`}
      >
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-20">
            <h2 className=" text-center text-2xl font-bold text-indigo-600 md:mb-16 lg:text-3xl">
              Meet My Team !
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Meet the talented individuals who make up our exceptional team.
              Each member brings unique skills, experiences, and perspectives to
              the table, contributing to our collective success. Together, we're
              dedicated to delivering excellence and exceeding expectations. Get
              to know us and discover the passion and commitment behind our
              work.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
                  <img
                    src={member.photo}
                    loading="lazy"
                    alt={`Photo by ${member.name}`}
                    className="h-full w-full object-cover object-center "
                  />
                </div>

                <div>
                  <div className="text-center font-bold text-indigo-500 md:text-lg">
                    {member.name}
                  </div>
                  <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                    {member.role}
                  </p>

                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 transition duration-100 hover:text-gray-500 active:text-gray-600"
                      >
                        <svg
                          className="h-5 w-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTeam;
