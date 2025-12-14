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
              I build real-world AI systems — from computer vision pipelines and agent workflows to distributed backend architectures and full-stack platforms. My work focuses on making AI systems reliable under real constraints such as low compute, noisy data, and time pressure. I enjoy designing systems, reading research, and turning ideas into production-ready platforms.
            </p>

            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Education</h3>

            <div className="mb-6">
              <h4 className="font-semibold text-lg text-blue-600 dark:text-blue-400">B.Tech in Computer Science & Engineering</h4>
              <p className="text-gray-700 dark:text-gray-300">Mar Baselios College of Engineering and Technology (Autonomous), Thiruvananthapuram</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2022 – 2026</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Higher Secondary (CBSE)</h4>
              <p className="text-gray-700 dark:text-gray-300">Placid Vidya Vihar, Mallappally — 88.6%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2020 – 2022</p>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Secondary School (CBSE)</h4>
              <p className="text-gray-700 dark:text-gray-300">Mar Dionysius Senior Secondary School, Mallappally — 92%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Until 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;