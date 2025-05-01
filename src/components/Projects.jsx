import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import pic1 from '../images/pic1.jpeg';
import pic2 from '../images/pic_veh.jpeg';

const projects = [
  {
    title: "Covid Cases Management System",
    description: "A Python-MySQL system for managing COVID-19 cases, featuring multilevel authentication, data entry, analysis tools, and graphical visualizations for efficient case tracking.",
    image: "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "MySQL"],
    github: "https://github.com/edwinjojie/Covid-Case-Management-system"
  },
  {
    title: "Custom Trip Planning Website",
    description: "A MERN stack website for tourists, offering dynamic trip planning with maps, transportation, guides, a chatbot, and a translator for an enhanced travel experience.",
    image: "https://images.pexels.com/photos/346715/pexels-photo-346715.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/edwinjojie/tourist_guidance_website"
  },
  {
    title: "Waste Disposal Detection System",
    description: "A surveillance system detecting illegal waste disposal by humans and vehicles using YOLOv8 and custom tracking. Generates Excel reports with image evidence for city-wide enforcement.",
    image: "https://thumbs.dreamstime.com/b/view-busy-crowded-street-new-york-usa-early-evening-manhattan-city-all-traffic-jams-many-tourists-people-walking-55241984.jpg",
    technologies: ["Python", "OpenCV", "YOLOv8", "NumPy", "Pandas", "OpenPyXL"],
    github: "https://github.com/edwinjojie/Smart_city_project"
  },
  {
    title: "Vehicle Trash Dumping Detection & Alerting",
    description: "A vehicle-specific trash dumping detection system using YOLOv8, MiDaS depth estimation, and a Flask web interface. Provides CSV/Excel reports and video evidence for targeted enforcement.",
    image: pic2,
    technologies: ["Python", "OpenCV", "YOLOv8", "MiDaS", "Flask", "Pandas"],
    github: "https://github.com/edwinjojie/miniproject",
    live: "https://peaceful-chimera-2e159b.netlify.app"
  },
  {
    title: "Tail Assignment Problem in Flight Scheduling",
    description: "A sustainable flight scheduling solution using Reinforcement Learning and OR Tools, optimizing assignments for flights, aircraft, and crews with an environmental focus.",
    image: "https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Reinforcement Learning", "OR Tools"],
    github: "https://github.com/edwinjojie/tail_assignment",
    live: "https://snazzy-pony-dd40ba.netlify.app"
  },
  {
    title: "Text Recognition from Images",
    description: "A computer vision project recognizing text in images, including handwritten notes and number plates, using AI models to enable accurate text extraction.",
    image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "OpenCV", "TensorFlow", "PyTorch", "Tesseract"],
    github: "https://github.com/edwinjojie/CGIP_project"
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