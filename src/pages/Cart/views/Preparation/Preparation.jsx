import React from "react";
import { Link } from "react-router-dom";
import HorizontalCard from "../../../../components/Panel/HorizontalCard/HorizontalCard";
import { Col, Container, Row } from "react-bootstrap";

const Preparation = () => {
  return (
    <div>
      <h4 className="display-4">Platos pedidos</h4>
      <Container>
        <Row>
          <Col lg={6}>
            <HorizontalCard></HorizontalCard>
          </Col>
          <Col lg={6}>
            <HorizontalCard></HorizontalCard>
          </Col>
          <Col lg={6}>
            <HorizontalCard></HorizontalCard>
          </Col>
          <Col lg={6}>
            <HorizontalCard></HorizontalCard>
          </Col>
          <Col lg={6}>
            <HorizontalCard></HorizontalCard>
          </Col>
        </Row>
      </Container>
      <div className="text-center text-md-end">
        <Link className="m-3 btn btn-success" to={"/pedidos/datosEnvio"}>
          Siguiente ⋙
        </Link>
      </div>
    </div>
  );
};

export default Preparation;
