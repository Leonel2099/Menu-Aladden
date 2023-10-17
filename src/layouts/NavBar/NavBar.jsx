import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./NavBar.css";
import ButtonRegister from "../../components/Buttons/ButtonRegister/ButtonRegister";
import LoginModal from "../../components/Overlay/LoginModal/LoginModal";
import RegisterModal from "../../components/Overlay/RegisterModal/RegisterModal";
const NavBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container className="justify-content-center justify-content-lg-between justify-content-md-around">
          <Navbar.Brand href="/">
            <img src="https://i.ibb.co/6Bqn7rw/logo-Aladden.png" className="d-inline-block align-center logo img-fluid" />
          </Navbar.Brand>
          <div className="d-flex">
            <LoginModal></LoginModal>
            <RegisterModal></RegisterModal>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
