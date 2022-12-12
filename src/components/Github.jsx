import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";



import { Image, Row, Col } from "react-bootstrap";


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
          blockMargin={6}
          color="rgb(216,59,125)"
          // background-color="rgb(216,59,125)"
          fontSize={16}
        />
      </Row>
    
     <h1 className="project-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
        GITHUB  <strong className="purple">STATUS</strong>
      </h1>

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

      <div>
 
      </div>
    

    </>

  );
}

export default Github;
