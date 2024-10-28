import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { FaMedal, FaTrophy, FaAward } from "react-icons/fa";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Honors</strong> &{" "}
          <strong className="purple">Awards</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some awards and honors I have received.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Journal of Advanced Research"
              description="The article was published in the international Journal of Advanced Research in Computer Science –
               IJARCS that manuscript entitled “A Classification method for Insects using Data Augmentation and Deep Neural Networks”
              has been published in Volume 15 issue 2 March – April 2024"
              ghLink="https://www.ijarcs.info/index.php/Ijarcs/article/view/7070?zarsrc=30&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Exploration Creativity Contest 2024"
              description="The Special prize in Mathematic at Exploration Creativity Contest 2024 organized by VNU University of Science."
              ghLink="https://daibieunhandan.vn/hoc-sinh-duoc-trai-nghiem-thanh-nha-khoa-hoc-qua-cuoc-thi-kham-pha-va-sang-tao-toan-hoc-post372088.html"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI – JAM US 2024"
              description="The Gold medal at “Competition International AI innovation and research” organized by AI – JAM US 2024, project “AIoT Air Quality Monitoring”."
              ghLink="https://www.aijam-us.com/"
              demoLink=""
            />
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ color: "white", textAlign: "center" }}>ANOTHER:</p>
            <ul
              style={{
                color: "white",
                listStyleType: "none",
                padding: "0",
                margin: "0 auto", // This centers the ul horizontally
                textAlign: "left", // List items remain left-aligned
              }}
            >
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <FaTrophy style={{ marginRight: "8px" }} />
                The first prize at Cau Giay district mathematics competition —
                Year 2021
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <FaAward style={{ marginRight: "8px" }} />
                Consolation prize at Hanoi city mathematics competition — Year
                2021
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <FaMedal style={{ marginRight: "8px" }} />
                Silver medal (intermediate level) in Iran geometry competition —
                Year 2021
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <FaMedal style={{ marginRight: "8px" }} />
                The Gold medal in Mathematics at “HSGS Olympiad 2023”
                Competition — Year 2023
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
