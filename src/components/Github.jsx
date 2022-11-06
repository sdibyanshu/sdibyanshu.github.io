import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";



import { Row } from "react-bootstrap";


function Github() {
  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <GitHubCalendar
        username="sdibyanshu"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
     <Row>
     <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        GITHUB  <strong className="purple">Status</strong>
      </h1> 
        <img id="gitstats" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=sdibyanshu&theme=2077" alt="" />

     
        
        
    </Row>
    </>
    
  );
}

export default Github;
