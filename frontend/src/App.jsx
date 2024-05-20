import { useState } from 'react'
import BaseNavItem from './components/navigation/navbar/NavItems/BaseNavItem'
import NavBar from './components/navigation/navbar/NavBar'
import './App.css'

function App() {
  const dropdownItems = [
    {header: "Farm", subheader: "Farm Assets", link: "/Farm", logo: "src/assets/Farm.png"},
    {header: "IO", subheader: "Inputs & Outputs", link: "/IO", logo: "src/assets/IO.png"},
    {header: "Market", subheader: "Traded Assets", link: "/Market", logo: "src/assets/Market.png"},
    {header: "Currencies", subheader: "All Assets", link: "/Currencies", logo: "src/assets/Currencies.png"}
  ]
  return (
    <div>
    <NavBar logo="src/assets/logo.png">
      <BaseNavItem text="Menu" link="/menu" dropdown={true} dropdownItems={dropdownItems}/>
      <BaseNavItem text="About" link="/about" dropdown={false} />
    </NavBar>
    </div>)
}

export default App
