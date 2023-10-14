// Content.js
import React from "react";
import "../styles/Content.css";
import { Container, Row, Col } from "reactstrap";

function Content() {
  return (
    <Container fluid className="content">
      <div className="content-top">
        
     
      <Row className="height-premium">
        <Col lg="6" md="12" sm="12" xs="12" className="align-items-center">
          <div className="text-start premium-cont">
            <h1>Get more with Premium</h1>
            <br />
            <p>
              Complete projects faster with batch file processing, convert
              scanned documents with OCR and e-sign your business agreements.
            </p>
           <div>
                        <button type="button" className="content-butto">get premium</button>

           </div>
          </div>
        </Col>
        <Col lg="6" md="12" sm="12" xs="12">
          <div className="content-bottom">
            <img src="https://www.pikpng.com/pngl/b/45-450111_anime-cool-png-anime-characters-clipart.png" alt="img" />
          </div>
          <br/>
        </Col>
      </Row>
      </div>
    </Container>
  );
}

export default Content;
