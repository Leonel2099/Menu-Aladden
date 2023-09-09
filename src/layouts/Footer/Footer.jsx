import React from "react";
import logo from "../../assets/img/logoAladden.png";
import { Col, Container, Row } from "react-bootstrap";
import "../Footer/Footer.css"

const Footer = () => {
  return (
    <div className="d-flex flex-column footer">
      <Container>
        <Row className="align-items-md-center">
          <Col sm={12} md={5}>
            <div>
              <img className="img-fluid p-3" src={logo}></img>
            </div>
          </Col>
          <Col>
            <Container className="p-3">
              <Row>
                <Col sm={12} md={6}>
                  <h3 className="text-center">Contactos</h3>
                  <ul>
                    <li>378 VICTORIA AVE,MONTREAL, QC</li>
                    <li>514-750-7534</li>
                    <li>Aladden@gmail.com</li>
                  </ul>
                </Col>
                <Col sm={12} md={6}>
                  <h3 className="text-center">Siguenos en nuestras redes:</h3>
                  <ul className="d-flex justify-content-around">
                    <li className="list-unstyled">
                      <i class="bi bi-facebook"></i>
                    </li>
                    <li className="list-unstyled">
                      <i class="bi bi-instagram"></i>
                    </li>
                    <li className="list-unstyled">
                      <i class="bi bi-twitter"></i>
                    </li>
                  </ul>
                </Col>
                <Col sm={12} md={6}>
                  <h3 className="text-center">Navegacion</h3>
                  <ul>
                    <li>Inicio</li>
                    <li>Sobre nosotros</li>
                    <li>Menu</li>
                    <li>Reservas</li>
                  </ul>
                </Col>
                <Col sm={12} md={6}>
                  <h3 className="text-center">Horarios Fisicos</h3>
                  <ul>
                    <li>Lunes a jueves 12:00h - 23:00h</li>
                    <li>Viernes y sábado 12:00h - 00:00h</li>
                    <li>Domingo 12:30h - 17:00h 20:00h - 23:00h</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container>
        <hr />
        <p className="text-center">Copyright © 2023 Aladden - Todos los derechos reservados.</p>
      </Container>
    </div>
  );
};

export default Footer;
