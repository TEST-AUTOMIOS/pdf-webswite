import React from "react";
import "../styles/Block.css";
import { Container, Row, Col } from "reactstrap";

function Block() {
  return (
    <Container fluid className="block">
      <Row className="block-top">
        <Col className="text-center">
          <h1 className="block-head">Looking for another solution?</h1>
        </Col>
      </Row>
      <Row className="block-down">
        <Col lg="4" md="12" sm="12" xs="12">
          <div>
            <h3>REDOPDF Desktop</h3>
          </div>
          <div>
            <p>
              Download the <a href="/">REDOPDF Desktop</a> App to work with
              your favorite PDF tools on your Mac or Windows PC. Get a
              lightweight PDF app that helps you process heavy PDF tasks offline
              in seconds.
            </p>
          </div>
        </Col>
        <Col lg="4" md="12" sm="12" xs="12">
          <div>
            <h3>REDOPDF Desktop</h3>
          </div>
          <div>
            <p>
              Download the <a href="/"> REDOPDF Desktop </a> App to work with
              your favorite PDF tools on your Mac or Windows PC. Get a
              lightweight PDF app that helps you process heavy PDF tasks offline
              in seconds.
            </p>
          </div>
        </Col>
        <Col lg="4" md="12" sm="12" xs="12">
          <div>
            <h3>REDOPDF Desktop</h3>
          </div>
          <div>
            <p>
              Download the <a href="/">REDOPDF Desktop</a> App to work with
              your favorite PDF tools on your Mac or Windows PC. Get a
              lightweight PDF app that helps you process heavy PDF tasks offline
              in seconds.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Block;
