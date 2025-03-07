import React from 'react';
import { useTranslation } from 'react-i18next';
import projectimg1 from'../pic/project1.png';
import projectimg2 from'../pic/project2.jpg';
import projectimg3 from'../pic/project3.png';

const Projects = ({ darkMode }) => {
  const { t } = useTranslation();


  const projects = [
    {
      id: 1,
      title: t("projectss.project1.title"),
      description: t("projectss.project1.description"),
      tags: ["HTML", "CSS", "JavaScript"],
      image: projectimg1,
      dimo: "https://chipper-clafoutis-944b48.netlify.app/",
      code: "https://github.com/1mr1mar/e-commers-Html-css-js",
    },
    {
      id: 2,
      title: t("projectss.project2.title"),
      description: t("projectss.project2.description"),
      tags: ["React", "CSS", "JavaScript"],
      image: projectimg2,
      dimo: "https://github.com/1mr1mar/E-commers-website-React",
      code: "https://github.com/1mr1mar/E-commers-website-React",
    },
    {
      id: 3,
      title: t("projectss.project3.title"),
      description: t("projectss.project3.description"),
      tags: ["React", "Tailwind CSS", "Node.js"],
      image: projectimg3,
      dimo: "https://marwan-ganbour.netlify.app/",
      code: "https://github.com/1mr1mar/portfolio",
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("projects.title")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.dimo}
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm"
                  >
                    {t("projectss.project1.live_demo")} 
                  </a>
                  <a 
                    href={project.code} 
                    className={`px-4 py-2 rounded-lg text-sm border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                  >
                    {t("projectss.project1.code")} 
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/1mr1mar" 
            className={`inline-block px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} font-medium transition-transform hover:scale-105`}
          >
            {t("projectss.view_all")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
