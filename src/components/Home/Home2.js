import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello everyone, my name is{" "}
              <i>
                <b className="purple">Trương Mạnh Dũng</b>
              </i>
              , and I’ve just started my{" "}
              <i>
                <b>12th year</b>
              </i>{" "}
              at the{" "}
              <i>
                <b className="purple">High School for Gifted Students</b>
              </i>
              .
              <br />
              <br />
              Throughout my time here, I’ve often been seen as a{" "}
              <i>
                <b>curious</b>
              </i>{" "}
              and somewhat{" "}
              <i>
                <b>naive</b>
              </i>{" "}
              student, always asking questions that sometimes seem{" "}
              <b>unrelated</b> to the lessons.
              <br />
              <br />
              Some might also see me as someone who learns{" "}
              <i>
                <b>in-depth</b>
              </i>
              , and that’s probably true—I can’t help but be fascinated by{" "}
              <i>
                <b>expanding</b>
              </i>{" "}
              and{" "}
              <i>
                <b>generalizing</b>
              </i>{" "}
              what I’ve learned.
              <br />
              <br />
              I’m someone who enjoys delving into{" "}
              <i>
                <b className="purple">Math</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Physics</b>
              </i>
              . But for me, reading alone isn’t enough to fully grasp these
              subjects; I dedicate time to <b>practicing</b> and{" "}
              <b>solving problems</b>, using them as a way to{" "}
              <i>
                <b>prove</b>
              </i>{" "}
              and{" "}
              <i>
                <b>deepen</b>
              </i>{" "}
              my understanding of what I’ve learned.
              <br />
              <br />
              What makes my learning journey meaningful is <b>sharing</b> what
              I’ve learned with others who have the same passion and continually{" "}
              <i>
                <b>uncovering</b>
              </i>{" "}
              the deeper meanings behind each concept.
              <br />
              <br />
              Though there is a long road ahead, I believe my path lies in{" "}
              <i>
                <b>unraveling the fundamentals</b>
              </i>{" "}
              of things and discovering their{" "}
              <i>
                <b>practical applications</b>
              </i>{" "}
              that can benefit society.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">reach out </span>and connect
              with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/manh_dung_truong/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <RiInstagramFill />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100062388901153&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://zalo.me/0901462605"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiZalo />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
