import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import pic1 from '../images/pic1.jpeg';
import pic2 from '../images/pic_veh.jpeg';

const projects = [
  {
    title: "Smart City Waste Disposal Detection System",
    description: "Real-world CCTV-based computer vision system using YOLOv8, MiDaS depth estimation, and tracking logic. Generates evidence-grade outputs (images, video clips, reports) and was tested on real footage under low-compute constraints.",
    image: pic2,
    technologies: ["YOLOv8", "MiDaS", "OpenCV", "Tracking", "Python"],
    github: "https://github.com/edwinjojie/miniproject" // Assuming this is the repo based on previous context
  },
  {
    title: "Valid8Care — AI Agent Automation Engine",
    description: "Modular, agent-driven AI system for healthcare data validation & enrichment. Designed custom agent workflows with FastAPI, async backends, and LLM orchestration to handle complex data validation tasks.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["FastAPI", "Next.js", "LLM Agents", "Async Python"],
    // github link unknown, leaving blank or omitting
  },
  {
    title: "DAPCVRN — Credential Verification Network",
    description: "Distributed platform for issuing and verifying credentials using cryptographic hashing. Features role-based dashboards for jobseekers and recruiters, built with a robust Node.js/TypeScript backend.",
    image: "https://images.pexels.com/photos/4507746/pexels-photo-4507746.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Node.js", "TypeScript", "MongoDB", "React", "Cryptography"],
    // github link unknown
  },
  {
    title: "AI Study Coach",
    description: "Offline, privacy-first personalized learning assistant using MCP and lightweight microservices. Offers adaptive study planning, mastery tracking, and spaced repetition without relying on cloud-heavy AI.",
    image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["MCP", "Microservices", "Python", "Local AI"],
    // github link unknown
  },
  {
    title: "OCR Desktop Application",
    description: "Desktop OCR tool for images and PDFs supporting multi-language extraction and configurable parameters. Built as a native application for high-accuracy text digitization.",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "OpenCV", "Tesseract", "Desktop App"],
    github: "https://github.com/edwinjojie/CGIP_project"
  },
  {
    title: "Tail Assignment Problem in Flight Scheduling",
    description: "Reinforcement learning and OR Tools based system optimizing aircraft and crew assignments. Winner of the Best Project Award at Define Hackathon for its efficiency and sustainability focus.",
    image: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Reinforcement Learning", "OR Tools", "Optimization"],
    github: "https://github.com/edwinjojie/tail_assignment",
    live: "https://snazzy-pony-dd40ba.netlify.app"
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
                <p className="text-gray-600 dark:text-gray-400 mb-4 h-24 overflow-auto px-1 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">{project.description}</p>
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