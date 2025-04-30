import React from 'react';

const skillCategories = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    name: "AI/ML",
    skills: ["Computer Vision", "Deep Learning", "TensorFlow", "PyTorch", "OpenCV", "YOLO", "Tesseract", "Reinforcement Learning", "OR Tools"]
  },
  {
    name: "Tools & Others",
    skills: ["Git", "Python", "SQL","Postman", "VS Code"]
  }
];

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
          Skills & Expertise
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;