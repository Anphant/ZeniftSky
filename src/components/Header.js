import { Link } from "react-router-dom";
import "../css/Header.css";
import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import GridModal from "./GridModal";

function Header() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          variant="dark"
          expand={expand}
          className="mb-3 navbar-outer-container"
        >
          <Container className="navbar-inner-container">
            <Navbar.Brand href="#" className="navbar-text">
              <Link to="./">ZenithSky</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              bg="dark"
            >
              <Offcanvas.Header closeButton  style={{borderStyle: 0}}>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  variant="dark"
                  className="offcanvas-title"
                >
                  Zenith
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="./about" className="px-4 navbar-text" style={{color: "#000"}}>
                    <Link to="./about" style={{color: "#000;"}}>About</Link>
                  </Nav.Link>
                  <Nav.Link href="./blog" className="px-4 navbar-text" style={{color: "#000"}}>
                    <Link to="./blog" style={{color: "#000;"}}>Blog</Link>
                  </Nav.Link>
                  <Nav.Link href="#./generate" className="px-4 navbar-text" style={{color: "#000"}}>
                    <Link to="./generate" style={{color: "#000;"}}>Generate</Link>
                  </Nav.Link>
                </Nav>
                <Button variant="success" className="px-4 button-wallet" onClick={() => setModalShow(true)}>
                  Connect Wallet
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <GridModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Header;
