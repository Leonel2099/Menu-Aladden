import React from "react";
import {Table } from "react-bootstrap";

const TabViewUsuario = () => {
  return (
    <div className="p-3">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Posicion</th>
            <th>Nombre Usuario</th>
            <th>Estado</th>
            <th>Perfil</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>......</td>
            <td>......</td>
            <td>......</td>
            <td>......</td>
          </tr>
          <tr>
            <td>......</td>
            <td>......</td>
            <td>......</td>
            <td>......</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TabViewUsuario;
