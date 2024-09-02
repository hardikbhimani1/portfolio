import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import NaturePro from "../../Assets/Projects/NaturePro.png";
import aalna from "../../Assets/Projects/aalna.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aalna}
              isBlog={false}
              title="Aalna"
              description="Aalna is an e-commerce platform designed for seamless online shopping experiences. The platform enables users to browse and purchase a wide range of clothing items with ease. Utilizing modern web technologies and payment gateways, Aalna offers a robust solution for online retail."
              demoLink="https://aalnakolkata.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NaturePro}
              isBlog={false}
              title="NaturePro"
              description="NaturePro is an e-commerce platform dedicated to selling a range of natural and organic personal care products. The platform specializes in products such as shampoos, creams, and face washes, focusing on high-quality ingredients and sustainable practices."
              demoLink="https://naturepro.shop"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
