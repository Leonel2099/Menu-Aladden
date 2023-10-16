import React from "react";
import { useState } from "react";
import { CardImg } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../EditModal/EditModal.css"

const EditModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Editar cantidad
      </Button>

      <Modal id="editModalContent" centered show={show} onHide={handleClose}>
        <div className="imgModal">
          <img className="img-fluid" alt="Logo" />
        </div>
        <div className="editModal">
          <Modal.Header className=" editModalHeader justify-content-center pb-0">
            <p className="text-white m-0 fs-2">
              <i class="bi bi-pencil-square"></i>Editar cantidad de producto
            </p>
          </Modal.Header>
          <div className="text-center">
            <CardImg className="imgModalEdit" src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg" />
          </div>
          <Modal.Body className="editModalBody">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>
                  <i class="bi bi-pencil"></i>Nueva cantidad
                </Form.Label>
                <Form.Control type="text" placeholder="Ingrese nueva cantidad de producto" autoFocus />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default EditModal;
