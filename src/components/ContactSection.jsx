// "use client";
// import React from 'react';

// const ContactSection = () => {
//   return (
//     <section id="contact" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//           <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
//             Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row gap-12">
//           <div className="md:w-1/2">
//             <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
//                   <i className="fas fa-envelope text-blue-600 dark:text-blue-400"></i>
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Email</h4>
//                   <p className="text-gray-600 dark:text-gray-300">indahashleyachiri@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
//                   <i className="fas fa-phone-alt text-blue-600 dark:text-blue-400"></i>
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Phone</h4>
//                   <p className="text-gray-600 dark:text-gray-300">+237 678262483</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
//                   <i className="fas fa-map-marker-alt text-blue-600 dark:text-blue-400"></i>
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Location</h4>
//                   <p className="text-gray-600 dark:text-gray-300">Douala-Cameroon</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10">
//               <h4 className="font-medium mb-4">Follow Me</h4>
//               <div className="flex space-x-4">
//                 <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
//                   <i className="fab fa-github text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"></i>
//                 </a>
//                 <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
//                   <i className="fab fa-linkedin-in text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"></i>
//                 </a>
//                 <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
//                   <i className="fab fa-twitter text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"></i>
//                 </a>
//                 <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
//                   <i className="fab fa-instagram text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"></i>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="md:w-1/2">
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
//                   <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//                   <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
//                 <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
//                 <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"></textarea>
//               </div>

//               <div>
//                 <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;



// 'use client';
// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactSection = () => {
//   const formRef = useRef();
//   const [message, setMessage] = useState('');

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_n3nvlis',    // Replace with your EmailJS service ID
//         'template_yuymtp8',   // Replace with your EmailJS template ID
//         formRef.current,
//         'V7BeBd4MWRAv8rD2V'     // Replace with your EmailJS public key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setMessage('✅ Message sent successfully!');
//           formRef.current.reset();
//         },
//         (error) => {
//           console.error(error.text);
//           setMessage('❌ Failed to send message.');
//         }
//       );
//   };

//   return (
//     <section id="contact" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//           <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
//             Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row gap-12">
//           {/* LEFT SIDE CONTACT INFO OMITTED FOR BREVITY */}

//           <div className="md:w-1/2">
//             <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
//                   <input type="text" name="user_name" required id="name" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800" />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//                   <input type="email" name="user_email" required id="email" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800" />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
//                 <input type="text" name="subject" id="subject" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800" />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
//                 <textarea name="message" required id="message" rows="5" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800"></textarea>
//               </div>

//               <div>
//                 <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
//                   Send Message
//                 </button>
//                 {message && (
//                   <p className="mt-4 text-center text-sm text-green-500 dark:text-green-300">
//                     {message}
//                   </p>
//                 )}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;





"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
         'service_n3nvlis',    // Replace with your EmailJS service ID
        'template_fghrx1p',   // Replace with your EmailJS template ID
        formRef.current,
        'V7BeBd4MWRAv8rD2V'     // Replace with your EmailJS public key
       )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    indahashleyachiri@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <FaPhoneAlt className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +237 678262483
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Douala-Cameroon</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Achiriashley"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  <FaGithub className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  <FaLinkedinIn className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
                </a>
                <a
                  href="https://x.com/indahashley11?s=11&t=vkY6N_bwBd19sWedjLLyFQ"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  <FaTwitter className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
                </a>
                <a
                  href="https://www.instagram.com/tall_ashley?igsh=MWR6cG9yODQ5dnF6ZA%3D%3D&utm_source=qr"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                >
                  <FaInstagram className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
