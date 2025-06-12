import React from 'react'
import './Projects.css'
import data from '../../assets/Data/projects.json'
import { useState } from 'react'

//overall parent
const Projects = () => {
  return (
    <div id='projects' className="projects">
      <h3>Projects</h3>
      {data.projects.map(project => (
        <ProjectPanel key={project.name} project={project} />
      ))}
    </div>
  )
}

//each is an individual project
const ProjectPanel = ({ project }) => {
  const [showProjectInfo, setShowProjectInfo] = useState(false);

  const showInfo = (name) => {
    setShowProjectInfo(!showProjectInfo)
  }

  return (
    <div key={project.name} className="project-panel">
      <img onClick={showInfo} src={project.images[0]} alt="" />
      <p><b>{project.name}</b></p>
      { showProjectInfo ? <ProjectInfo project={project} /> : ""}
    </div>
  )
}

//contains the description and image carousel for each project
const ProjectInfo = ({ project }) => {
  return (
    <>
      <p>{project.description}</p>
    </>
  )
}

export default Projects
