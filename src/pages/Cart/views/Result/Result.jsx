import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Result = () => {
  return (
    <div>
      <h4 className="display-4">Pedidos en proceso</h4>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nro.</th>
            <th>Detalles del pedido</th>
            <th>Hora de pedido</th>
            <th>Horario de entrega</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <ul>
                <li>Shawarma x 2</li>
                <li>hummus x3</li>
              </ul>
            </td>
            <td>12:30</td>
            <td>01:00 aprox.</td>
            <td>pendiente</td>
            <td>
        <Button variant="success" className="bi-trash">Borrar</Button>
      </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Result;
