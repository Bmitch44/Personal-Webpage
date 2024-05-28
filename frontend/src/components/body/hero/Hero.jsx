import React from 'react';
import './Hero.css';

const Hero = () => {
  const projects = [
    {
        title: 'Personal Webpage',
        description: 'This is my personal website. It was built using React and Python, showcasing my skills and projects.',
        tools: 'React, Python, Sqlite3, Javascript, HTML, CSS',
        link: '/'
    },
    {
        title: 'Jarvis',
        description: 'This is a Apple Shortcut that I built to automate my daily tasks. It was built using Apple Shortcuts.',
        tools: 'Apple Shortcuts, Groq API, Notion API',
        link: '/projects'
    },
    {
        title: 'Reviews App Team Project',
        description: 'This is a team project for a reviews app. It was built using Python and Bottle, showcasing our teamwork and skills.',
        tools: 'Python, Bottle, Sqlite3, HTML, CSS',
        link: '/projects'
    },
    {
        title: 'Textract Demo',
        description: 'An unstructured document analysis tool that I built using AWS Textract and OpenAI GPT-3.',
        tools: 'Python, AWS Textract, OpenAI API, Flask, HTML, CSS',
        link: '/projects'
    },
  ];

  const blogs = [
    {
        title: 'Coming Soon...',
        description: 'This blog post is coming soon. Stay tuned for more updates.',
        link: '#'
    }
  ];

  const skills = [
    { name: 'Python', logo: '/src/assets/python.png' },
    { name: 'JavaScript', logo: '/src/assets/javascript.png' },
    { name: 'React', logo: '/src/assets/react.png' },
    { name: 'Java', logo: '/src/assets/java.png' },
    { name: 'C', logo: '/src/assets/c.png' },
    { name: 'SQL', logo: '/src/assets/sql.png' },
    { name: 'HTML', logo: '/src/assets/html.png' },
    { name: 'CSS', logo: '/src/assets/css.png' },
    { name: 'LaTeX', logo: '/src/assets/latex.png' },
    // Add more skills and logos here
  ];

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Brady Mitchelmore</h1>
          <p>Welcome to my personal website! I'm a dedicated Computer Science student with a keen interest in smart systems and data analysis, constantly exploring innovative solutions and pushing the boundaries of technology.</p>
        </div>
        <div className="hero-image">
          <img src='src/assets/personal.jpeg' alt="Brady Mitchelmore" />
        </div>
      </div>
      <div className="skills-container">
        <h2>Languages</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
            </div>
          ))}
        </div>
    </div>
      <div className="projects" id="projects">
        <div className="project-card">
            <h1>Featured Projects</h1>
            {projects.map((project, index) => (
            <a href={project.link} className="project-card-content" key={index}>
                <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className='tools'>
                        <p><strong>Tools:</strong></p>
                        <p><i>{project.tools}</i></p>
                    </div>
                </div>
            </a>
            ))}
        </div>
        <div className="project-card">
            <h1>Recent Blogs</h1>
            {blogs.map((blog, index) => (
            <div className="project-card-content" key={index}>
                <div className="project-details">
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
