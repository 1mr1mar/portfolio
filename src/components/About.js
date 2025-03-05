/*import React from 'react';
import profileImage from '../pic/profil.jpg';

const About = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className="py-16 px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className={`w-64 h-72 rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src={profileImage}
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-4 -right-4 w-32 h-32 rounded-lg overflow-hidden border-4 ${darkMode ? 'border-gray-800' : 'border-white'}`}>
                <img 
                  src={profileImage}
                  alt="Additional" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Frontend Developer & UI Designer</h3>
            <p className="mb-4">With 2+ years of experience building modern web applications, I specialize in creating responsive, accessible, and performant user interfaces.</p>
            <p className="mb-6">I'm passionate about clean code, user experience, and staying updated with the latest web technologies.</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-bold">Name:</h4>
                <p>Marwan Ganbour</p>
              </div>
              <div>
                <h4 className="font-bold">Email:</h4>
                <p>ganbourmarwan9@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold">Based in:</h4>
                <p>Ksar el kebir, Morocco</p>
              </div>
              <div>
                <h4 className="font-bold">Freelance:</h4>
                <p>Available</p>
              </div>
            </div>
            
            <a 
              href="#" 
              className={`inline-block px-6 py-3 rounded-lg bg-blue-500 text-white font-medium transition-transform hover:scale-105`}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;*/

import React from "react";
import profileImage from "../pic/profil.jpg";

const About = ({ darkMode }) => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2
          className={`text-3xl font-bold mb-12 text-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Profile Image Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className={`w-72 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-110 ${
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                <img
                  src={profileImage}
                  alt="About Me"
                  className="w-full h-full object-cover animate-pop"
                />
              </div>
            </div>
          </div>

          {/* Text Information Section */}
          <div>
            <h3
              className={`text-xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Frontend Developer & UI Designer
            </h3>
            <p
              className={`mb-4 text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              With 2+ years of experience building modern web applications, I
              specialize in creating responsive, accessible, and performant user
              interfaces.
            </p>
            <p
              className={`mb-6 text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm passionate about clean code, user experience, and staying
              updated with the latest web technologies.
            </p>

            {/* Personal Info Grid */}
            <div
              className={`grid grid-cols-2 gap-4 mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-900"
              }`}
            >
              <div>
                <h4 className="font-semibold">👤 Name:</h4>
                <p>Marwan Ganbour</p>
              </div>
              <div>
                <h4 className="font-semibold">📧 Email:</h4>
                <p>
                  <a
                    href="mailto:ganbourmarwan9@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    ganbourmarwan9@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold">📍 Based in:</h4>
                <p>Ksar El Kebir, Morocco</p>
              </div>
              <div>
                <h4 className="font-semibold">💼 Freelance:</h4>
                <p className="text-green-500 font-semibold">Available ✅</p>
              </div>
            </div>

            {/* Resume Download Button */}
            <a
              href="https://www.youtube.com/watch?v=0VAAS9xnS5U&list=RD0VAAS9xnS5U&start_radio=1"
              className="inline-block px-6 py-3 rounded-lg bg-blue-500 text-white font-medium transition-transform hover:scale-110 hover:shadow-lg"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
