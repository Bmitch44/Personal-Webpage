import { useState } from 'react'
import BaseNavItem from './components/navigation/navbar/NavItems/BaseNavItem'
import NavBar from './components/navigation/navbar/NavBar'
import './App.css'

function App() {
  const dropdownItems = [
    {header: "Resume", subheader: "My Resume", link: "/resume", logo: "src/assets/Resume.png"},
    {header: "Projects", subheader: "Personal Projects", link: "/projects", logo: "src/assets/Project.png"},
    {header: "Blog", subheader: "My Blog", link: "/blog", logo: "src/assets/Blog.png"}
  ]
  return (
    <div>
    <NavBar logo="src/assets/Brady_Mitchelmore.png">
      <BaseNavItem text="Menu" link="/menu" dropdown={true} dropdownItems={dropdownItems}/>
      <BaseNavItem text="About Me" link="/about" dropdown={false} />
    </NavBar>
    </div>)
}

export default App
