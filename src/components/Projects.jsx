// import React from 'react';

// const Projects = () => {
//   return (
//     <div>
//       {/* Projects Section */}
//       <section id="projects" className="fade-in py-20 bg-gray-100 dark:bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">My Projects</h2>
//             <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//             <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
//               Here are some of my recent projects. Each one was built to solve specific problems and deliver value.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Repeat this structure for each project */}
//             <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover">
//               <div className="h-48 overflow-hidden">
//                 <img src="https://via.placeholder.com/600x400" alt="Project 1" className="w-full h-full object-cover" />
//               </div>
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-bold">E-commerce Platform</h3>
//                   <div className="flex space-x-2">
//                     <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
//                       <i className="fab fa-github" />
//                     </a>
//                     <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
//                       <i className="fas fa-external-link-alt" />
//                     </a>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   A full-featured e-commerce platform with product listings, cart functionality, and payment processing.
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-200">React</span>
//                   <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-200">Node.js</span>
//                   <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-200">MongoDB</span>
//                 </div>
//               </div>
//             </div>

//             {/* Repeat the same structure for Projects 2 to 6... */}
//             {/* Be sure to fix className and self-closing tags for all! */}
//           </div>

//           <div className="text-center mt-12">
//             <a
//               href="#"
//               className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-700 inline-flex items-center"
//             >
//               View All Projects <i className="fas fa-arrow-right ml-2" />
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import projectData from "@/Data/ProjectData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";



const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Each one was built to solve specific problems and deliver value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <FaGithub/>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-700 inline-flex items-center"
          >
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
