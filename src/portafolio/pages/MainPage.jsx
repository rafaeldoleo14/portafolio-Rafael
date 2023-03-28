
import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Navbar, AboutMe, Skills, Projects, Contact  } from '../components/index'

export const MainPage = () => {
  return (
    <>
    
        <Navbar/>

        <AboutMe/>
    
        <Skills/>

        <Projects/>

        <Contact/>

        <Footer/>

    </>
  )
}
