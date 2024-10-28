import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Truong Manh Dung </span>
            from <span className="purple">HUS High School for Gifted Students.</span>
            <br />
            I am currently applying for universities in the US.
            <br />
            The favorite subjects that I want to get along with are Math and Physics.
            <br />
            <br />
            Apart from formulas, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching films
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The true sign of intelligence is not knowledge but imagination"{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
