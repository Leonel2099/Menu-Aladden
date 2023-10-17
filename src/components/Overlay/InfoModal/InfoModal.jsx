import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../InfoModal/InfoModal.css"

const InfoModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Más info.
      </Button>
      <Modal id="infoModalContent" centered show={show} onHide={handleClose}>
        <div className="imgModal">
          <img className="img-fluid"  src="https://i.ibb.co/Vgq8DyJ/logo3.png" alt="Logo" />
        </div>
        <div className="infoModal">
          <Modal.Header className=" infoModalHeader justify-content-center">
            <p className=" text-white m-0 fs-2">
              <i class="bi bi-info-circle"></i>Informacion
            </p>
          </Modal.Header>
          <Modal.Body className="infoModalBody">
            <Row>
              <Col sm={12}>
                <h4>Contactos</h4>
                <hr />
                <ul>
                  <li>
                    <strong>Direccion:</strong> 378 VICTORIA AVE,MONTREAL, QC
                  </li>
                  <li>
                    <strong>Tel:</strong> 514-750-7534
                  </li>
                  <li>
                    <strong>Email:</strong> Aladden@gmail.com
                  </li>
                </ul>
              </Col>
              <Col sm={12}>
                <h4>Horarios de atentcion</h4>
                <hr />
                <ul>
                  <li>Lunes 19:30 hs - 00:15 hs</li>
                  <li>Martes 19:30 hs - 00:15 hs</li>
                  <li>Miercoles 19:30 hs - 00:15 hs</li>
                  <li>Jueves 19:30 hs - 00:15 hs</li>
                  <li>Viernes 19:30 hs - 00:15 hs</li>
                  <li>Sabado 19:30 hs - 00:15 hs</li>
                </ul>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className=" infoModalFooter justify-content-center">
            <Button className="px-3 fs-4" variant="success" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default InfoModal;
