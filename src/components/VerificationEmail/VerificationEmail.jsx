import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const VerificationModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Verifikasi Email</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Silakan cek email Anda untuk verifikasi sebelum login.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VerificationModal;