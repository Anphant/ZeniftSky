import { Link } from "react-router-dom";
import "../css/Header.css";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";

function Header() {
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
              <Offcanvas.Header closeButton>
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
                  <Nav.Link href="#about" className="px-4 navbar-text">
                    <Link to="./about">About</Link>
                  </Nav.Link>
                  <Nav.Link href="#action2" className="px-4 navbar-text">
                    <Link to="./gallery">Gallery</Link>
                  </Nav.Link>
                  <Nav.Link href="#action2" className="px-4 navbar-text">
                    <Link to="./generate">Generate</Link>
                  </Nav.Link>
                </Nav>
                {/* <Form className="d-flex px-4">
                  <Form.Control
                    type="search"
                    placeholder="Metaverse"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                <Button variant="success" className="px-4 button-wallet">
                  Connect Wallet
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
