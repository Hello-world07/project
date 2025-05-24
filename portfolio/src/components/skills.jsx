import React from 'react';

// A responsive Skills section with dark mode support
const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-custom-dark flex items-center justify-center py-8 sm:py-12 pt-20 transition-colors duration-300">
      <div className="w-full max-w-full sm:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">My Skills</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <li className="bg-white dark:bg-custom-dark-secondary p-3 sm:p-4 rounded-lg shadow-md text-center text-sm sm:text-base text-gray-600 dark:text-gray-200">
            React
          </li>
          <li className="bg-white dark:bg-custom-dark-secondary p-3 sm:p-4 rounded-lg shadow-md text-center text-sm sm:text-base text-gray-600 dark:text-gray-200">
            Vite
          </li>
          <li className="bg-white dark:bg-custom-dark-secondary p-3 sm:p-4 rounded-lg shadow-md text-center text-sm sm:text-base text-gray-600 dark:text-gray-200">
            Tailwind CSS
          </li>
          <li className="bg-white dark:bg-custom-dark-secondary p-3 sm:p-4 rounded-lg shadow-md text-center text-sm sm:text-base text-gray-600 dark:text-gray-200">
            JavaScript
          </li>
          <li className="bg-white dark:bg-custom-dark-secondary p-3 sm:p-4 rounded-lg shadow-md text-center text-sm sm:text-base text-gray-600 dark:text-gray-200">
            HTML
          </li>
          <li className="bg-white dark:bg-custom-dark-secondary p-3 sm:p-4 rounded-lg shadow-md text-center text-sm sm:text-base text-gray-600 dark:text-gray-200">
            CSS
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;