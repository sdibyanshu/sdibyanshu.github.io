import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from '../Resources/pdf/Dibyanshu_Srivastav_Resume.pdf';
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "./Resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div >
      
      <Container fluid className="resume-section" style={{ "margin-top": "100px" ,"margin-bottom": "100px"}}>

      <h1 id="resume-sectionh" style={{ "text-align": "center", "color": "whitesmoke","margin-bottom": "50px" }}> RESUME</h1>

        <Row style={{ justifyContent: "center", position: "relative", "margin-top": "30px" ,"margin-bottom": "30px"}}>

          <a href={pdf} download>
            <button className="button s-button" style={{ color: "white", borderRadius: "5px", width: "200px",height: "40px", fontWeight: "bold", backgroundColor: "black" }}>⬇ Download RESUME ⬇</button>
          </a>
        </Row>
      </Container>
     
      
    </div>
  );
}

export default Resume;


