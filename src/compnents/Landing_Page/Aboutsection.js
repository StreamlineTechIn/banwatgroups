import React from "react";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { BgColor } from "./css/commonStyles";

const dummyData = {
  "section": "home",
  "title": "Welcome to My Site",
  "description": "Banwat Group, established in 1986 by Vijay Mannalal Banwat, began its journey as a manufacturer of PVC pipes, catering to the growing demands of the construction and plumbing industries. With a vision for expansion and innovation, the company diversified its operations in 2004 by venturing into drip irrigation manufacturing, addressing the agricultural sector's need for efficient water management solutions. Over the years, Banwat Group has built a reputation for quality and reliability, contributing significantly to sustainable irrigation practices and infrastructure development.",
  "imageUrl1": require("../../Assests/FactoryImage.png"),
  "imageUrl2": require("../../Assests/_MG_6881-removebg-preview.png")
}

const AboutSection = () => {
  return (
    <BgColor>
      <Container id="about" fluid className="py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} lg={5} className="mb-4 px-2">
            <div
              className="bg-light rounded-3 shadow-lg overflow-hidden"
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                position: 'relative',
              }}
            >
              {dummyData.imageUrl1 ? (
                <img
                  src={dummyData.imageUrl1}
                  alt="About Us"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '500px',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Spinner animation="border" variant="primary" />
                </div>
              )}
            </div>
          </Col>
          <Col xs={12} md={6} lg={5} className="mb-4 text-center text-md-start ">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#165b2f' }}>About Banwat Industries</h2>
            <p className="lead text-muted" style={{ fontSize: '1.2rem' }}>
              {dummyData.description}
            </p>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center mt-5">
          <Col xs={12} md={6} lg={5} className="mb-4 text-center text-md-start px-2">
            <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#165b2f' }}>Our Excellence</h2>
            <p className="lead text-muted" style={{ fontSize: '1.2rem' }}>
              We pride ourselves on maintaining the highest standards of quality and efficiency in our manufacturing processes. Our state-of-the-art facilities and expert team ensure that every product meets international quality benchmarks.
            </p>
          </Col>
          <Col xs={12} md={6} lg={5} className="mb-4 px-2">
            <div
              className="bg-light rounded-3 shadow-lg overflow-hidden"
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                position: 'relative',
              }}
            >
              {dummyData.imageUrl2 ? (
                <img
                  src={dummyData.imageUrl2}
                  alt="Our Journey"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Spinner animation="border" variant="primary" />
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </BgColor>
  );
};

export default AboutSection;
