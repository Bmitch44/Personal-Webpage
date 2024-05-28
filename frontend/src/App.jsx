import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BaseNavItem from './components/navigation/navbar/NavItems/BaseNavItem';
import NavBar from './components/navigation/navbar/NavBar';
import Hero from './components/body/hero/Hero';
import Resume from './components/body/resume/Resume';
import Projects from './components/body/projects/Projects';
import './App.css';

function App() {
  const dropdownItems = [
    { header: "Resume", subheader: "My Resume", link: "/resume", logo: "src/assets/Resume.png" },
    { header: "Projects", subheader: "Personal Projects", link: "/projects", logo: "src/assets/Project.png" },
    { header: "Blog", subheader: "My Blog", link: "/blog", logo: "src/assets/Blog.png" }
  ];

  return (
    <Router>
      <div className='website'>
        <NavBar logo="src/assets/Logo.png">
          {/* <BaseNavItem text="Menu" link="/menu" dropdown={true} dropdownItems={dropdownItems}/> */}
          <BaseNavItem text="Resume" link="/resume" dropdown={false} />
          <BaseNavItem text="Projects" link="/projects" dropdown={false} />
          <BaseNavItem text="Blog" link="/blog" dropdown={false} />
          <BaseNavItem text="About" link="/about" dropdown={false} bold={true} />
        </NavBar>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

