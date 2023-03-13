import React, { useContext } from 'react'
import AboutSection from '../components/AboutSection'
import Contact from '../components/Contact'
import ProjectCard from '../components/ProjectCard'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills'
import Topbar from '../components/Topbar'
import HomeLayout from '../layouts/Home.layouts'
import { UserContext } from '../UserContext'
function HomePage() {
  const {mode} = useContext(UserContext);

  return (
    <div>
        <Topbar />
        <Sidebar />
        <AboutSection />
        <Skills/>
        <Projects />
        <ProjectCard />
        <Contact />
    </div>
  )
}

export default HomeLayout(HomePage)