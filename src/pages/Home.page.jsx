import React from 'react'
import AboutSection from '../components/AboutSection'
import Contact from '../components/Contact'
import ProjectCard from '../components/ProjectCard'
import Projects from '../components/Projects'
import SideLinks from '../components/SideLinks'
import Skills from '../components/Skills'
import Topbar from '../components/Topbar'
import HomeLayout from '../layouts/Home.layouts'
function HomePage() {


  return (
    <div>
      <Topbar />
      <SideLinks />
      <AboutSection />
      <Skills />
      <Projects />
      <ProjectCard />
      <Contact />
    </div>
  )
}

export default HomeLayout(HomePage)