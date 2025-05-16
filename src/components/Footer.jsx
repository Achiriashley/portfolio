import React from 'react'

const Footer = () => {
  return (
    <footer className="fade-in bg-gray-100 dark:bg-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold gradient-text">ASHTECH</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-300">&copy; 2025 Indah Ashley. All rights reserved.</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Built with passion and modern web technologies by ASHTECH.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

