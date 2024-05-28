import React from 'react';
import './Hero.css';

const Hero = () => {
  const projects = [
    {
        title: 'Personal Webpage',
        description: 'This is my personal website. It was built using React and Python, showcasing my skills and projects.',
        link: '#'
    },
    {
        title: 'Jarvis',
        description: 'This is a Apple Shortcut that I built to automate my daily tasks. It was built using Apple Shortcuts.',
        link: '#'
    },
    {
        title: 'Reviews App Team Project',
        description: 'This is a team project for a reviews app. It was built using Python and Bottle, showcasing our teamwork and skills.',
        link: '#'
    },
    {
        title: 'Textract Demo',
        description: 'An unstructured document analysis tool that I built using AWS Textract and OpenAI GPT-3.',
        link: '#'
    },
  ];

  const blogs = [
    {
        title: 'Coming Soon',
        description: 'This blog post is coming soon. Stay tuned for more updates.',
        link: '#'
    }
  ];

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Brady Mitchelmore</h1>
          <p>Welcome to my personal website. I'm a Computer Science student with a passion for smart systems and data analysis.</p>
        </div>
        <div className="hero-image">
          <img src='src/assets/personal.jpeg' alt="Brady Mitchelmore" />
        </div>
      </div>
      <div className="projects" id="projects">
        <div className="project-card">
            <h1>Featured Projects</h1>
            {projects.map((project, index) => (
            <div className="project-card-content" key={index}>
                <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link">Learn More</a>
                </div>
            </div>
            ))}
        </div>
        <div className="project-card">
            <h1>Recent Blogs</h1>
            {blogs.map((blog, index) => (
            <div className="project-card-content" key={index}>
                <div className="project-details">
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <a href={blog.link} className="project-link">Read More</a>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
