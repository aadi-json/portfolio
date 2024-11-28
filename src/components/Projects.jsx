import React from "react";
import Recipe from "../assets/recipe.jpg";
import Ecommerce from "../assets/e-commerce.jpg";
import Portfolio from "../assets/portfolio.jpg";

const projects = [
  {
    id: 1,
    name: "Recipe App",
    technologies: "Front-End",
    image: Recipe,
    github: "https://github.com/aadi-json/learning-js/tree/main/recipi%20app",
  },
  {
    id: 2,
    name: "E-Commerce",
    technologies: "React Tailwind & Fiebase",
    image: Ecommerce,
    github: "https://github.com/aadi-json/e-commerce",
  },
  {
    id: 3,
    name: "Portfolio",
    technologies: "React & Tailwind",
    image: Portfolio,
    github: "https://github.com/YouafKhan1",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-between items center">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
              from-green-400 to-yellow-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
              from-purple-400 to-red-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
