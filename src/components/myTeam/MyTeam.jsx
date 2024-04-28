import React from "react";
const MyTeam = ({ darkMode }) => {
  const teamMembers = [
    {
      name: "Shakti Sankar Behera",
      role: "Back-End Developer",
      photo: "https://media.licdn.com/dms/image/D5603AQH8RL1FPyBaYA/profile-displayphoto-shrink_200_200/0/1708923478425?e=1719446400&v=beta&t=1A513YVm3-clacS4QsCpj2oKfJbVeNTjFl08d7FjRXc",
      linkedin: "https://www.linkedin.com/in/shakti-sankar-behera-43b513276/"
    },
    {
      name: "Rashmi Ranjan Panda",
      role: "ReactJs Devloper",
      photo: "https://media.licdn.com/dms/image/D4D03AQE7G4EL1oeM5w/profile-displayphoto-shrink_200_200/0/1691203014569?e=1719446400&v=beta&t=HhBJ72DiG-ZbeZH-X21BmAEkv1CUF4Y4n3CtOvQA868",
      linkedin: "https://www.linkedin.com/in/r-rashmi-panda-5b3776209/"
    },
    {
      name: "Tanmay Kumar Mohapatra",
      role: "Java Developer",
      photo: "https://media.licdn.com/dms/image/D5603AQGQhUUsFkYE_Q/profile-displayphoto-shrink_200_200/0/1708397854995?e=1719446400&v=beta&t=oNEtHZbpCwHsJIEidnqORbRpRDAl_5RcqgY5O6vxU5U",
      linkedin: "https://www.linkedin.com/in/tanmay-kumar-mohapatra-020973227/"
    },
    {
      name: "Tanmay Shymal",
      role: "UI/UX Designer",
      photo: "https://media.licdn.com/dms/image/D5635AQGQABehTWhUZw/profile-framedphoto-shrink_200_200/0/1710880812396?e=1714856400&v=beta&t=9TpHoH_YbXV8-PhIq_JScqRa6D8hGYGMTvKW2cAZeyo",
      linkedin: "https://www.linkedin.com/in/tanmay-shyamal-b6b831276/"
    },
    {
      name: "BhabaniShankar",
      role: "Front-End Developer",
      photo: "https://media.licdn.com/dms/image/D5603AQETcz1YQUeM8Q/profile-displayphoto-shrink_200_200/0/1712077395153?e=1719446400&v=beta&t=OUP2dCx71L_j_IDr3mZcLHrQMOBBDIlhofnUoQ0mxfQ",
      linkedin: "https://www.linkedin.com/in/bhabanishankar-mishra-96991b23b/"
    },
    {
      name: "Jyoti Ranjan Panda",
      role: "Business Analyst",
      photo: "https://media.licdn.com/dms/image/D5635AQHw7tWjibPTdQ/profile-framedphoto-shrink_100_100/0/1699555298155?e=1714856400&v=beta&t=pTq2mtiV28uBkVESyrFIx23syLJdh1Txt-GbmjxjZ28",
      linkedin: "https://www.linkedin.com/in/jyotiranjan-panda-41739a227/"
    },
    {
      name: "Sefali Priyadarshani",
      role: "Relationship Manager",
      photo: "https://media.licdn.com/dms/image/D5635AQETKNczNvgWgw/profile-framedphoto-shrink_200_200/0/1712682130289?e=1714856400&v=beta&t=LYGOZMN0pv_bgQmDvFP51C2vOgftcE0D010q_nl-TUE",
      linkedin: "https://www.linkedin.com/in/sefali-priyadarsini-a98a711a0/"
    },
    {
      name: "Jagmohan Gope",
      role: "Db Engineer",
      photo: "https://media.licdn.com/dms/image/D4D03AQECKMaWEdmKEg/profile-displayphoto-shrink_200_200/0/1683318748944?e=1719446400&v=beta&t=gtsm_FV9wh1NU8eYiLrqTnzmr6MEXKphj7G--6yvDB4",
      linkedin: "https://www.linkedin.com/in/jagmohangope/"
    },
  
  ];
  return (
    <>
      <div
        className={`${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        } py-6 sm:py-8 lg:py-12`}
      >
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-indigo-600 md:mb-6 lg:text-3xl">
              Meet My Team
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
