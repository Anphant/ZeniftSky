import "../css/CreatorCard.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function CreatorCard() {
  return (
    <>
      <Card className="creator-main-container">
        <Card.Img
          className="creator-img"
          variant="top"
          src="./img/creator001.jpg"
        />
        <div className="creator-text-container">
          <span className="creator-name">Ember Chuka</span>
          <p>@EmberGallery</p>
        </div>
      </Card>
    </>
  );
}

export default CreatorCard;
