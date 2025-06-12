import React from 'react'
import './Navbar.css'

//maybe this can be dynamically created based on the other components
const Navbar = () => {
  return (
    <div id="home" className='navbar'>
      <div className="nav-menu">
        <a href="#home">Home</a>
        <a href="#header">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#connections">Contact</a>
      </div>
    </div>
  )
}

export default Navbar
