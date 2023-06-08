import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function GridModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{color: "#000"}}>
          Connect your wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
      <p style={{color: "#000"}}>If you don't have a wallet, you can select a provider and create one.</p>
        <Container>
          <Row style={{color: "#000"}}>
            <h5>Metamask</h5>
            <h5>Coinbase Wallet</h5>
            <h5>Wallet Connect</h5>
            <h5>Ledger</h5>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GridModal;