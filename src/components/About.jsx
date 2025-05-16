"use client";
import React from 'react'

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="fade-in py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
              <div className="w-64 h-64 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/mypp.png"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3 md:pl-12">
              <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate Full Stack Developer with 2+ years of experience creating web applications. 
                I specialize in JavaScript technologies across the whole stack (React.js, Node.js, Next.js, MongoDB).
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My journey in web development started when I was in college, and since then I've worked with startups 
                and established companies to build scalable, performant, and user-friendly applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                When I'm not coding, you can find me gaming, reading tech blogs, or contributing to open-source projects.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">
                    Name: <span className="text-gray-600 dark:text-gray-300 font-normal">Indah Ashley</span>
                  </p>
                  <p className="font-medium">
                    Email: <span className="text-gray-600 dark:text-gray-300 font-normal">indahashleyachiri@gmail.com</span>
                  </p>
                </div>
                <div>
                  <p className="font-medium">
                    From: <span className="text-gray-600 dark:text-gray-300 font-normal">Douala-Cameroon</span>
                  </p>
                  <p className="font-medium">
                    Freelance: <span className="text-gray-600 dark:text-gray-300 font-normal">Available</span>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/MyResume.pdf"
                  download
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Download CV <i className="fas fa-download ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;


