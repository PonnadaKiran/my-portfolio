import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "StudyNotion",
      description: "A learning platform built using React.js and MongoDB.",
      image: "https://via.placeholder.com/300", // Placeholder for now
      link: "https://github.com/PonnadaKiran/studynotion"
    },
    {
      name: "MS Teams Clone",
      description: "Real-time communication platform using WebRTC and Socket.io.",
      image: "https://via.placeholder.com/300",
      link: "https://github.com/PonnadaKiran/msteams-clone"
    },
    {
      name: "Random GIF",
      description: "Fetch random GIFs using GIPHY API.",
      image: "https://via.placeholder.com/300",
      link: "https://github.com/PonnadaKiran/random-gif"
    },
    {
      name: "Housing Market Value Estimation",
      description: "Developed a machine learning model to predict housing prices.",
      image: "https://via.placeholder.com/300",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-[#4285F4] mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {projects.map((project) => (
          <div key={project.name} className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition duration-300">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-[#DB4437] mb-3">{project.name}</h3>
            <p className="text-lg text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#4285F4] hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
