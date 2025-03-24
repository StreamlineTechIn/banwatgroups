import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import { db } from "../../firebase";
import { BgColor } from "./css/commonStyles";

export default function ContactForm() {

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(details);

    // Pushing the form details to the firebase..
    const docRef = await addDoc(collection(db, "formDetails"), {
      name: details.name,
      email: details.email,
      phone: details.phone,
      message: details.message
    });

    console.log("Details submitted successfully... ", docRef.id);
    setDetails({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  }

  return (
    <BgColor>
      <style>
        {`
        .contact-form {
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  font-weight: 600;
  color: #333;
}

.contact-form .form-control {
  border-radius: 8px;
}

.contact-form .btn-primary {
  background: #007bff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  transition: 0.3s;
}

.contact-form .btn-primary:hover {
  background: #0056b3;
}
`}
      </style>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="contact-form p-4 shadow rounded">
              <h2 className="text-center mb-4">Get in Touch</h2>
              <Form onSubmit={handleSubmit} className="bg-light">
                {/* Name Field */}
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text><FaUser /></InputGroup.Text>
                    <Form.Control onChange={(e) => setDetails({ ...details, name: e.target.value })} type="text" placeholder="Your Name" required value={details.name} />
                  </InputGroup>
                </Form.Group>

                {/* Email Field */}
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                    <Form.Control onChange={(e) => setDetails({ ...details, email: e.target.value })} type="email" placeholder="Your Email" required value={details.email} />
                  </InputGroup>
                </Form.Group>

                {/* Phone Field */}
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text><FaPhone /></InputGroup.Text>
                    <Form.Control onChange={(e) => setDetails({ ...details, phone: e.target.value })} type="number" placeholder="Your Phone (Optional)" value={details.phone} />
                  </InputGroup>
                </Form.Group>

                {/* Message Field */}
                <Form.Group className="mb-3">
                  <InputGroup>
                    <InputGroup.Text><FaCommentDots /></InputGroup.Text>
                    <Form.Control onChange={(e) => setDetails({ ...details, message: e.target.value })} as="textarea" rows={4} placeholder="Your Message" required value={details.message} />
                  </InputGroup>
                </Form.Group>

                {/* Submit Button */}
                <div className="text-center">
                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </BgColor>
  );
}
