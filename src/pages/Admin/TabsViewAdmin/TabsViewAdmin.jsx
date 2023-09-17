import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../TabsViewAdmin/TabsViewAdmin.css"

const TabsViewAdmin = () => {
  return (
    <div>
      <Nav variant="tabs">
        <Nav.Item>
          <NavLink className="nav-link text-white" id="navLinkUsuario" to={"/administrador/"}>
            Usuarios
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link text-white" to={"/administrador/tabViewDishes"}>
            Platos
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link text-white" to={"/administrador/tabViewOrders"}>
            Pedidos
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default TabsViewAdmin;
