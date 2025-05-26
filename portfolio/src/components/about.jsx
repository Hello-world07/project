import React from 'react';
import profilePic from '../assets/image.jpg'; // Replace with your profile picture path
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-custom-dark dark:to-custom-dark-secondary animate-gradient-xy flex items-center justify-center pt-16 sm:pt-20 lg:pt-24 py-8 sm:py-12 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 sm:gap-8">
        {/* Left Side: Fixed Profile Picture, Name, and Social Icons */}
        <div className="lg:w-1/3 flex flex-col items-center fixed top-16 sm:top-20 lg:top-24 left-0 lg:ml-6 h-screen lg:h-auto pt-4 lg:pt-0 px-4 sm:px-6 lg:px-8">
          <img
            src={profilePic}
            alt="Profile"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full object-cover glow-effect mb-4 sm:mb-6 hover:scale-105 transition-transform duration-300"
          />
          {/* Name below profile image */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
          ⫷ 𝙿𝚛𝚊𝚗𝚒𝚝𝚑 ⫸ ⫷ 𝙺𝚘𝚗𝚍𝚊 ⫸
          </h2>
          {/* Centered Social Media Icons */}
          <div className="flex justify-center gap-3 sm:gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <FaLinkedin size={24} className="sm:size-30" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <FaGithub size={24} className="sm:size-30" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <FaTwitter size={24} className="sm:size-30" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <FaEnvelope size={24} className="sm:size-30" />
            </a>
          </div>
        </div>

        {/* Right Side: Scrollable Text Sections */}
        <div className="lg:w-2/3 lg:ml-[33.33%]">
          {/* About Section */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 font-poppins heading-underline animate-heading">
            About Me 🚀
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-200 leading-relaxed font-montserrat">
            Hello! I'm{' '}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
              Konda Pranath
            </span>
            , a dedicated{' '}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
              BTech student
            </span>{' '}
            specializing in{' '}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
              Computer Science Engineering (CSE)
            </span>{' '}
            at ACE Engineering College, Ghatkesar. I have a strong passion for{' '}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
              programming
            </span>{' '}
            and{' '}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
              problem-solving
            </span>
            , and I enjoy exploring new technologies and applying them to real-world scenarios.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-200 leading-relaxed font-montserrat mt-4">
            As an enthusiastic{' '}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
              AI learner
            </span>{' '}
            and{' '}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
              web developer
            </span>
            , I’m always looking for opportunities to grow my technical skills. I stay updated with the latest trends in{' '}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
              software development
            </span>
            ,{' '}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
              artificial intelligence
            </span>
            , and{' '}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
              web technologies
            </span>
            . I take pride in writing{' '}
            <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
              clean, efficient, and scalable code
            </span>{' '}
            to build meaningful solutions that make a real impact.
          </p>

          {/* Education Section */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-6 sm:mt-8 font-poppins heading-underline animate-heading">
            Education 🎓
          </h3>
          <div className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-200 leading-relaxed font-montserrat">
            <p>
              Completed{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                Diploma in Computer Science Engineering (CSE)
              </span>{' '}
              from Vathsalya Institute of Science and Technology, Bhongir, India (2021 – 2024)
            </p>
            <p>
              Graduated with a{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                CGPA of 8.88/10
              </span>
            </p>
            <p className="mt-2">Learned important subjects like:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                  Object-Oriented Programming with Java
                </span>
              </li>
              <li>
                <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                  Python, C, C++
                </span>
              </li>
              <li>
                <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                  Web basics: HTML, CSS, JavaScript
                </span>
              </li>
              <li>
                <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                  Artificial Intelligence and Natural Language Processing
                </span>
              </li>
            </ul>
            <p className="mt-4">
              Currently studying{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                B.Tech in Computer Science Engineering
              </span>{' '}
              at ACE Engineering College, Ghatkesar, Telangana, India
            </p>
            <p>
              Now in my{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                2nd year of B.Tech
              </span>
            </p>
            <p>
              Focused on gaining{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                practical skills
              </span>{' '}
              and{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                knowledge
              </span>{' '}
              to solve real-world problems
            </p>
            <p>
              Always eager to learn{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                new technologies
              </span>{' '}
              and improve every day
            </p>
            <p className="mt-4">
              I believe education is more than just books and grades. It’s about understanding how to use what you learn to{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                create
              </span>
              ,{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                solve problems
              </span>
              , and{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                make a difference
              </span>
              . With every step in my studies, I’m building the skills and mindset needed to grow in the fast-changing world of technology.
            </p>
          </div>

          {/* Certifications Section */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-6 sm:mt-8 font-poppins heading-underline animate-heading">
            Certifications 🏆
          </h3>
          <div className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-200 leading-relaxed font-montserrat">
            <p>
              At the moment, I don’t have any official certifications to share. I’ve completed a{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                3-year diploma in Computer Science Engineering
              </span>{' '}
              and I’m currently pursuing my{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                B.Tech
              </span>{' '}
              to keep building my skills and knowledge.
            </p>
            <p className="mt-4">
              I believe learning doesn't always need a certificate to show its value. I’ve been actively working on{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                projects
              </span>
              , improving my{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                coding skills
              </span>
              , and exploring{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                new technologies
              </span>
              . Still, I do plan to earn certifications that match my interests and goals.
            </p>
            <p className="mt-2">Certifications I plan to take soon:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                  Python Programming
                </span>
              </li>
              <li>
                <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                  Java Development
                </span>
              </li>
              <li>
                <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                  Web Development (HTML, CSS, JavaScript)
                </span>
              </li>
            </ul>
            <p className="mt-4">
              As I complete them, I’ll update this section.{' '}
              <span className="font-semibold text-indigo-500 dark:text-indigo-400 glow-text">
                Learning is a journey
              </span>
              , and I’m just getting started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;