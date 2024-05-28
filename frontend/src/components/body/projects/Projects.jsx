import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Webpage',
      description: 'This is my personal website. It was built using React and Python, showcasing my skills and projects.',
      details: 'Detailed information about the Personal Webpage project. Include the tech stack, features, and any other relevant information.',
      link: '#'
    },
    {
      title: 'Jarvis',
      description: 'This is an Apple Shortcut that I built to automate my daily tasks. It was built using Apple Shortcuts.',
      details: 'Detailed information about the Jarvis project. Include the tech stack, features, and any other relevant information.',
      link: '#'
    },
    {
      title: 'Reviews App Team Project',
      description: 'This is a team project for a reviews app. It was built using Python and Bottle, showcasing our teamwork and skills.',
      details: 'Detailed information about the Reviews App Team Project. Include the tech stack, features, and any other relevant information.',
      link: '#'
    },
    // Add more projects here
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card-large" key={index}>
            <div className="project-details-large">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.details}</p>
              <a href={project.link} className="project-link-large">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
