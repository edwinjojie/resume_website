import React from 'react';

const achievements = [
  {
    title: "Best Project Award — Define Hackathon",
    date: "2025",
    description: "Awarded for creating an AI-driven flight scheduling system that optimizes aircraft and crew assignments using reinforcement learning."
  },
  {
    title: "Smart India Hackathon Prelims Qualified",
    date: "2024",
    description: "Qualified for the prelims execution round, demonstrating strong technical capability in solving real-world problem statements."
  },
  {
    title: "Technical Certifications",
    date: "Ongoing",
    description: "Cloud Computing & Distributed Systems, Introduction to Internet of Things, SQL Beginner to Guru (MySQL)."
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