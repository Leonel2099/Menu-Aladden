import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ButtonLogin from "../../Buttons/ButtonLogin/ButtonLogin";
import "../LoginModal/LoginModal.css";

const LoginModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonLogin setShow={setShow}></ButtonLogin>

      <Modal centered show={show} onHide={handleClose}>
        <div className="imgModal">
          <img className="img-fluid" src="https://i.ibb.co/Vgq8DyJ/logo3.png" alt="Logo" />
        </div>
        <div className="modalLogin">
          <Modal.Header className="justify-content-center pb-0">
            <p className="text-white m-0 fs-2">
              <i class="bi bi-person-circle"></i>Iiciar Sesion
            </p>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><i class="bi bi-person"></i>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingrese mail" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label><i class="bi bi-person-lock"></i>Contraseña</Form.Label>
                <Form.Control type="email" placeholder="Ingrese contraseña" autoFocus />
              </Form.Group>
            </Form>
            <div className=" d-flex justify-content-around">
                <p>Iniciar sesion con:</p>
                <i className=" bi-facebook"></i>
                <i class="bi bi-envelope-at-fill"></i>
                <i class="bi bi-twitter"></i>
            </div>
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

export default LoginModal;
