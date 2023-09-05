import React from "react";
import { Button, Container, Nav, NavLink, Navbar } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../assets/img/logoAladden.png";
import ButtonLogin from "../../components/Buttons/ButtonLogin/ButtonLogin";
import ButtonRegister from "../../components/Buttons/ButtonRegister/ButtonRegister";
const NavBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container className="justify-content-center justify-content-lg-between justify-content-md-around">
          <Navbar.Brand href="#home">
            <img src={logo} className="d-inline-block align-center logo img-fluid" />
          </Navbar.Brand>
          <div className="d-flex">
            <ButtonLogin></ButtonLogin>
            <ButtonRegister></ButtonRegister>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
