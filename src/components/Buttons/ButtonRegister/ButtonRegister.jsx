import React from 'react';
import { Button } from "react-bootstrap";
import logoResgistro from "../../../assets/icons/registerLogo.png"
import "../ButtonRegister/ButtonRegister.css"

const ButtonRegister = ({setShow}) => {
  const handleShow = () => setShow(true);
  return (
    <Button onClick={handleShow} className="d-flex align-items-center" variant="success">
      <div className="me-1">
        <img className="logoRegistro" src={logoResgistro} alt="logo de registro" />
      </div>
      <p className="m-0 p-0">Registrarse</p>
    </Button>
  )
}

export default ButtonRegister