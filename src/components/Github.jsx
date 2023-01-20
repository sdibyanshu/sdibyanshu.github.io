
import React,{useEffect} from 'react'
import styled from 'styled-components';
import GithubCalendar from 'react-github-calendar'
import stats from "../Resources/Images/stats.png"
import Aos from "aos";
import "aos/dist/aos.css";
import "./Github.css";
const Github = () => {

    useEffect(() => {
        Aos.init({duration:2000})
       })

    return (
        <>
        <MainContainer style={{ marginTop: "-20px" }} >
            <h1 style={{ "margin-top":"50px",color: "white", textTransform: "uppercase" }}>GITHUB STATISTICS</h1>
            <Container data-aos='fade-right'>
                <GithubCalendar username='sdibyanshu' blockSize={15} blockMargin={5} fontSize={16} color="rgb(216,59,125)" />
            </Container>
            {/* <img src={stats} alt="github stats" data-aos='fade-right' /> */}
        </MainContainer>

        <div id="gitdetails">

        <div>
        <img align="center" src="https://github-readme-stats.vercel.app/api?username=sdibyanshu&show_icons=true&count_private=true&theme=radical" alt="" />
        </div>


        <div>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=sdibyanshu&show_icons=true&count_private=true&theme=radical" alt="" />
        </div>
        

      </div>
      <div id="gitdetlanguage">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sdibyanshu&show_icons=true&count_private=true&theme=radical" alt="" />
      </div>
      </>
    )
}


const Container = styled.div`
    margin:auto;
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:50px;
    flex-direction:column;
    // border: 4px solid #23465a;
    border-radius:10px 10px 10px 10px;
    padding:30px 0px 30px 0px;
    
    
    
`



const MainContainer = styled.div`
    @media (max-width: 50em){
        // display:none;
    }
`

export default Github