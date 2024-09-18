import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from '../projectModal/ProjectModal';

const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            "title": "Short Form Content Generator",
            "description": "A full-stack application that automates the creation of short-form video content using AI and video processing technologies.",
            "details": "Built with Python (FastAPI) backend and React TypeScript frontend. Utilizes yt-dlp for YouTube video downloads, OpenAI for text-to-speech, and MoviePy for video editing.",
            "tools": "Python, FastAPI, React, TypeScript, yt-dlp, OpenAI API, MoviePy",
            "link": "#",
            "expanded": "The Short Form Content Generator is an innovative full-stack project that automates the creation of engaging short-form video content. The backend, built with Python and FastAPI, handles video processing and AI integration. It uses yt-dlp to download YouTube videos, leverages the OpenAI API for high-quality text-to-speech conversion, and employs MoviePy for sophisticated video editing and composition. The frontend, developed with React and TypeScript, provides a user-friendly interface for content creation and management. This project showcases my ability to integrate various technologies and APIs to create a powerful, end-to-end solution for rapid content generation, ideal for social media marketers and content creators.",
            "video": "https://youtu.be/ok4H1P70TJ8"
        },
        {
            "title": "Personal Webpage",
            "description": "This is my personal website. It was built using React and Python, showcasing my skills and projects.",
            "details": "The main features are a homepage, resume page, projects page, blog, and about page. The main challenge was creating popup modals to display extended information on a project or blog. I used Python, JavaScript, React, FastAPI, SQLite, HTML, and CSS. I first designed the layout in Figma, then used the CSS from Figma in my code.",
            "tools": "React, Python, JavaScript, HTML, CSS, FastAPI, SQLModel",
            "link": "#",
            "expanded": "In developing my personal webpage, I focused on creating a seamless user experience across multiple sections: the homepage, resume, projects, blog, and about page. The most significant challenge was implementing popup modals to display detailed information for projects and blog posts. This required a deep understanding of React's state management and component lifecycle. I utilized Python for backend logic with FastAPI, and SQLModel for data storage, ensuring efficient data retrieval. The frontend was crafted using React and styled based on designs made in Figma, which allowed for a visually appealing and responsive design.",
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
            "title": "Stock Price Prediction Model",
            "description": "This was a project made using IPython and Yahoo Finance API to predict the price of a stock, given its historical data.",
            "details": "The model uses the Yahoo Finance API to get the historical data of a stock, then uses that data to train a LSTM model. The model is then used to predict the price of the stock for the next 5 days",
            "tools": "IPython, Pandas, Tensorflow, Yahoo Finance API",
            "link": "#",
            "expanded": "This project involed many steps. I first used the Yahoo Finance API to get the historical data of a stock. I then processed the data and trained a LSTM model. The model was then used to predict the price of the stock for the next 5 days. Once the model was trained, I used matplotlib to visualize the results.",
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
            "video": "https://youtu.be/He9KpaIJ6_s"
        },
        {
            "title": "CropBytes GUI",
            "description": "A comprehensive GUI application for the CropBytes crypto farming game, built using Python and tkinter.",
            "details": "This GUI application was developed to interact with the CropBytes API, enabling users to track their assets, production, and farm profitability. Additionally, it allows users to make trades directly within the GUI on the CropBytes in-game market.",
            "tools": "Python, tkinter, Postman, CropBytes API, SQLite, HTML, CSS",
            "link": "#",
            "expanded": "The CropBytes GUI project involved reverse engineering the CropBytes API using Postman to understand the various endpoints and their functionalities. Once I had a comprehensive understanding of the API, I developed a GUI application using Python and tkinter. This application allows users to track their assets, production levels, and overall farm profitability in real-time. Furthermore, it includes features for making trades directly within the GUI, interacting seamlessly with the CropBytes in-game market. The application is designed to enhance the user experience by providing a centralized platform to manage all aspects of the CropBytes farming game. One of the main challenges was ensuring secure and efficient API calls, which I achieved through careful management of API keys and request handling.",
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
