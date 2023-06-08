import "../css/Splash.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import FeaturedCard from "./FeaturedCard";
import cardData from "./cardData";
import { useState } from "react";

function Splash() {
  const [cards, setCards] = useState(cardData);

  return (
    <>
      <Container className="splash-container">
        <Row>
          <Col className="splash-opening-text">
            <h1
              id="slogan-js"
              className="splash-slogan"
            >
              Discover, collect and sell unique NFT artworks.
            </h1>
            <p className="splash-text">
              Marketplace with over 1,000 unique NFT artworks and more than 500
              independent artists!
            </p>
          </Col>
        </Row>
        <Row>
          {cards.map((card, index) => (
            <Col className="featured-card" md="6" lg="4" xl="3" key={index}>
              <FeaturedCard
                imageUrl={card.imageUrl}
                header={card.header}
                texts={card.texts}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Splash;
