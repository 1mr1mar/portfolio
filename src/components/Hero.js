/*import React from 'react';
import profileImage from '../pic/profil.jpg';

const Hero = ({ darkMode }) => {
  return (
    <section 
      id="home" 
      className="pt-24 md:pt-32 px-4 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-blue-500">Marwan</span></h1>
              <h2 className="text-2xl md:text-3xl mb-6">Frontend Developer</h2>
              <p className="text-lg mb-8 opacity-80">I build responsive and interactive web applications with modern technologies.</p>
              <div className="flex space-x-4">
                <a 
                  href="#contact" 
                  className={`px-6 py-3 rounded-lg bg-blue-500 text-white font-medium transition-transform hover:scale-105`}
                >
                  Contact Me
                </a>
                <a 
                  href="#projects" 
                  className={`px-6 py-3 rounded-lg border ${darkMode ? 'border-gray-600' : 'border-gray-300'} font-medium transition-transform hover:scale-105`}
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl transition-transform hover:scale-105">
              <img 
                src={profileImage}
                alt="Developer Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;*/
import React, { useState, useEffect } from "react";
import profileImage from "../pic/profil.jpg";

const Hero = ({ darkMode }) => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Marwan";
  const [showTitle, setShowTitle] = useState(false);

  // تأثير الكتابة
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // إصلاح طريقة تحديث النص
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowTitle(true), 500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <section
      id="home"
      className="pt-24 md:pt-32 px-4 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* النصوص والمعلومات */}
          <div className="order-2 md:order-1 animate-fadeIn">
            {/* تأثير الكتابة */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-blue-500">{text}</span>
              <span className="animate-blink">|</span>
            </h1>

            {/* العنوان يظهر بعد الكتابة */}
            {showTitle && (
              <h2 className="text-2xl md:text-3xl mb-6 animate-slideIn">
                Frontend Developer
              </h2>
            )}

            <p className="text-lg mb-8 opacity-80 animate-fadeIn">
              I build responsive and interactive web applications with modern
              technologies.
            </p>

            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-blue-500 text-white font-medium transition-transform hover:scale-110 hover:shadow-glow"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className={`px-6 py-3 rounded-lg border ${
                  darkMode ? "border-gray-600" : "border-gray-300"
                } font-medium transition-transform hover:scale-110`}
              >
                View Projects
              </a>
            </div>
          </div>

          {/* صورة البروفايل */}
          <div className="flex justify-center">
            <div className="w-96 h-96 md:w-[30rem] md:h-[30rem] rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl transition-transform animate-pop hover:scale-110 hover:animate-glow">
              <img
                src={profileImage}
                alt="Developer Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
