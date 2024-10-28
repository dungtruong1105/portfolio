import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiTailwindcss,
  SiAndroid,
  SiArduino,
  SiSpringboot,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandElastic } from "react-icons/tb";
import integralIcon from "../../Assets/book.jpg";
import integralIcon2 from "../../Assets/2.jpg";
import integralIcon3 from "../../Assets/3.jpg";
import integralIcon4 from "../../Assets/4.jpg";
import integralIcon5 from "../../Assets/5.jpg";
import integralIcon6 from "../../Assets/6.jpg";
import integralIcon7 from "../../Assets/7.jpg";
import integralIcon8 from "../../Assets/8.webp";
import integralIcon9 from "../../Assets/9.jpg";
import integralIcon10 from "../../Assets/10.jpg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={integralIcon}
          alt="Integral Icon"
          style={{ height: "100px", width: "auto" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={integralIcon2}
          alt="Integral Icon 2"
          style={{ height: "100px", width: "auto" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={integralIcon3}
          alt="Integral Icon 3"
          style={{ height: "100px", width: "auto" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={integralIcon4}
          alt="Integral Icon 4"
          style={{ height: "100px", width: "auto" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={integralIcon5}
          alt="Integral Icon 5"
          style={{ height: "100px", width: "auto" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={integralIcon6}
          alt="Integral Icon 6"
          style={{ height: "100px", width: "auto" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={integralIcon7}
          alt="Integral Icon 7"
          style={{ height: "100px", width: "auto" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={integralIcon8}
          alt="Integral Icon 8"
          style={{ height: "100px", width: "auto" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={integralIcon9}
          alt="Integral Icon 9"
          style={{ height: "100px", width: "auto" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img
          src={integralIcon10}
          alt="Integral Icon 10"
          style={{ height: "100px", width: "auto" }}
        />
      </Col>
    </Row>
  );
}

export default Techstack;
