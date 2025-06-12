import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Experience from './components/Experience/Experience'
import Connections from './components/Connections/Connections'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <Experience/>
    <Projects/>
    <Connections/>
    </div>
  )
}

export default App
