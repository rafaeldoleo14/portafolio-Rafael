
import React from 'react'
import { AboutMe } from '../components/AboutMe'
import { Contact } from '../components/Contact'
import { Navbar } from '../components/Navbar'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export const MainPage = () => {
  return (
    <>
    

        <Navbar/>

        <AboutMe/>
    
        <Skills/>

        <Projects/>

        <Contact/>

    </>
  )
}
