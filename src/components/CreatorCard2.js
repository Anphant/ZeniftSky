import "../css/CreatorCard.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function CreatorCard2() {
  return (
    <>
      <Card className="creator-main-container">
        <Card.Img
          className="creator-img"
          variant="top"
          src="./img/creator003.png"
        />
        <div className="creator-text-container">
          <span className="creator-name">Android #69420</span>
          <p>@CryptoBladeArt</p>
        </div>
      </Card>
    </>
  );
}

export default CreatorCard2;
