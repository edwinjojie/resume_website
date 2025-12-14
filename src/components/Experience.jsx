import React from 'react';

const experiences = [
  {
    title: "Project Trainee",
    company: "IBS Software",
    period: "Jun 2025 - Oct 2025",
    description: [
      "Worked on enterprise-scale aviation software products",
      "Redesigned and developed a proof-of-concept for an existing production system",
      "Explored and integrated AI-assisted workflows into enterprise software",
      "Gained exposure to Java, Spring Boot, Maven, and microservices-based architectures",
      "Collaborated within Agile teams and large codebases"
    ],
    technologies: ["Java", "Spring Boot", "Maven", "Microservices"]
  },
  {
    title: "IT / AI Intern",
    company: "Smart City Thiruvananthapuram Limited",
    period: "Dec 2024 - Jan 2025",
    description: [
      "Designed and deployed a real-world computer vision system to detect illegal trash dumping using surveillance footage",
      "Built event-based logic combining detection, tracking, depth estimation, and temporal reasoning",
      "Optimized performance under low-compute constraints using real CCTV data"
    ],
    technologies: ["OpenCV", "YOLO", "Depth Estimation", "Tracking"]
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Magnory Pvt Ltd",
    period: "Dec 2024 - Jan 2025",
    description: [
      "Developed production-grade web and desktop applications using React, Node.js, Electron, and Firebase",
      "Built integrated dashboards and client-facing systems",
      "Worked on application structure, data flows, and usability"
    ],
    technologies: ["React", "Node.js", "Electron", "Firebase"]
  },
  {
    title: "Student Intern",
    company: "ICT Academy of Kerala",
    period: "Jul 2024 - Aug 2024",
    description: [
      "Built functional MERN stack web applications",
      "Strengthened frontend–backend integration skills"
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