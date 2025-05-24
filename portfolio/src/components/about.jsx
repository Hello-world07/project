import React from 'react';

// A clean, responsive About section with dark mode support
const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-custom-dark flex items-center justify-center py-8 sm:py-12 transition-colors duration-300">
      <div className="w-full max-w-full sm:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">About Me</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-200 leading-relaxed">
          Hi, I'm Pranith Konda, a passionate developer with experience in building modern web applications using React, Vite, and Tailwind CSS. I enjoy creating user-friendly interfaces and exploring new technologies.
        </p>
      </div>
    </section>
  );
};

export default About;