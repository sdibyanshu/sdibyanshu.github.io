import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "./pdf/Dibyanshu_Srivastav_Resume.pdf";

import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Github from "../../components/Github";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <h1 style={{"text-align":"center","color":"whitesmoke"}}> RESUME</h1>
      <Container fluid className="resume-section">
   
        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}

        {/* <Row className="resume">
          <Document style={{"width":"auto"}} file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row> */}

        <Row style={{ justifyContent: "center", position: "relative" ,"margin-top":"20px" }}>

          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
      <hr />
      <h1 style={{"text-align":"center","color":"whitesmoke"}}> GITHUB</h1>
      <Github/>
    </div>
  );
}

export default ResumeNew;















// import React from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Card from "react-bootstrap/Card";
// import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
// import L_DELOITTE from "../../assets/img/experience/deloitte.svg";
// import Tilt from "react-tilt";
// import "./experience.styles.css";
// import Github from "../../components/Github";

// const Experience = () => {
//   return (
//     <div>
//       <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
//       {/* Deloitte */}
//       <Jumbotron className="jumbo-style">
//         <Tilt options={{ max: 5, scale: 1 }}>
//           <Card>
//             <Card.Header
//               as="h5"
//               className="d-flex justify-content-center flex-wrap"
//             >
//               <Card.Img
//                 variant="top"
//                 className="img-resize"
//                 src={L_DELOITTE}
//                 alt="Deloitte logo"
//               />
//             </Card.Header>
//             <Card.Body className="d-flex justify-content-center flex-column">
//               <div>
//                 <Card.Title className="text-center">DC Analyst</Card.Title>
//               </div>
//               <div>
//                 <div className="text-center style">
//                   <strong className="body-title-style ">
//                     Frontend Developer
//                   </strong>
//                   <br />
//                   <strong>Technology:</strong> React JS, React Native, Node.js,
//                   NestJS, PostgreSQL, Flutter
//                   <br />
//                   <strong>Duration:</strong> June 2021 - Present
//                   <br />
//                   <strong> Description </strong>
//                   <ul className="text-left">
//                     <li>
//                       <strong>Quick transition</strong> to{" "}
//                       <strong>Backend</strong> and{" "}
//                       <strong>Lead Support Developer</strong> resulting in{" "}
//                       <strong>reducing</strong> Service Now tickets from{" "}
//                       <strong>500+ to 0</strong>.
//                     </li>
//                     <li>
//                       <strong>Developed & Enhanced features</strong> to
//                       implement new changes done in sister project API & build
//                       client-requested features.
//                     </li>
//                     <li>
//                       <strong>Worked on</strong> JIRA stories to develop a new
//                       API to support client-requested features.
//                     </li>
//                     <li>
//                       <strong>Provided KT and workshops</strong> to different
//                       <strong> MNC</strong> handing over Support tasks and
//                       proceedings.
//                     </li>
//                     <li>
//                       <strong>Created</strong> Change requests & Release on SNOW
//                       for each deployment of Frontend, Backend & ETL jobs.
//                     </li>
//                     <li>
//                       <strong>Implemented multi-lingual functionality</strong>{" "}
//                       to the project's <strong>web application</strong> enabling
//                       it to be used
//                       <strong> across different countries</strong> by the
//                       customers.
//                     </li>
//                     <li>
//                       <strong>Worked</strong> on{" "}
//                       <strong>building Hybrid Mobile App</strong> for{" "}
//                       <strong>Health Industry</strong> using Flutter & Dart in
//                       Firm Initiative.
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Tilt>
//       </Jumbotron>

//       {/* Accenture */}
//       <Github/>
//     </div>
//   );
// };

// export default Experience;
