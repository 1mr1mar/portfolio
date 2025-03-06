/*import React from "react";

const Skills = ({ darkMode }) => {
  // Skills data
  const skills = [
    { name: "React", level: 65 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 60 },
    { name: "TypeScript", level: 50 },
    { name: "UI/UX Design", level: 80 },
    { name: "JAVA", level: 60 },
    { name: "C,C++", level: 95 },
    { name: "C#", level: 80 },
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div
                    className={`w-full h-2 rounded-full ${
                      darkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Education & Experience</h3>
            <div
              className={`border-l-2 border-blue-500 pl-4 space-y-6 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <div>
                <div className="flex items-center">
                  <div className="absolute -ml-6 w-3 h-3 rounded-full bg-blue-500"></div>
                  <h4 className="text-lg font-bold">
                    Advanced Frontend Developer
                  </h4>
                </div>
                <p className="text-sm opacity-75">2023 - Present</p>
                <p className="mt-2">Freelance</p>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="absolute -ml-6 w-3 h-3 rounded-full bg-blue-500"></div>
                  <h4 className="text-lg font-bold">UI Developer</h4>
                </div>
                <p className="text-sm opacity-75">2023 - Present</p>
                <p className="mt-2">Freelance</p>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="absolute -ml-6 w-3 h-3 rounded-full bg-blue-500"></div>
                  <h4 className="text-lg font-bold"> Computer Science</h4>
                </div>
                <p className="text-sm opacity-75">2023 - 2025</p>
                <p className="mt-2">MIAGE ksar el kebir</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;*/

import React, { useEffect, useRef } from "react";
import "boxicons/css/boxicons.min.css";

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "React", icon: "bx bxl-react bx-spin" },
    { name: "JavaScript", icon: "bx bxl-javascript bx-tada bx-rotate-90" },
    { name: "HTML/CSS", icon: "bx bxl-html5 bx-burst " },
    { name: "Node.js", icon: "bx bxl-nodejs" },
    { name: "TypeScript", icon: "bx bxl-typescript" },
    { name: "UI/UX Design", icon: "bx bx-paint" },
    { name: "JAVA", icon: "bx bxl-java" },
    { name: "C, C++", icon: "bx bx-code" },
    { name: "C#", icon: "bx bxl-c-plus-plus" },
  ];

  const experiences = [
    {
      title: "Advanced Frontend Developer",
      duration: "2023 - Present",
      place: "Freelance",
      icon: "bx bx-briefcase",
    },
    {
      title: "UI Developer",
      duration: "2023 - Present",
      place: "Freelance",
      icon: "bx bx-briefcase",
    },
  ];

  const education = [
    {
      title: "Bachelor's in Computer Science",
      duration: "2023 - 2025",
      place: "MIAGE Ksar El Kebir",
      icon: "bx bxs-graduation",
    },
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-visible");
          } else {
            entry.target.classList.remove("slide-in-visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    
    const refs = skillRefs.current;

    refs.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      refs.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <section id="skills" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className={`p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 transform transition-transform hover:scale-105 duration-300 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } slide-in`}
            >
              <i className={`${skill.icon} text-9xl text-blue-500`}></i>
              <h3 className="text-lg font-semibold text-center">{skill.name}</h3>
            </div>
          ))}
        </div>

        <h2 className="text-5xl font-bold mb-12 text-center">Education & Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...education, ...experiences].map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform hover:scale-105 duration-300 ${
    darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
  }`}
            >
              <i className={`${item.icon} text-5xl text-blue-500 mb-2`}></i>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm opacity-75">{item.duration}</p>
              <p className="mt-1 font-medium">{item.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
