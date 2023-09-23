import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import logoRegister from "../../../assets/img/logo3.png";
import "../RegisterModal/RegisterModal.css";
import ButtonRegister from "../../Buttons/ButtonRegister/ButtonRegister";

const RegisterModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <ButtonRegister setShow={setShow}></ButtonRegister>

      <Modal centered show={show} onHide={handleClose}>
        <div className="imgModalRegister">
          <img className="img-fluid" src={logoRegister} alt="Logo" />
        </div>
        <div className="modalRegister">
          <Modal.Header className="justify-content-center pb-0 ">
            <p className="text-white m-0 fs-2">
              <i class="bi bi-person-fill-add"></i>Registrarse
            </p>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group type="text" className="mb-3" controlId="Nombre Usuario">
                <Form.Label>
                  <i class="bi bi-person-vcard"></i>Nombre Usuario
                </Form.Label>
                <Form.Control placeholder="Ingrese Nombre usuario" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>
                  <i class="bi bi-person"></i>Email
                </Form.Label>
                <Form.Control type="email" placeholder="Ingrese mail" autoFocus />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Contraseña">
                <Form.Label>
                  <i class="bi bi-person-lock"></i>Contraseña
                </Form.Label>
                <Form.Control type="password" placeholder="Ingrese contraseña" autoFocus />
              </Form.Group>
            </Form>
            <div className=" d-flex  align-items-center justify-content-around flex-column flex-md-row">
              <p className="m-0">Iniciar sesion con:</p>
              <div className="d-flex justify-content-between">
                <i className="pe-3 bi-facebook"></i>
                <i className="pe-3 bi bi-envelope-at-fill"></i>
                <i className="pe-3 bi bi-twitter"></i>
              </div>
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

export default RegisterModal;
