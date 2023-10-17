import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <div className=" position-relative mb-4">
      <img className="banner" src="https://i.ibb.co/YBtnNZz/banner.gif" alt="video cocinando un kebah" />
      <div className="btnBanner d-flex">
        <Link variant="success" to={"/pedidos"} className="btn btnHero m-2 d-flex ">
          <img className="logoBtn" src="https://i.ibb.co/KqkKb6D/pedido.png" alt="" />
          <p className="m-0">Pedidos</p>
        </Link>
        <Button variant="success" className="btnHero m-2 d-flex ">
          <img className="logoBtn" src="https://i.ibb.co/Stg1md9/reservacion.png" alt="" />
          <p className="m-0">Reservaciones</p>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
