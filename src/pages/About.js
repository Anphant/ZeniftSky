import "../css/About.css";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <>
      <Container>
        <Row>
          <Col md="6" className="about-text-container">
            <h1 className="about-header">Embrace the NFT revolution.</h1>
            <p className="about-text-first">
              Welcome to ZenithSky, where we strive to revolutionize the world
              of NFTs. Immerse yourself in the world of non-fungible tokens, or
              NFTs, where scarcity, authenticity, and infinite potential
              converge. From digital masterpieces to virtual artifacts, each NFT
              carries a story waiting to be told.
            </p>
            <p className="about-text">
              At ZenithSky, we go beyond being just a marketplace. We champion
              open protocols and interoperable standards, fueling vibrant
              economies and empowering creators, collectors, and developers
              alike. Join us on this transformative journey. ZenithSky is your
              gateway to a realm where imagination knows no bounds and the
              future of digital ownership unfolds before your eyes.
            </p>
          </Col>
          <Col md="6" className="about-pic">
            <img
              className="about-img"
              src="./img/BlueRedFire.png"
              alt="Blue, Red Fire"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="about-history-container">
        <Container>
          <Row className="about-history">
            <h2>Our story</h2>
            <p>Emerging through the seas of cryptocurrencies</p>
          </Row>
          <Row>
            <Col className="founder-container">
              <img
                className="founder vince"
                src="../img/Vince.jpg"
                alt="Vince"
              />
              <img
                className="founder wilkins"
                src="../img/Wilkins.jpg"
                alt="Wilkins"
              />
            </Col>
            <Col className="founder-text-container">
              <p>
                Vince Gallagher and Wilkins Montgomery crossed paths at a
                cutting-edge tech conference where they instantly connected over
                their shared vision. Both driven by a desire to redefine the
                boundaries of digital ownership, they embarked on a journey to
                create a platform that would empower artists, collectors, and
                enthusiasts worldwide.
              </p>
              <p>
                Their shared belief in the transformative potential of NFTs,
                coupled with their complementary skills, paved the way for
                ZenithSky's inception. Together, they formed an unstoppable duo,
                fueled by a shared passion to unlock the true potential of NFTs
                and create a platform that would inspire and empower the
                creative community.
              </p>
              <p>
                Today, Vince Gallagher and Wilkins Montgomery stand as the
                visionary founders of ZenithSky, driving innovation and shaping
                the future of the NFT landscape. Their journey is a testament to
                the power of collaboration, creativity, and the unwavering
                belief in the limitless possibilities that lie within the realm
                of digital assets.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;
