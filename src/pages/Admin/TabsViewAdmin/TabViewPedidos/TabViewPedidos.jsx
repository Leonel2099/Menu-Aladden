import React from 'react'
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const TabViewPedidos = () => {
  return (
    <div className="p-3">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Posicion</th>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Productos</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>......</td>
            <td>......</td>
            <td>......</td>
            <td>......</td>
            <td>......</td>
            <td>......</td>
            <td>
              <Link className="btn btn-success me-2">Editar estado</Link>
              <Button variant="success">Borrar</Button>
            </td>
          </tr>
          <tr>
            <td>......</td>
            <td>......</td>
            <td>......</td>
            <td>......</td>
            <td>......</td>
            <td>......</td>
            <td>
              <Link className="btn btn-success me-2">Editar estado</Link>
              <Button variant="success">Borrar</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TabViewPedidos