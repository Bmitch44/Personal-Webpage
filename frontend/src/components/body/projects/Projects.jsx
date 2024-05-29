import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from '../projectModal/ProjectModal';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      "title": "Personal Webpage",
      "description": "This is my personal website. It was built using React and Python, showcasing my skills and projects.",
      "details": "The main features are a homepage, resume page, projects page, blog, and about page. The main challenge was creating popup modals to display extended information on a project or blog. I used Python, JavaScript, React, FastAPI, SQLite, HTML, and CSS. I first designed the layout in Figma, then used the CSS from Figma in my code.",
      "tools": "React, Python, SQLite, JavaScript, HTML, CSS, FastAPI",
      "link": "#",
      "expanded": "In developing my personal webpage, I focused on creating a seamless user experience across multiple sections: the homepage, resume, projects, blog, and about page. The most significant challenge was implementing popup modals to display detailed information for projects and blog posts. This required a deep understanding of React's state management and component lifecycle. I utilized Python for backend logic with FastAPI, and SQLite for data storage, ensuring efficient data retrieval. The frontend was crafted using React and styled based on designs made in Figma, which allowed for a visually appealing and responsive design.",
      "video": null
    },
    {
      "title": "Jarvis",
      "description": "This is an Apple Shortcut that I built to automate my daily tasks. It was built using Apple Shortcuts.",
      "details": "Jarvis automates the creation of quick notes in Notion by asking for the title, type, and description, then passing those inputs to Groq API for refinement. You can also have conversations with Jarvis, enabled by a shortcut that triggers other shortcuts based on keywords.",
      "tools": "Apple Shortcuts, Groq API, Notion API",
      "link": "#",
      "expanded": "Jarvis is an advanced automation tool created using Apple Shortcuts. It automates note-taking in Notion by leveraging the Groq API to refine user inputs. The development process involved setting up Siri to capture user inputs, sending these inputs to Groq for refinement, and finally creating notes in Notion using the Notion API. A significant challenge was configuring a single shortcut to trigger multiple shortcuts based on detected keywords. This was achieved through the use of regex and conditional statements, which required meticulous testing to ensure reliability. The project showcases my ability to integrate multiple APIs and handle complex logic flows within Apple Shortcuts.",
      "video": null
    },
    {
      "title": "Reviews App Team Project",
      "description": "This is a team project for a reviews app. It was built using Python and Bottle, showcasing our teamwork and skills.",
      "details": "This app functions like a social media platform where users can log in, create posts (topics), and review those topics. Each topic could represent a project sprint, allowing users to rate and review. Data is persistently stored using SQLite.",
      "tools": "Python, Bottle, SQLite, HTML, CSS",
      "link": "#",
      "expanded": "The Reviews App was a collaborative project aimed at creating a social platform for reviewing project sprints. I led the backend development, implementing ORM and SQLite for data management. The frontend was developed using HTML and CSS, ensuring a user-friendly interface. A major challenge was managing user sessions, which was resolved by creating a session table and utilizing cookies to handle active sessions. When a team member dropped out, I also took on the frontend tasks, demonstrating adaptability and leadership. This project honed my skills in both backend and frontend development, as well as my ability to manage and contribute to a team-based project.",
      "video": null
    },
    {
      "title": "Textract Demo",
      "description": "An unstructured document analysis tool that I built using AWS Textract and OpenAI GPT-3.",
      "details": "This project solves the problem of digitizing unstructured data such as scanned PDFs. By the end, I could input a PDF file and chat with it using ChatGPT from the OpenAI API.",
      "tools": "Python, AWS Textract, OpenAI API, Flask, HTML, CSS",
      "link": "#",
      "expanded": "The Textract Demo is a sophisticated tool designed to digitize and analyze unstructured data from scanned PDFs. The workflow involves preprocessing documents, extracting text and metadata using AWS Textract, and leveraging OpenAI's GPT-3 to enable interactive conversations with the digitized content. One of the main challenges was ensuring consistent extraction results from Textract, which was mitigated by thorough preprocessing of documents. The backend was developed using Flask, with data stored in SQLite and a simple HTML/CSS frontend for interaction. This project highlights my ability to integrate advanced machine learning services and build comprehensive solutions for real-world problems.",
      "video": "https://github.com/yourusername/textract-demo"
    },
    {
      "title": "CropBytes GUI",
      "description": "A GUI for the CropBytes project that I built using Python and tkinter.",
      "details": "The GUI provides an interface for the CropBytes project, built using Python and tkinter. It simplifies interactions with the underlying functionality of the CropBytes project.",
      "tools": "Python, tkinter, SQLite, HTML, CSS",
      "link": "#",
      "expanded": "The CropBytes GUI project involved creating a graphical user interface using Python's tkinter library. This interface was designed to simplify user interactions with the underlying functionalities of the CropBytes project. The development process included setting up the GUI components, linking them with backend logic, and ensuring smooth data handling using SQLite. One of the significant challenges was designing an intuitive interface with tkinter, which required careful planning and iteration. The project demonstrates my proficiency in GUI development and my ability to enhance user experience through thoughtful design and implementation.",
      "video": null
    }
];
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <h2 className='project-title'>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card-large" key={index} onClick={() => handleProjectClick(project)}>
            <div className="project-details-large">
              <div className="project-title-container">
                <h3>{project.title}</h3>
                <div className='expand'>
                  <span>Expand</span>
                  <span className="arrow">&#8594;</span> {/* Right arrow character */}
                </div>
              </div>
              <p className='description'>{project.description}</p>
              <p className='description'>{project.details}</p>
              <div className='tools'>
                  <p><strong>Tools:</strong></p>
                  <p><i>{project.tools}</i></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal show={showModal} onClose={closeModal} project={selectedProject} />
    </div>
  );
}

export default Projects;
