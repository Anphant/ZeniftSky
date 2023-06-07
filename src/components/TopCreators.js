import "../css/TopCreators.css";
import { Container, Row, Col } from "react-bootstrap";
import CreatorCard from "./CreatorCard";
import CreatorCard2 from "./CreatorCard2";
import CreatorCard3 from "./CreatorCard3";
import CreatorCard4 from "./CreatorCard4";

function TopCreators() {
  return (
    <>
      <Container className="tc-container">
        <Row>
          <Col className="tc-header">
            <h3>Top creators this month</h3>
          </Col>
        </Row>
        <Row>
          <Col md="6" lg="3" className="tc-content">
            <CreatorCard />
          </Col>
          <Col md="6" lg="3" className="tc-content">
            <CreatorCard2 />
          </Col>
          <Col md="6" lg="3" className="tc-content">
            <CreatorCard3 />
          </Col>
          <Col md="6" lg="3" className="tc-content">
            <CreatorCard4 />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TopCreators;
