import React from 'react'
import Resume from '../Components/Resume';
import Skills from '../Components/Skills';
import Livecode from '../Components/Livecode';
import Github from '../Components/Github';
import About from '../Components/About';
import ContactUs from '../Components/ContactUs';
import Projects from '../Components/Projects';
import Navbar from '../Components/Navbar';

const Homepage = () => {

    return (
        <>
            <Navbar />
            <About />

            <Skills />
            <hr />
            <Resume />

            <hr />
            <Projects />
            <hr />
            <Github />
            <hr /> 
             <Livecode/>
            <hr />
            <ContactUs />
        </>
    )
}

export default Homepage