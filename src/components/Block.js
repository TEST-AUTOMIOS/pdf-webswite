// Block.js
import React from "react";
import "../styles/Block.css";
import { Container, Row, Col } from "reactstrap";

function Block() {
  return (
    <Container fluid className="block">
      <hr/>
      <Row className="block-top">
        <Col className="text-center">
          <h1 className="block-head">Looking for another solution?</h1>
        </Col>
       
      </Row>
       <br />
       <br/>
       <Container>
      <Row className="block-down">
        <Col lg="4" md="12" sm="12" xs="12">
          <div>
            <h3>iLovePDF Desktop</h3>
          </div>
          <div>
            <p>
              Download the <a href="">iLovePDF Desktop</a> App to work with your favorite PDF
              tools on your Mac or Windows PC. Get a lightweight PDF app that
              helps you process heavy PDF tasks offline in seconds.
            </p>
          </div>
        </Col>
        <Col lg="4" md="12" sm="12" xs="12">
          <div>
            <h3>iLovePDF Desktop</h3>
          </div>
          <div>
            <p>
              Download the <a href="">iLovePDF Desktop</a> App to work with your favorite PDF
              tools on your Mac or Windows PC. Get a lightweight PDF app that
              helps you process heavy PDF tasks offline in seconds.
            </p>
          </div>
        </Col>
        <Col lg="4" md="12" sm="12" xs="12">
          <div>
            <h3>iLovePDF Desktop</h3>
          </div>
          <div>
            <p>
              Download the <a href="">iLovePDF Desktop</a> App to work with your favorite PDF
              tools on your Mac or Windows PC. Get a lightweight PDF app that
              helps you process heavy PDF tasks offline in seconds.
            </p>
          </div>
        </Col>
      </Row>
      <hr/>
      </Container>
    </Container>
  );
}

export default Block;
