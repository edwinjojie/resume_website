import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Covid Cases Management System",
    description: "A Python-MySQL system for managing and analyzing COVID-19 cases, featuring multilevel authentication, data entry, analysis tools, and graphical visualizations.",
    image: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "MySQL"],
    github: "https://github.com/edwinjojie/covid-management"
  },
  {
    title: "Custom Trip Planning Website",
    description: "A dynamic trip planning website for tourists, offering maps, transportation options, authorized guides, a chatbot for trip discussions, and a translator for enhanced user experience.",
    image: "https://images.pexels.com/photos/346715/pexels-photo-346715.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/edwinjojie/trip-planner",
    live: "https://trip-planner-demo.netlify.app"
  },
  {
    title: "Waste Disposal Detection System",
    description: "An AI-driven system using vision-based models to monitor illegal waste disposal via surveillance cameras, enabling authorities to enforce regulations and promote a cleaner city.",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["OpenCV", "TensorFlow", "PyTorch", "YOLO", "Tesseract"],
    github: "https://github.com/edwinjojie/waste-disposal",
    live: "https://waste-disposal-demo.netlify.app"
  },
  {
    title: "Tail Assignment Problem in Flight Scheduling",
    description: "A sustainable flight scheduling solution using Reinforcement Learning and OR Tools, optimizing assignments for flights, aircraft, and crews with a focus on environmental impact.",
    image: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Reinforcement Learning", "OR Tools"],
    github: "https://github.com/edwinjojie/tail-assignment",
    live: "https://tail-assignment-demo.netlify.app"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
          Projects
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 h-20 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;