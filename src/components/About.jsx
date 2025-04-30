import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
            About Me
          </h2>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 md:p-8 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a dedicated software developer with a passion for creating elegant, efficient solutions to complex problems. With a strong foundation in both front-end and back-end technologies, I strive to build applications that are not only functional but also provide exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My journey in software development began with a fascination for how technology can transform ideas into reality. Since then, I've honed my skills through continuous learning and real-world projects, always pushing the boundaries of what I can achieve.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or expanding my knowledge through online courses and technical literature. I believe in the power of collaboration and am always eager to work with teams that share my enthusiasm for innovation and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;