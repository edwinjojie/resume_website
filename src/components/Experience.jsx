import React from 'react';

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Magnory Pvt Ltd",
    period: "Dec 2024 - Jan 2025",
    description: [
      "Developed real-world applications customized for client requirements",
      "Designed and built integrated web and desktop interfaces using React, Node.js, and Electron",
      "Implemented Firebase as the backend for efficient data management"
    ],
    technologies: ["React", "Node.js", "Electron", "Firebase"]
  },
  {
    title: "AI/ML Intern",
    company: "Smart City Pvt Ltd, Trivandrum, Kerala",
    period: "Dec 2024 - Present",
    description: [
      "Developed a deployable system to monitor illegal trash dumping using city surveillance cameras, enhancing urban cleanliness",
      "Utilized vision-based AI models, experimenting with multiple frameworks to identify the optimal solution",
      "Contributed to creating a greener, law-compliant city environment through AI-driven monitoring"
    ],
    technologies: ["OpenCV", "TensorFlow", "PyTorch", "YOLO", "Tesseract"]
  },
  {
    title: "Student Intern",
    company: "ICT, Trivandrum, Kerala",
    period: "Jul 2024 - Aug 2024",
    description: [
      "Applied MERN full-stack development to real-world scenarios, creating functional web applications",
      "Built multiple web interfaces and applications tailored to project requirements"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  }
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
          Professional Experience & Internships
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-900 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-4 border-white dark:border-gray-900 bg-blue-500"></div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{exp.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:ml-4">{exp.period}</p>
                  </div>
                  <ul className="mb-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;