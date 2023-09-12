import React from "react";
import { Button } from "react-bootstrap";
import banner from "../../../../assets/img/banner.gif";
import logoPedido from "../../../../assets/icons/pedido.png";
import logoReservasion from "../../../../assets/icons/reservacion.png";
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <div className=" position-relative mb-4">
      <img className="banner" src={banner} alt="video cocinando un kebah" />
      <div className="btnBanner d-flex">
        <Button variant="success" className="btnHero m-2 d-flex ">
          <img className="logoBtn" src={logoPedido} alt="" />
          <p className="m-0">Pedidos</p>
        </Button>
        <Button variant="success" className="btnHero m-2 d-flex ">
          <img className="logoBtn" src={logoReservasion} alt="" />
          <p className="m-0">Reservaciones</p>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
