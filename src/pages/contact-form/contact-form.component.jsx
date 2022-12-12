import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center align-self-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:dibyanshu4430@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title="dibyanshu4430@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>


            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/dibyanshu-srivastav-290b7718b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>


            <div className="m-2">
              <a
                href="https://github.com/sdibyanshu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>

          </Col> 
            <div id="contct">
                <h5><span>Contact me:-</span>+91-8299511516</h5>
                <h5><span>Email me:-</span>dibyanshu4430@gmail.com</h5>
            </div>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
