import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const TabsView = () => {
  return (
    <Nav variant="tabs">
      <Nav.Item>
        <NavLink className="nav-link text-white" to={"/"}>
          Sobre Nosotros
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink className="nav-link text-white" to={"/tabViewMenu"}>
          Menu
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};

export default TabsView;
