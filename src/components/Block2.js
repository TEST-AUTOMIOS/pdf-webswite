import React from "react";
import "../styles/Block2.css";
import { Container, Row, Col } from "reactstrap";

function Block2() {
  return (
    <Container fluid className="block2">
      <Container className="block2-cont text-center">
        <Row>
          <Col lg="12" md="12" sm="12" xs="12">
            <div>
              <h1 className="block2-head">
                Where AI Speed Meets New Beginnings in PDF Excellence
              </h1>
              <br />
              <p className="block2-para">
                RedoPdf - Where the Art of PDF Editing Meets Effortless
                Elegance. Dive into a world of digital document transformation
                with all the tools you need for seamless editing. Our commitment
                to data security ensures your peace of mind while you work your
                PDF magic.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="block2-down">
        <Col>
          <div className="block2-imgs">
            <img
              src="https://th.bing.com/th/id/R.107a4a5bf62060369e6dfd0f28e014c4?rik=y0Q2%2frcaA7Anxg&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fanime%2f2-2-anime-png-pic.png&ehk=yFffycZsN5qwJ9%2fMBLNJFZJ6roGM8uNAq54mwnCJgx8%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="block2-img"
            />
            <img
              src="https://pngimg.com/uploads/anime_girl/anime_girl_PNG55.png"
              alt=""
              className="block2-img"
            />
            <img
              src="https://pngimg.com/uploads/anime_girl/anime_girl_PNG96.png"
              alt=""
              className="block2-img"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Block2;
