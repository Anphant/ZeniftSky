import "../css/FeaturedCard.css";
import { Card, Container, Row, Col } from "react-bootstrap";

function FeaturedCard() {
  return (
    <>
      <div className="fc-main-container">
        <Card className="fc-card">
          <Card.Img
            className="fc-card-img"
            variant="top"
            src="https://i.seadn.io/gcs/files/e088d7a60faa223267987c9926e3f629.gif"
          />
          <Card.Body className="card-body">
            <Container className="fc-text-container">
              <Row>
                <Col>
                  <h4>Nyancat goes to space</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text className="featured-card-text1">
                    Floor <br />
                    <span>1.2345 ETH</span>
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className="featured-card-text2">
                    Volume <br />
                    <span>5.0678 ETH</span>
                  </Card.Text>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default FeaturedCard;
