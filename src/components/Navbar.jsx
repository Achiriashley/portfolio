"use client";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Dark mode setup from localStorage or system preference
    const savedTheme = localStorage.getItem('color-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop - 70,
          behavior: 'smooth',
        });
        setIsMobileMenuOpen(false);
      }
    };
    links.forEach((link) => link.addEventListener('click', handleClick));

    // Fade-in on scroll
    const fadeEls = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
      fadeEls.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.style.opacity = '1';
        }
      });
    };

    fadeEls.forEach((el) => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.6s ease-out';
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    // Cleanup
    return () => {
      links.forEach((link) => link.removeEventListener('click', handleClick));
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('color-theme', newTheme ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50 dark:bg-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold gradient-text">ASHTECH</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="nav-link px-3 py-2 text-sm font-medium">Home</a>
                <a href="#about" className="nav-link px-3 py-2 text-sm font-medium">About</a>
                <a href="#skills" className="nav-link px-3 py-2 text-sm font-medium">Skills</a>
                <a href="#projects" className="nav-link px-3 py-2 text-sm font-medium">Projects</a>
                <a href="#contact" className="nav-link px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none">
                <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
              <button
                className="md:hidden p-2 rounded-full focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium">Skills</a>
              <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium">Projects</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;


