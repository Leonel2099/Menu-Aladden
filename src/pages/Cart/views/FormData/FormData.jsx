import React from "react";
import { Link } from "react-router-dom";
import {Form, FormGroup, FormLabel, Row } from "react-bootstrap";

const FormData = () => {
  return (
    <div>
      <h4 className="display-4">Datos de envio</h4>
      <hr />
      <Form noValidate className="m-2">
        <Row>
        <FormGroup>
          <Form.Label className="fs-5">Direccion (calle y Nro.)</Form.Label>
          <Form.Control></Form.Control>
        </FormGroup>
        <FormGroup>
          <FormLabel className="fs-5">Detalles</FormLabel>
          <Form.Control></Form.Control>
        </FormGroup>
        <FormGroup>
          <FormLabel className="fs-5">Detalles</FormLabel>
          <Form.Control></Form.Control>
        </FormGroup>
        <FormGroup>
          <FormLabel className="fs-5">Detalles</FormLabel>
          <Form.Control></Form.Control>
        </FormGroup>
        </Row>
        <div className="text-end">
        <Link className="m-2 px-4 fs-3 btn btn-success" variant="success" type="submit" to={"/pedidos"}>
          Pedir
        </Link>
        </div>
      </Form>
    </div>
  );
};

export default FormData;
