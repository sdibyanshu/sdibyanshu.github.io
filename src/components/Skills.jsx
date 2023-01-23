import React, { useEffect } from 'react'
import styled from 'styled-components'
import html from '../Resources/Images/LanguageImages/html5.png'
import css from '../Resources/Images/LanguageImages/css3.png'
import js from '../Resources/Images/LanguageImages/js.png'
import git from '../Resources/Images/LanguageImages/git.png'
import mongodb from '../Resources/Images/LanguageImages/mongodb.png'
import nodejs from '../Resources/Images/LanguageImages/nodejs.png'
import react from '../Resources/Images/LanguageImages/react.png'
import express from '../Resources/Images/LanguageImages/express.png'
import reactredux from '../Resources/Images/LanguageImages/redux.png'
import teamwork from '../Resources/Images/LanguageImages/teamwork.png'
import adopt from '../Resources/Images/LanguageImages/adopt.png'
import leader2 from '../Resources/Images/LanguageImages/leader2.png'
import commun from '../Resources/Images/LanguageImages/commun.png'
import timemanage from '../Resources/Images/LanguageImages/timemanage.png'
import ethick from '../Resources/Images/LanguageImages/ethick.jpg'
import code from '../Resources/Images/LanguageImages/code.png'
import project2 from '../Resources/Images/LanguageImages/project2.png'
import problemsolving from '../Resources/Images/LanguageImages/problemsolving.png'

import GroupWorkIcon from '@mui/icons-material/GroupWork';
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
    useEffect(() => {
        Aos.init({duration:2000})
       })
    const skills = [
        {
            img:html,
            title:'HTML'
        },
        {
            img:css,
            title:'CSS'
        },
        {
            img:js,
            title:'Javascript'
        },
        {
            img:nodejs,
            title:'NodeJS'
        },
        {
            img:react,
            title:'ReactJS'
        },
        {
            img:express,
            title:'Express js'
        },
        {
            img:mongodb,
            title:'MongoDB'
        },
        
        {
            img:reactredux,
            title:'Redux'
        },
        {
            img:git,
            title:'Git/Github'
        },
        
    ];
    const softskills = [
        {
            img:teamwork,
            title:'Team Work'
        },
        {
            img:adopt,
            title:'Adaptibility'
        },
        {
            img:leader2,
            title:'Leadership'
        },
        {
            img:commun,
            title:'Communication'
        },
        {
            img:timemanage,
            title:'Time management'
        },
        {
            img:ethick,
            title:'Work ethics'
        },
       
    ]
  
    
  

  return (
    <Container id='skills' >
        <h1>Skills</h1>
        <div className='skillsContainer'data-aos='fade-right'>
            {skills.map((ele,index)=>(
                <div key={index}>
                    <img src={ele.img} alt={ele.title} width='70px' height='70px'/>
                    <p>{ele.title}</p>
                </div>
            ))}
        </div>
        
        <h1>Soft Skills</h1>
        <div className='softskillsContainer'data-aos='fade-right'>
            {softskills.map((ele,index)=>(
                <div key={index}>
                    <img src={ele.img} alt={ele.title} width='70px' height='70px' />
                    <p>{ele.title}</p>
                </div>
            ))}
        </div>

        
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    margin:auto;
    margin-top:40px;
    
    h1{
        color:white;
        text-transform:uppercase;
       
    }

    .skillsContainer{
        width:85%;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,max-content));
        justify-content:center;
        padding:30px;
        gap:20px;
    }
    .skillsContainer>div{
        display:flex;
        align-items:center;
        flex-direction:column;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
        padding: 20px 0px 10px 0px;
        border-radius: 10px;
        background-color:black;
        color:white;
        
     }
     .skillsContainer>div:hover{
        -webkit-transform: translateY(-5px);
        transform: translateY(-15px);
        -webkit-transition: all 0.5s;
        transition: all 0.8s;
     }


    .softskillsContainer{
        width:85%;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,max-content));
        justify-content:center;
        padding:30px;
        gap:20px;
    }
    .softskillsContainer>div{
        display:flex;
        align-items:center;
        flex-direction:column;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
        padding: 20px 0px 10px 0px;
        border-radius: 10px;
        background-color:white;
        color:black;
        // border:2px solid black;
        
     }
     .softskillsContainer>div:hover{
        -webkit-transform: translateY(-5px);
        transform: translateY(-15px);
        -webkit-transition: all 0.5s;
        transition: all 0.8s;
     }


    
   
`

export default Skills