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
              I'm a versatile software developer driven by a passion for AI/ML and full-stack development. I excel in building intelligent systems using computer vision and deep learning, alongside crafting user-friendly, scalable web applications with the MERN stack. My goal is to leverage technology to address real-world challenges through continuous learning and innovation.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My interests include developing AI/ML solutions for practical problems, designing full-stack web applications, and exploring cybersecurity and robotics. I’m always eager to tackle new challenges and collaborate on innovative projects.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Currently, I’m pursuing a B.Tech at Mar Baselios College of Engineering and Technology, Nalanchira, Thiruvananthapuram, Kerala (2022-Present). I completed my Higher Secondary education at Placid Vidya Vihar, Changanassery, Kerala (2020-2022), and my secondary schooling at Mar Dionysius Senior Secondary School, Mallappally, Kerala (until 2020).
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Explore my work at{' '}
              <a
                href="https://zingv-arithmetic-5cc08b.netlify.app"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                zingv-arithmetic-5cc08b.netlify.app
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;