import "../css/FeaturedCard.css";
import { Card, Container, Row, Col } from "react-bootstrap";

function FeaturedCard({ imageUrl, header, texts }) {
  return (
    <>
      <div className="fc-main-container">
        <Card className="fc-card">
          <Card.Img
            className="fc-card-img"
            variant="top"
            src={imageUrl}
          />
          <Card.Body className="card-body">
            <Container className="fc-text-container">
              <Row>
                <Col>
                  <h4>{header}</h4>
                </Col>
              </Row>
              <Row>
                {texts.map((text, index) => (
                  <Col key={index}>
                    <Card.Text className="featured-card-text1">
                      {text.label} <br />
                      <span>{text.value}</span>
                    </Card.Text>
                  </Col>
                ))}
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default FeaturedCard;
