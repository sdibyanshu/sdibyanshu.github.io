
import "./projects-timeline.styles.css";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectsCards";

import outlookindia from "../../assets/Projects/outlookindia.png";
import bluemart from "../../assets/Projects/Bluemart.png";
import nordstrome from "../../assets/Projects/nordstrome.png";
import Youtube from "../../assets/Projects/Youtube.png";
import searchbar from "../../assets/Projects/searchbar.png";
import shoppingparadise from "../../assets/Projects/shoppingparadise.png";

function TimeLine() {
  return (
    <Container fluid className="project-section">
   
      <Container>
        <h1 className="project-heading">
          MY <strong className="purple">PROJECTS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row id="rowpro" style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCards
              imgPath={shoppingparadise}
              isBlog={false}
              title="Shopping Paradise"
              description="A team project was build in masai Unit-5 month November with four members. Shopping Paradise is an E-Commerce  web app . this project have functionality such as admin page for add and remove products ."

              description1="Tech Stacks :- React ,Redux , CSS ,Chakra UI , material UI, Bootstrap , JavaScript ."
              ghLink="https://github.com/heyabrar/ShoppingParadise"
              demoLink="https://dainty-elf-b53873.netlify.app/"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ outlookindia }
              isBlog={false}
              title="Outlookindia clone"
              description="A individual project is clone of news serving website was created in @masai Unit-4 month October. it was created within 4 days with functionality such as Login, Signup and Navbar .
            "
              description1="Tech Stacks :- React js, Advance JavaScript/ES6,
                CSS, UI Chakra, React Font-awesome . "
              ghLink="https://github.com/sdibyanshu/disgusted-smell-1669"
              demoLink="https://delightful-florentine-e68fea.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={bluemart}
              isBlog={false}
              title="India Mart/Blue Heaven Cosmetic Clone "
              description="A collaborative project of an E-commerse website clone  was created in month of June in masai Unit-2 with group of 5 members and completed within 4 days ." 
              description1="Tech Stacks :- HTML , CSS , Basic JavaScript ." 
              ghLink="https://github.com/Sangram150800/Unit-2_Indiamart_Project_Final"
              demoLink="https://fastidious-dango-65167f.netlify.app/"
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={nordstrome}
              isBlog={false}
              title="Nordstrom clone"
              description="A Individual project is a clone of an E-commerse website which was build in month of July with functionality such as Signup ,Login ,Shopping page , Cart page ,payment page ."
              description1="Tech Stacks : HTML , CSS ,  JavaScript"
              ghLink="https://github.com/sdibyanshu/unnatural-throat-9914"
              demoLink="https://gleeful-malabi-569b3f.netlify.app"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ Youtube }
              isBlog={false}
              title="YouTube Clone"
              description="A individual mini project is a clone of YouTube was build in month of August in @masai with use of API data and functionality of searching video ."
              description1="Tech Stack :- CSS, API Data, Advance JS/ES6"
              ghLink="https://github.com/sdibyanshu/Youtube-Clone"
              demoLink="https://stately-croissant-a210fd.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCards
              imgPath={searchbar}
              isBlog={false}
              title=" SearchData"
              description="A mini project to Search related Data with keyword name on type."
              description1="TechStack : Advance JS/ES6"
              ghLink="https://github.com/masai-course/Dibyanshu_fw19_1132/tree/master/unit-3/sprint-2/optional/star%20copy"
              demoLink="https://candid-truffle-29a2b4.netlify.app/" 
            />
          </Col> */}

          
        </Row>
      </Container>
    </Container>
  );
}

export default TimeLine;

