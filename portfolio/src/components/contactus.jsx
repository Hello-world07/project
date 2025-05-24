import React from 'react';

// A responsive Contact Us section with dark mode support
const ContactUs = () => {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-custom-dark flex items-center justify-center py-8 sm:py-12 transition-colors duration-300">
      <div className="w-full max-w-full sm:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Contact Me</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-200 mb-4">
          Feel free to reach out to me via email or social media!
        </p>
        <div className="bg-white dark:bg-custom-dark-secondary p-4 sm:p-6 rounded-lg shadow-md">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200">Email: pranith@example.com</p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200 mt-2">Twitter: @pranithkonda</p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200 mt-2">LinkedIn: /in/pranithkonda</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;