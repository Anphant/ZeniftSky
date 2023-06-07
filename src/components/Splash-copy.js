import "../css/Splash.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import FeaturedCard from "./FeaturedCard";

function Splash() {
  // let i = 0;
  // let splashText = "Discover, collect and sell unique NFT artworks.";

  // function typeWriter() {
  //   if (i < splashText.length) {
  //     document.getElementById("slogan-js").innerHTML += splashText.charAt(i);
  //     i++;
  //     setTimeout(typeWriter, 50);
  //   }
  // }

  return (
    <>
      <Container className="splash-container">
        <Row className="splash-container-row">
          <Col md="6" className="splash-container-left">
            <div id="dolphin-container">
              <img id="dolphin" src="./img/Dolphin.png" />
            </div>
            <h1
              // onclick={typeWriter()}
              id="slogan-js"
              className="splash-slogan splash-elements"
            >
              Discover, collect and sell unique NFT artworks.
            </h1>
            <p className="splash-text splash-elements">
              Marketplace with over 1,000 unique NFT artworks and more than 500
              independent artists
            </p>
            <div className="splash-button-container">
              <Button variant="success" className="px-4 splash-button">
                Start collecting
              </Button>
              <Button variant="outline-success" className="px-4 splash-button">
                Generate!
              </Button>
            </div>
            <div className="splash-child-container">
              <Col className="splash-stats-col inner-border">
                <p className="splash-stats">&nbsp;700+</p>
                <p className="splash-stats-text">Artworks</p>
              </Col>
              <Col className="splash-stats-col inner-border">
                <p className="splash-stats">&nbsp;500+</p>
                <p className="splash-stats-text">Artists</p>
              </Col>
              <Col className="splash-stats-col">
                <p className="splash-stats">25K</p>
                <p className="splash-stats-text">Active users</p>
              </Col>
            </div>
          </Col>
          <Col md="6" className="splash-container-right">
            <FeaturedCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Splash;
