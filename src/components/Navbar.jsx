import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Link, animateScroll } from 'react-scroll';
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi";



const Navbar = () => {

    const [colorChange, setColorchange] = useState(false);
    const [head, setHead] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 80 || head) {
            setColorchange(true);

        }
        else {
            setColorchange(false);
        }

    };
    window.addEventListener('scroll', changeNavbarColor);


    useEffect(() => {
        if (head || colorChange) {
            setColorchange(true)
        } else {
            setColorchange(false)
        }
    }, [head, colorChange])
    return (
        <Container>
            <header className="header" style={{ backgroundColor: `${colorChange ? 'black' : 'transparent'}` }}>
                <a href="/" className="logo">Dibyanshu Srivastav</a>

                <input className="menu-btn" type="checkbox" id="menu-btn" />

                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">

                    <li><Link activeClass="active" to="/" onClick={() => animateScroll.scrollToTop()} spy={true} smooth={true}> Home </Link></li>


                    <li><Link activeClass="active" to="about" onClick={() => setHead(true)} spy={true} smooth={true}> About </Link></li>

                    <li><Link activeClass="active" to="skills" onClick={() => setHead(true)} spy={true} smooth={true}> Skills</Link></li>

                    <li><Link activeClass="active" to="resume-sectionh" onClick={() => setHead(true)} spy={true} smooth={true}>Resume</Link></li>

                    <li><Link activeClass="active" to="projects" onClick={() => setHead(true)} spy={true} smooth={true}>Projects</Link></li>

                    <li><Link activeClass="active" to="contact" onClick={() => setHead(true)} spy={true} smooth={true}>Contact</Link></li>
                </ul>
            </header>
        </Container>
    )

}

const Container = styled.div`
    width:100%;
    height:70px;
    background-color:black;
    // border:1px solid red;
    

    a {
        color: #000;
    }
    
    /* header */
    
    .header {
        position:fixed;
        width:100%;
        z-index: 10;
        padding-top:10px;
        background-color:black;
        // border:2px solid blue;
        
    }
    
    .header ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
        padding-right:50px;
    }
    
    .header li a {
        display: block;
        padding: 20px 25px;
        text-decoration: none;
    }
    
    // Header ke logo ke liye "Dibyanshu srivastav"
    .header .logo {
       
        display: flex;
        float: left;
        font-size: 24px;
        padding: 15px 28px;
        text-decoration: none;
        color:white;
        // border:1px solid red
    }
    
    /* menu */
    
    .header .menu {
        clear: both;
        max-height: 0;
        transition: max-height .2s ease-out;
        text-transform:uppercase;
        font-size:15px;
        font-weight:700;
        color:#343a40;
        // border:2px solid yellow;
    }
     
    // ---------------------navbar ke ander ke options ke liye like about ,skill
    li a{
        color:white;
    }
    li a:hover{
        color:yellow;
        cursor:pointer;
    }
    
    
    /*----------------------------------------menu icon */
    // --------------Navbar ke hamburger ke icon box ke liye
    .header .menu-icon {
       
        cursor: pointer;
        display: inline-block;
        float:right;
        padding: 27px 30px;
        position: relative;
        user-select: none;
        // border:2px solid red;
    }
    
    //-------------------- hamburger ke beech wali line ke liye
    .header .menu-icon .navicon {
        background: white;
        display: block;
        height: 2px;
        position: relative;
        transition: background .2s ease-out;
        width: 20px;
        // color:white;
        // border:2px solid yellow;
    }
    
    //------------------------------------------hamburger icon ke liye
    .header .menu-icon .navicon:before,
    .header .menu-icon .navicon:after {
        
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all .2s ease-out;
        width: 100%;
        background-color:white;
        
        
    }
    
    .header .menu-icon .navicon:before {
        top: 5px;
    }
    
    .header .menu-icon .navicon:after {
        top: -5px;
    }
    
    /* menu btn */
    
    .header .menu-btn {
        display: none;
        
    }
    
    //----------------------max height option wale big box ke liye
    .header .menu-btn:checked ~ .menu {
        width:100%;
        max-height: 340px;
        background-color:black;
        // border:2px solid pink;
      
       
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon {
        background: transparent;
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon:before {
        transform: rotate(-45deg);
    }
    
    .header .menu-btn:checked ~ .menu-icon .navicon:after {
        transform: rotate(45deg);
    }
    
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
        top: 0;
    }
    
    /* 48em = 768px */
    @media screen and (min-width: 340px) {
       
      }
    @media (min-width: 55em) {
        .header li {
            float: left;
          
        }
        
        .header li a {
            padding: 20px 30px;
            
        }

        .header .menu {
            clear: none;
            float: right;
            max-height: none;
        }

        .header .menu-icon {
            display: none;
        }
        
    }
`

export default Navbar