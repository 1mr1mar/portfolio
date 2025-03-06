import React from 'react';
import projectimg1 from'../pic/project1.png';

const Projects = ({ darkMode }) => {
  // Projects data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-featured online store with shopping cart and payment integration.",
      tags: ["Html", "CSS", "java-script"],
      image:projectimg1,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for organizing tasks and tracking progress.",
      tags: ["React", "Redux", "Firebase"],
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media performance tracking.",
      tags: ["React", "Chart.js", "REST API"],
      image: "/api/placeholder/400/300",
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        
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
                    href="https://github.com/1mr1mar" 
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm"
                  >
                    Live Demo
                  </a>
                  <a 
                    href="https://chipper-clafoutis-944b48.netlify.app/" 
                    className={`px-4 py-2 rounded-lg text-sm border ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}
                  >
                    Code
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
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;