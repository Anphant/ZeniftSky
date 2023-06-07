import "../css/CreatorCard.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function CreatorCard4() {
  return (
    <>
      <Card className="creator-main-container">
        <Card.Img
          className="creator-img"
          variant="top"
          src="./img/creator005.png"
        />
        <div className="creator-text-container">
          <span className="creator-name">Phoenix Hughes</span>
          <p>@FieryCreatives</p>
        </div>
      </Card>
    </>
  );
}

export default CreatorCard4;
