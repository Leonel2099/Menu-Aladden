import React from "react";
import { Button } from "react-bootstrap";
import logoIniciarSesion from "../../../assets/icons/logout_.png"
import "../ButtonLogin/ButtonLogin.css"

function ButtonLogin() {
  return (
    <Button className="d-flex align-items-center me-3" variant="success">
      <div className="me-1">
        <img className="logoIniciar" src={logoIniciarSesion} alt="logo de inicio sesion" />
      </div>
      <p className="m-0 p-0">Inicar Sesion</p>
    </Button>
  );
}

export default ButtonLogin;
