import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../assets/img/logoAladden.png";
import ButtonRegister from "../../components/Buttons/ButtonRegister/ButtonRegister";
import LoginModal from "../../components/Overlay/LoginModal/LoginModal";
const NavBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container className="justify-content-center justify-content-lg-between justify-content-md-around">
          <Navbar.Brand href="/">
            <img src={logo} className="d-inline-block align-center logo img-fluid" />
          </Navbar.Brand>
          <div className="d-flex">
            <LoginModal></LoginModal>
            <ButtonRegister></ButtonRegister>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
