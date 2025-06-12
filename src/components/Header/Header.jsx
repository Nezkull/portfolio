import React from 'react'
import './Header.css'
import data from '../../assets/Data/text.json';

const Header = () => {
  //debugger
  return (
    <div id='header' className="header">
      <div id="img_container">
        <img id="profile_pic" src={data.header.profile_pic} alt="profile_pic" />
      </div>
      <h1>Nick Marano</h1>
      <p>{data.header.about_me}</p>
      <div className="header-action">
        <div className="header-resume">
          <a href={data.header.resume_file} download="nick_marano_resume.pdf"> Download My Resume Here </a>
        </div>

      </div>
    </div>
  )
}

export default Header
