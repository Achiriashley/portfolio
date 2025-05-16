// 'use client';

// import React, { useEffect, useState } from 'react';
// import { FaLaptopCode, FaServer, FaGitAlt } from "react-icons/fa6";

// const Skills = () => {
//   const [animated, setAnimated] = useState(false);

//   useEffect(() => {
//     // Trigger animation on mount
//     setAnimated(true);
//   }, []);

//   const frontendSkills = [
//     { label: 'HTML/CSS', percent: 95 },
//     { label: 'JavaScript', percent: 90 },
//     { label: 'React.js', percent: 85 },
//     { label: 'Next.js', percent: 80 },
//   ];

//   const backendSkills = [
//     { label: 'Node.js', percent: 88 },
//     { label: 'Express', percent: 85 },
//     { label: 'MongoDB', percent: 82 },
//     { label: 'REST APIs', percent: 90 },
//   ];

//   const tools = [
//   { label: 'Git', icon: <FaGitAlt className="text-blue-600 dark:text-blue-400 text-xl" /> },
//     { label: 'Docker', icon: 'fab fa-docker' },
//     { label: 'AWS', icon: 'fab fa-aws' },
//     { label: 'SQL', icon: 'fas fa-database' },
//     { label: 'Figma', icon: 'fab fa-figma' },
//     { label: 'NPM', icon: 'fab fa-npm' },
//   ];

//   return (
//     <div>
//       <section id="skills" className="fade-in py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">My Skills</h2>
//             <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Frontend Skills */}
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
//               <div className="flex items-center mb-6">
//                 <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
//                   {/* <i className="fas fa-laptop-code text-blue-600 dark:text-blue-400"></i> */}
//                   <FaLaptopCode className="fas fa-laptop-code text-blue-600 dark:text-blue-400"/>

//                 </div>
//                 <h3 className="text-xl font-semibold">Frontend Development</h3>
//               </div>
//               <div className="space-y-4">
//                 {frontendSkills.map((skill) => (
//                   <div key={skill.label}>
//                     <div className="flex justify-between mb-1">
//                       <span className="text-sm font-medium">{skill.label}</span>
//                       <span className="text-sm text-gray-500">{skill.percent}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
//                       <div
//                         className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
//                         style={{ width: animated ? `${skill.percent}%` : '0%' }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Backend Skills */}
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
//               <div className="flex items-center mb-6">
//                 <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
//                   {/* <i className="fas fa-server text-blue-600 dark:text-blue-400"></i> */}
//                   <FaServer className="fas fa-server text-blue-600 dark:text-blue-400"/>
//                 </div>
//                 <h3 className="text-xl font-semibold">Backend Development</h3>
//               </div>
//               <div className="space-y-4">
//                 {backendSkills.map((skill) => (
//                   <div key={skill.label}>
//                     <div className="flex justify-between mb-1">
//                       <span className="text-sm font-medium">{skill.label}</span>
//                       <span className="text-sm text-gray-500">{skill.percent}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
//                       <div
//                         className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
//                         style={{ width: animated ? `${skill.percent}%` : '0%' }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Other Skills Icons */}
//           <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {tools.map((tool) => (
//               <div
//                 key={tool.label}
//                 className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center relative"
//               >
//                 <div
//                   className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2"
//                   title={tool.label}
//                 >
//                   <i className={`${tool.icon} text-blue-600 dark:text-blue-400 text-xl`}></i>
//                 </div>
//                 <span className="text-sm font-medium">{tool.label}</span>
//               </div>
//             ))}
//           </div>

//           {/* Resume Download CTA */}
//           <div className="mt-12 text-center">
//             <a
//               href="/resume.pdf"
//               download
//               className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
//             >
//               Download My Resume
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Skills;

'use client';

import React, { useEffect, useState } from 'react';
import { FaGitAlt, FaDocker, FaAws, FaDatabase, FaFigma, FaNpm, FaLaptopCode, FaServer } from 'react-icons/fa';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setAnimated(true);
  }, []);

  const frontendSkills = [
    { label: 'HTML/CSS', percent: 95 },
    { label: 'JavaScript', percent: 90 },
    { label: 'React.js', percent: 85 },
    { label: 'Next.js', percent: 80 },
  ];

  const backendSkills = [
    { label: 'Node.js', percent: 88 },
    { label: 'Express', percent: 85 },
    { label: 'MongoDB', percent: 82 },
    { label: 'REST APIs', percent: 90 },
  ];

  const tools = [
    { label: 'Git', icon: <FaGitAlt className="text-blue-600 dark:text-blue-400 text-xl" /> },
    // { label: 'Docker', icon: <FaDocker className="text-blue-600 dark:text-blue-400 text-xl" /> },
    // { label: 'AWS', icon: <FaAws className="text-blue-600 dark:text-blue-400 text-xl" /> },
    { label: 'SQL', icon: <FaDatabase className="text-blue-600 dark:text-blue-400 text-xl" /> },
    { label: 'Figma', icon: <FaFigma className="text-blue-600 dark:text-blue-400 text-xl" /> },
    { label: 'NPM', icon: <FaNpm className="text-blue-600 dark:text-blue-400 text-xl" /> },
  ];

  return (
    <div>
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <FaLaptopCode className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Frontend Development</h3>
              </div>
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.label}</span>
                      <span className="text-sm text-gray-500">{skill.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
                        style={{ width: animated ? `${skill.percent}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <FaServer className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Backend Development</h3>
              </div>
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.label}</span>
                      <span className="text-sm text-gray-500">{skill.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
                        style={{ width: animated ? `${skill.percent}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other Skills Icons */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.label}
                className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-col items-center relative"
              >
                <div
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2"
                  title={tool.label}
                >
                  {tool.icon}
                </div>
                <span className="text-sm font-medium">{tool.label}</span>
              </div>
            ))}
          </div>

          {/* Resume Download CTA */}
          <div className="mt-12 text-center">
            <a
              href="/MyResume.pdf"
              download
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
