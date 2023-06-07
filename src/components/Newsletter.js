import "../css/Newsletter.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Newsletter() {
  return (
    <>
      <Container className="newsletter-container">
        <Row>
          <Col md="5">
            <img
              src="./img/contact-us.png"
              alt="Contact Us"
              className="contact-us"
            />
          </Col>
          <Col md="7" className="newsletter-text">
            <div>
              <p>
                Subscribe to our newsletter and be notified of our finest NFT
                artworks and latest releases.
              </p>
              <h2>You don't wanna miss out, aye?</h2>
              <div>
                <Form className="email-form">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Newsletter;
