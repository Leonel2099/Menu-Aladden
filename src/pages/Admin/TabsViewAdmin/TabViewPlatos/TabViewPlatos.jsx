import React from 'react'
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const TabViewPlatos = () => {
  return (
    <div className="p-3">
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Posicion</th>
            <th>Nombre de Producto</th>
            <th>Precio</th>
            <th>Detalle</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
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
            <td>......</td>
            <td>
              <Link className="btn btn-success me-2">Editar</Link>
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
            <td>......</td>
            <td>
              <Link className="btn btn-success me-2">Editar</Link>
              <Button variant="success">Borrar</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TabViewPlatos