import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

// Edit this array to update your experience
const experiences: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "Tech Innovations Inc.",
    period: "Jan 2023 - Present",
    description: [
      "Developed and maintained web applications using React and Node.js",
      "Implemented responsive designs and optimized for mobile devices",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Reduced application load time by 40% through code optimization"
    ],
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Docker"]
  },
  {
    title: "Junior Developer",
    company: "Digital Solutions Ltd.",
    period: "Jun 2021 - Dec 2022",
    description: [
      "Assisted in the development of customer-facing web applications",
      "Participated in code reviews and implemented feedback to improve code quality",
      "Created and maintained documentation for internal processes",
      "Collaborated with design team to implement UI/UX improvements"
    ],
    technologies: ["JavaScript", "HTML/CSS", "Git", "RESTful APIs", "Bootstrap"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
          Professional Experience
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
};

export default Experience;