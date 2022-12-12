import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Tilt from "react-tilt";

const About = () => {
  return (
    <div className="abouttop">
      <div className="about">
        <h1 id="text" className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2">
                <Tilt options={{ max: 5, scale: 1 }}>
                  <Image
                    className="profile justify-content-end"
                    alt="profile"
                    src="https://media-exp1.licdn.com/dms/image/D4D03AQEpr-Sql5nNCg/profile-displayphoto-shrink_400_400/0/1667487889993?e=1672876800&v=beta&t=6dHAbSWDl1J5AuMpt6INoq5R0TCv-qXwIgfel0wBJgQ" 
                    style={{borderRadius:"10%"}}
                    thumbnail
                    fluid
                  />
                </Tilt>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row id="abouttext"  className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Dibyanshu Srivastav</strong>
                <br />A passionate Full stack aspiring Developer, born and brought up in Gorakhpur , Uttar Pradesh. 
                My skill in tech stack like HTML , CSS , JavaScript , React.js, Redux , Express.js , Node.js ,MongoDB .
                 
                <br />
                In 2022, I am persuing "Full Stack Web Devlopment course (full time)" from @masai school ,Bangalore .
                <br />
                I love learning about new technologies, what problems are
                they solving and How can I use them to build better and scalable
                products.
                <br />
                Apart from coding, some other activities that I love to do! .      
                Music and Playing cricket
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1oNukprJ7cxCg0ARXGol4B7lS9o08zRyq/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/sdibyanshu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/dibyanshu-srivastav-290b7718b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
