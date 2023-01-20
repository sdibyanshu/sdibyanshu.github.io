import React from 'react'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import Github from '../Components/Github'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Resume from '../Components/Resume'
import Skills from '../Components/Skills'
import './Homepage.css'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <About />
      
            <Skills/>
            <hr />
            <Resume/>
            
            <hr />
            <Projects/>
            <hr />
            <Github/>
            <hr />
            <ContactUs/>
        </>
    )
}

export default Homepage