import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>MANH DUNG TRUONG</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
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
  );
}

export default Footer;
