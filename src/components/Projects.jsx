import React from 'react';
import styled from 'styled-components';
import outlookindia from '../Resources/Images/Project/outlookindia.png';
import Bluemart from '../Resources/Images/Project/Bluemart.png';
import shoppingparadise from '../Resources/Images/Project/shoppingparadise.png';
import wantflix from "../Resources/Images/Project/wantflix.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import StreamIcon from '@mui/icons-material/Stream';


const Projects = () => {

    const projects = [
        {
            id: 1,
            title: 'Shopping Paradise',
            img: shoppingparadise,
            desc: 'A team project was build in masai Unit-5 month November with four members. Shopping Paradise is an E-Commerce  web app . this project have functionality such as admin page for add and remove products .',
            worked: 'This is an team project. It was completed in 5 days',
            keyPoint2: '',
            keyPoint1: '',
            githubLink: 'https://github.com/heyabrar/ShoppingParadise',
            deployedLink: 'https://shopingparadise.vercel.app/',
            tags: ['HTML', 'CSS', 'Javascript', "React", "Redux", "Chakra UI",]
        },
        {
            id: 2,
            title: 'Wantflix ',
            img: wantflix,
            desc: "A team project was build in masai Unit-6 month December with four members. Wantflix streaming service provides and award-winning series, kids, compelling dramas, groundbreaking documentaries,  entertainment, comedies, and more",
            worked: 'A collaborative project, built in 5 days by a team of 4 developers.',
            keyPoint2: '',
            keyPoint1: '',
            githubLink: 'https://github.com/A-Hore/likely-laborer-9813',
            deployedLink: 'https://wantflix-shows.netlify.app/',
            tags: ['Mongo-DB', 'Express-Js','CSS', 'Javascript', 'React', 'Chakra-ui']
        },
        {
            id: 3,
            title: 'Outlookindia clone',
            img: outlookindia,
            desc: 'A individual project is clone of news serving website was created in @masai Unit-4 month October. it was created within 4 days with functionality such as Login, Signup and Navbar ',
            worked: 'This is an individual project completed in 5 days.',
            keyPoint2: 'This is our first project at Masai School.',
            keyPoint1: 'Group project',
            githubLink: 'https://github.com/sdibyanshu/disgusted-smell-1669',
            deployedLink: 'https://delightful-florentine-e68fea.netlify.app/',
            tags: ['HTML', 'CSS', 'Advance JS/ES6', 'Font-awesome']
        },
        {
            id: 4,
            title: 'India Mart/Blue Heaven Cosmetic Clone',
            img: Bluemart,
            desc: 'A collaborative project of an E-commerse website clone  was created in month of June in masai Unit-2 with group of 5 members and completed within 4 days .',
            worked: 'This is an individual project completed in 5 days.',
            keyPoint1: 'local json server used',
            keyPoint2: '',
            githubLink: 'https://github.com/Sangram150800/Unit-2_Indiamart_Project_Final',
            deployedLink: 'https://coruscating-salmiakki-76b680.netlify.app/',
            tags: ['HTML', 'CSS', 'Basic Javascript', 'Font-awesome']
        }
    ]

    return (
        <Container id='projects'>
            <h1>Projects</h1>
            <div className='projectsContainer' >
                {projects.map((ele, index) => (
                    <div key={index} className="box">
                        <div className='imgBox'>
                            <img src={ele.img} alt={ele.title} width='120%' height='100%' />
                        </div>
                        <div className='ContentBox'>
                            <h1>{ele.title}</h1>
                            <p>{ele.desc}</p>
                            <p style={{ fontWeight: 'bold' }}>{ele.worked}</p>
                            <div className='tagsBox'>
                                {ele.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className='linkSection'>
                                <a href={ele.githubLink} rel="noreferrer" target="_blank"><button><GitHubIcon />Github</button></a>
                                <a href={ele.deployedLink} rel="noreferrer" target="_blank"><button><StreamIcon />Live</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    )
}


const Container = styled.div`
    width:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    
    
    h1{
        color:white;
        text-transform:uppercase;
    }

    .projectsContainer{
        width:80%;
        margin:auto;
        display:flex;
        align-items:center;
        flex-direction:column;
        
    }

    .box{
        position:relative;
        width:100%;
        height:450px;
        display:flex;
        gap:10px;
        margin-bottom:80px;
        border: 10px solid lightgrey;
        border-radius: 6px;
        overflow:hidden;
        // border:2px solid black;
       
    }

    .imgBox{
        width:50%;
        overflow:hidden;
    }

    
    .imgBox>img{
        display: block;
        transition: transform .4s; 
        width:100%;
    }

    // .imgBox>img:hover{
    //     position:absolute;
    //     width:80%;
    //     transform: scale(1.3);
    //     transform-origin: 0% 0%;
    // }

    
    .ContentBox{
        width:50%;
        text-align:left;
        padding:0px 20px 20px 20px;
        
    }

    .ContentBox>h1{
        color:#222e50;
    }

    .ContentBox>p{
        width:90%;
        font-size:large;
        margin-top:0px;
    }

    .tagsBox{
        width:80%;
        display:flex;
        align-items:center;
        flex-wrap: wrap;
        line-height:20px;
        gap:5px;
        margin-bottom:20px;
    }

    .tagsBox>span{
        color:white;
        background-color:#222e50;
        padding: 2px 15px 2px 15px;
        border-radius:10px;
        font-size:13px;
        font-weight:bold;
    }


    .linkSection{
        display:flex;
        gap:20px;
    }

    .linkSection>a{
        text-decoration:none;
    }
    .linkSection>a:first-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        border:none;
        cursor:pointer;
    }

    button{
        cursor:pointer;
    }

    button:hover{
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }
    

    .linkSection>a:last-child>button{
        background-color:black;
        color: White;
        padding:8px 20px 8px 20px;
        border-radius:8px;
        border:none;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
    }

    @media only screen and (min-width: 768px) and (max-width:1120px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }
 
        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:400px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (min-width: 481px) and (max-width:768px){
        .box{
           flex-direction:column;
           align-items:center;
           height:100%;
        }

        .projectsContainer{
            width:80%;
            margin:auto;
            
        }
        
        .imgBox{
            width:100%;
            height:280px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:x-large;
        }

        .ContentBox>p{
            font-size:15px;
        }

        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }


    @media only screen and (min-width:320px) and (max-width:480px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:200px;
        }

        .imgBox>img{
            width:100%;
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
            
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }

    @media only screen and (max-width: 319px){
        .box{
            flex-direction:column;
            align-items:center;
            height:100%;
        }

        .projectsContainer{
            width:90%;
            margin:auto;
            
        }

        .imgBox{
            width:100%;
            height:150px;
        }

        .imgBox>img{
            width:100%;
            
        }

        .ContentBox{
            width:80%;
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;
            text-align:center;
        }

        .ContentBox>h1{
            font-size:large;
        }

        .ContentBox>p{
            font-size:13px;
        }


        .tagsBox{
            width:100%;
            justify-content:center;
        }
    }
`
export default Projects