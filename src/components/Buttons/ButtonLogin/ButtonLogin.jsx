import React from "react";
import { Button } from "react-bootstrap";
import "../ButtonLogin/ButtonLogin.css";

const ButtonLogin = ({ setShow }) => {
  const handleShow = () => setShow(true);
  return (
    <Button onClick={handleShow} className="d-flex align-items-center me-3" variant="success">
      <div className="me-1">
        <img className="logoIniciar" src="https://i.ibb.co/7vM4N7D/enter.png" alt="logo de inicio sesion" />
      </div>
      <p className="m-0 p-0">Inicar Sesion</p>
    </Button>
  );
};

export default ButtonLogin;
