import React from 'react';
import { ArrowRight } from 'lucide-react';

function Hero({ socialLinks }) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            Edwin Jojie
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Software Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            Passionate developer dedicated to creating efficient solutions and delivering exceptional user experiences.
          </p>
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 transition-all text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="flex items-center justify-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-medium shadow-sm hover:shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-all"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#projects"
              className="flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-lg font-medium shadow-sm hover:shadow-md hover:bg-blue-50 dark:hover:bg-gray-600 transition-all"
            >
              See My Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
            <img
              src="./src/components/prof.jpg"
              alt="Edwin Jojie"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;