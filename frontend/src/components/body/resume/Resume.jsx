import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <div className="resume-card">
                <div className="resume-header">
                    <h1>Brady Mitchelmore</h1>
                    <p>(709) 769-1106 | <a href="mailto:bcmitchelmor@mun.ca">bcmitchelmor@mun.ca</a> | Portugal Cove St. Phillip’s</p>
                    <p>
                        <a href="https://www.linkedin.com/in/brady-mitchelmore-1b3b11195/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a> | 
                        <a href="https://github.com/Bmitch44" target="_blank" rel="noopener noreferrer"> GitHub Profile</a>
                    </p>
                </div>
            </div>

            <div className="resume-card">
                <div className="resume-section">
                    <h2>Education</h2>
                    <p><strong>Memorial University of Newfoundland</strong></p>
                    <p>Bachelor of Science, Computer Science (Smart Systems)</p>
                    <p>Expected Graduation Date: April 2026</p>
                    <p>Average: 79%</p>
                </div>
            </div>

            <div className="resume-card">
                <div className="resume-section">
                    <h2>Skills</h2>
                    <ul>
                        <li><strong>Programming Languages:</strong> Python, TypeScript, JavaScript, Java, C, SQL</li>
                        <li><strong>Markup Languages:</strong> HTML, Markdown, CSS, Latex</li>
                        <li><strong>Frameworks and Libraries:</strong> Flask, Requests, FastApi, Pandas, NumPy, Bottle, Bootstrap, React, TensorFlow</li>
                        <li><strong>Developer Tools:</strong> Visual Studio Code, Git/GitHub, Azure Cloud, AWS Cloud</li>
                    </ul>
                </div>
            </div>

            <div className="resume-card">
                <div className="resume-section">
                    <h2>Experience</h2>

                    <div className="job">
                        <h3>Full-Stack Developer</h3>
                        <p><em>Play On! Canada</em> | Remote, Canada</p>
                        <p>May 2024 – August 2024</p>
                        <ul>
                            <li>Developed event scheduling and score-keeping system, used by staff to manage over 1,000 players across multiple tournaments.</li>
                            <li>Improved site performance by moving data processing to the client side, enhancing responsiveness and user experience.</li>
                            <li>Built admin dashboard for tracking registrations, user types, and generating real-time reports for event management.</li>
                            <li>Adapted quickly to TypeScript, contributing to both React and Node.js codebases, while integrating legacy workflows.</li>
                        </ul>
                    </div>

                    <div className="job">
                        <h3>Automation Engineer</h3>
                        <p><em>Infomatix</em> | St. John’s, NL, Canada</p>
                        <p>November 2023 – May 2024</p>
                        <ul>
                            <li>Worked with small businesses to deliver tailored consulting services.</li>
                            <li>Implemented Power Platform to automate tasks, reducing manual data entry by 90%.</li>
                            <li>Developed HTML summaries and auto-populated templates, saving time in report generation.</li>
                            <li>Engineered custom connectors for seamless API integration, improving data exchange efficiency.</li>
                        </ul>
                    </div>

                    <div className="job">
                        <h3>Window Cleaner</h3>
                        <p><em>Student Works</em> | St. John’s, NL, Canada</p>
                        <p>May 2023 – August 2023</p>
                        <ul>
                            <li>Cleaned multiple houses a day, both inside and outside.</li>
                            <li>Respected customer’s property and assisted them when needed.</li>
                            <li>Marketed door-to-door, to find new potential clients.</li>
                        </ul>
                    </div>

                    <div className="job">
                        <h3>Order Fulfillment Associate</h3>
                        <p><em>Sportchek</em> | St. John’s, NL, Canada</p>
                        <p>August 2022 – May 2023</p>
                        <ul>
                            <li>Retrieved and packaged online orders from the store.</li>
                            <li>Used inventory management software to track items.</li>
                            <li>Greeted and assisted customers with their needs.</li>
                        </ul>
                    </div>

                    <div className="job">
                        <h3>Junior Coding Student</h3>
                        <p><em>Verafin</em> | St. John’s, NL, Canada</p>
                        <p>July 2021</p>
                        <ul>
                            <li>Participated in Financial Crime and Cybersecurity Training.</li>
                            <li>Completed Keyin College Python Bootcamp.</li>
                            <li>Navigated a Virtual Maze with a provided Robot Control Package.</li>
                            <li>Developed a Command Line Blackjack Game.</li>
                        </ul>
                    </div>

                    <div className="job">
                        <h3>Warehouse Associate</h3>
                        <p><em>Canadian Tire</em> | St. John’s, NL, Canada</p>
                        <p>June 2020 - June 2021</p>
                        <ul>
                            <li>Organized stock in the warehouse.</li>
                            <li>Greeted and Assisted customers with their needs.</li>
                            <li>Used inventory management software to keep track of stock.</li>
                        </ul>
                    </div>
                    
                    <div className="job">
                        <h3>Hockey Camp Assistant</h3>
                        <p><em>Blizzard Hockey</em> | St. John’s, NL, Canada</p>
                        <p>July 2018</p>
                        <ul>
                            <li>Assisted instructors in teaching the kids new skills</li>
                            <li>Supervised kids and assisted them with any of their needs </li>
                            <li>Demonstrated drills and off ice exercises</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
