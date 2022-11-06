
import "./projects-timeline.styles.css";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
import ProjectCards from "./ProjectsCards";

import outlookindia from "../../assets/Projects/outlookindia.png";
import bluemart from "../../assets/Projects/Bluemart.png";
import nordstrome from "../../assets/Projects/nordstrome.png";
import Youtube from "../../assets/Projects/Youtube.png";
import searchbar from "../../assets/Projects/searchbar.png";

function TimeLine() {
  return (
    <Container fluid className="project-section">
   
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={bluemart}
              isBlog={false}
              title="India Mart/Blue Heaven Cosmetic Clone "
              description="A collaborative project was created with group of 5 members." 
              description1="Tech Stacks : HTML , CSS , Basic JavaScript"
              ghLink="https://github.com/Sangram150800/Unit-2_Indiamart_Project_Final"
              demoLink="https://fastidious-dango-65167f.netlify.app/"
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={nordstrome}
              isBlog={false}
              title="Nordstrom clone"
              description="Individual project which was created within 4 days with functionality ."
              description1="Tech Stacks : HTML , CSS ,  JavaScript"
              ghLink="https://github.com/sdibyanshu/unnatural-throat-9914"
              demoLink="https://gleeful-malabi-569b3f.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ outlookindia }
              isBlog={false}
              title="Outlookindia clone"
              description="Individual project which was created within 4 days with functionality ."
              description1="Tech Stack : React, UI Chakra, CSS, Advance JavaScript/ES6"
              ghLink="https://github.com/sdibyanshu/disgusted-smell-1669"
              demoLink="https://delightful-florentine-e68fea.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={ Youtube }
              isBlog={false}
              title="YouTube Clone"
              description="A mini project created with use of API data."
              description1="Tech Stack : CSS, API Data, Advance JS/ES6"
              ghLink="https://github.com/masai-course/Dibyanshu_fw19_1132/tree/master/unit-3/sprint-3/day-1/assignments/you%20tube_API"
              demoLink="https://stately-croissant-a210fd.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={searchbar}
              isBlog={false}
              title=" SearchData"
              description="A mini project to Search related Data with keyword name on type."
              description1="TechStack : Advance JS/ES6"
              ghLink="https://github.com/masai-course/Dibyanshu_fw19_1132/tree/master/unit-3/sprint-2/optional/star%20copy"
              demoLink="https://candid-truffle-29a2b4.netlify.app/" 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="NA"
              description="NA"
              ghLink=""
              demoLink="x"     
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default TimeLine;

