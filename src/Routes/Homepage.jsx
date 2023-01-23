import React from 'react'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import Github from '../Components/Github'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Resume from '../Components/Resume'
import Skills from '../Components/Skills'
import './Homepage.css'

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import { particlesOptions } from './Components/Particlesoptions';
import { particlesOptions } from '../Components/Particlesoptions';
import Livecode from '../Components/Livecode'

const Homepage = () => {

    const particlesInit = async (main) => {
        console.log(main);

        await loadFull(main);
    };
    return (
        <>
            {/* <Particles
                id="tsparticles"
                init={particlesInit}
                options={
                    particlesOptions
                }
            /> */}



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