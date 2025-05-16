"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Indah Ashley</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              I build exceptional digital experiences with modern technologies and clean code.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                {/* Use Next.js Image for optimization */}
                <Image
                  src="/mypp.png"
                  alt="Profile"
                  width={288}  // md:w-72 = 18rem = 288px
                  height={288} // same height
                  className="rounded-full object-cover border-4 border-white dark:border-gray-800"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                  {/* For the icon, use react-icons or fontawesome properly */}
                  <i className="fas fa-code text-white text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 