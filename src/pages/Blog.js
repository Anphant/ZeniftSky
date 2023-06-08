import "../css/Blog.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";

function Blog() {
  return (
    <>
    <Container>
      <Row>
        <Col className="blog-post">
          <h2>All about NFTs: The truths and myths</h2>
          <img src="https://images.pexels.com/photos/8919535/pexels-photo-8919535.jpeg" alt="NFTs in 2021"/>
          <div className="blog-content" style={{fontSize: "1.2rem"}}>
            <p>If you've ever wondered how people are making money in the digital realm, this article dives deep into the exciting world of NFTs and reveals the secrets to success.</p>
            <p>In the ever-evolving landscape of digital assets, Non-Fungible Tokens (NFTs) have emerged as a topic of great interest and speculation. While it's essential to approach this discussion with an open mind and consider the potential risks and challenges, there are undeniable strengths that make NFTs a force to be reckoned with. In this article, we'll explore the potential of NFTs and delve into their possible future applications, keeping a balanced perspective that acknowledges both opportunities and areas for improvement.</p>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Blog;
