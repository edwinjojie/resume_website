import React from 'react';

const achievements = [
  {
    title: "Smart India Hackathon Prelims Qualified",
    date: "May 2024",
    description: "Qualified for the prelims of the Smart India Hackathon, showcasing strong problem-solving and technical skills in a competitive national-level event."
  },
  {
    title: "Define Hackathon Best Project Award",
    date: "March 2025",
    description: "Awarded Best Project with a ₹10,000 cash prize for an AI-driven flight scheduling solution under the 'AI in Airlines' theme, demonstrating expertise in innovative AI applications."
  },
  {
    title: "NPTEL Certifications",
    date: "Jan-Mar 2024",
    description: "Completed certifications in 'Introduction to Internet of Things' and 'Cloud Computing and Distributed Systems', enhancing knowledge in emerging technologies."
  }
];

function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
          Achievements
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{achievement.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{achievement.date}</p>
              <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;