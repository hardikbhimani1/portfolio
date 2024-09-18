import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Hardik Bhimani Resume (5).pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Resume Pages */}
        <Row className="resume" style={{ justifyContent: "center", flexDirection: "column" }}>
          <Col className="d-flex justify-content-center">
            <Document file={pdf} className="d-flex flex-column align-items-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Col>
        </Row>

        {/* Download Button */}
        <Row style={{ justifyContent: "center", position: "absolute", bottom: "20px", width: "100%" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
