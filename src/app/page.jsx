import React from 'react';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';



const HomePage = () => {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white">
            {/* Other sections of your homepage */}
            <Navbar />
             <Hero/>
          <About />
          <Skills/>
          <Projects/>
          <ContactSection/>
          <Footer/>
           
        </div>
    );
}

export default HomePage;
