import React from "react";
import "../styles/Block.css";
import { Container, Row, Col } from "reactstrap";

function Block() {
  return (
    <Container fluid className="block">
      <Row className="block-top">
        <Col className="text-center">
          <h1 className="block-head">Elevate Your PDF Experience</h1>
        </Col>
      </Row>
      <Row className="block-down">
        <Col lg="4" md="12" sm="12" xs="12">
          <div>
            <h3>Effortless PDF Management</h3>
          </div>
          <div>
            <p>
            <a href="/">RedoPdf</a> simplifies PDF tasks. With AI-powered speed and
              quality, you can split, merge, edit, and compress PDFs, convert
              Word to PDF, and transform images into PDFs.
            </p>
          </div>
        </Col>
        <Col lg="4" md="12" sm="12" xs="12">
          <div>
            <h3>Boost Productivity</h3>
          </div>
          <div>
            <p>
              Boost productivity with <a href="/">RedoPdf</a>. Merge, split, edit, and
              compress PDFs, convert Word to PDF, and convert images to PDF
              quickly and efficiently with AI-driven technology.
            </p>
          </div>
        </Col>
        <Col lg="4" md="12" sm="12" xs="12">
          <div>
            <h3>Versatile PDF Solutions</h3>
          </div>
          <div>
            <p>
              <a href="/">RedoPdf</a> is your PDF hub. Split, merge, edit, and compress
              PDFs, convert Word to PDF, and transform images into PDFs with AI
              technology for speedy, high-quality results.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Block;
