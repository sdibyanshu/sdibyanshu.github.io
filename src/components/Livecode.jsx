import React, { useEffect } from 'react'
import styled from 'styled-components'
import code from '../Resources/Images/LanguageImages/code.png'
import project2 from '../Resources/Images/LanguageImages/project2.png'
import problemsolving from '../Resources/Images/LanguageImages/problemsolving.png'
import softsession from '../Resources/Images/LanguageImages/softsession.png'
import Aos from "aos";
import "aos/dist/aos.css";

const Livecode = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })

    const codingskills = [
        {
            img: code,
            title: 'Quality coding solution'
        },
        {
            img: project2,
            title: ' 10+ Company Projects'
        },
        {
            img: problemsolving,
            title: '50+ Problems solved'
        },
        {
            img: softsession,
            title: '30+ Meeting sessions'
        }
    ]


    return (
        <Container id='skills' >
            {/* <h1>About</h1> */}

            <div className='codingskillsContainer' data-aos='fade-right'>
                {codingskills.map((ele, index) => (
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

     .codingskillsContainer{
        width:85%;
        margin:auto;
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,max-content));
        justify-content:center;
        padding:30px;
        gap:20px;
        // border:1px solid red;
    }
    .codingskillsContainer>div{
        display:flex;
        align-items:center;
        flex-direction:column;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
        padding: 20px 5px 10px 5px;
        border-radius: 10px;
        background-color:white;
        color:black;
        border:8px solid grey;
        font-weight:bold;
        font-size:20px;
        
     }
     .codingskillsContainer>div:hover{
        -webkit-transform: translateY(-5px);
        transform: translateY(-15px);
        -webkit-transition: all 0.5s;
        transition: all 0.8s;
     }
   

    
   
`

export default Livecode;