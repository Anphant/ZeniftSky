import "../css/CreatorCard.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function CreatorCard3() {
  return (
    <>
      <Card className="creator-main-container">
        <Card.Img
          className="creator-img"
          variant="top"
          src="./img/creator004.png"
        />
        <div className="creator-text-container">
          <span className="creator-name">Orion Dustes</span>
          <p>@CosmicBrush</p>
        </div>
      </Card>
    </>
  );
}

export default CreatorCard3;
