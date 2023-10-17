import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../TabViewMenu/TabViewMenu.css";

const TabViewMenu = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <Card className="m-3">
              <Card.Img variant="top" className="img-fluid" src='https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg' />
              <Card.Body>
                <Card.Title className="text-white">SHAWARMA</Card.Title>
                <Card.Text className="text-white">
                  Delicioso plato de carne marinada (generalmente pollo o cordero) asada en un asador vertical. Se sirve
                  en pan de pita con ensaladas frescas y salsa de ajo o tahini.
                </Card.Text>
                <div className="d-flex">
                  <Button variant="success" className="btnDishMenu p-0">
                    <i class="bi bi-plus-circle"></i>
                    <p>Mas detalles</p>
                  </Button>
                  <Button variant="success" className="btnDishMenu p-0">
                    <i class="bi bi-cart-plus"></i>
                    <p>Agregar al pedido</p>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="m-3">
              <Card.Img variant="top" src='https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg' />
              <Card.Body>
                <Card.Title className="text-white">SHAWARMA</Card.Title>
                <Card.Text className="text-white">
                  Delicioso plato de carne marinada (generalmente pollo o cordero) asada en un asador vertical. Se sirve
                  en pan de pita con ensaladas frescas y salsa de ajo o tahini.
                </Card.Text>
                <div className="d-flex">
                  <Button variant="success" className="btnDishMenu p-0">
                    <i class="bi bi-plus-circle"></i>
                    <p>Mas detalles</p>
                  </Button>
                  <Button variant="success" className="btnDishMenu p-0">
                    <i class="bi bi-cart-plus"></i>
                    <p>Agregar al pedido</p>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="m-3">
              <Card.Img variant="top" src='https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg' />
              <Card.Body>
                <Card.Title className="text-white">SHAWARMA</Card.Title>
                <Card.Text className="text-white">
                  Delicioso plato de carne marinada (generalmente pollo o cordero) asada en un asador vertical. Se sirve
                  en pan de pita con ensaladas frescas y salsa de ajo o tahini.
                </Card.Text>
                <div className="d-flex">
                  <Button variant="success" className="btnDishMenu p-0">
                    <i class="bi bi-plus-circle"></i>
                    <p>Mas detalles</p>
                  </Button>
                  <Button variant="success" className="btnDishMenu p-0">
                    <i class="bi bi-cart-plus"></i>
                    <p>Agregar al pedido</p>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="m-3">
              <Card.Img variant="top" src='https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg' />
              <Card.Body>
                <Card.Title className="text-white">SHAWARMA</Card.Title>
                <Card.Text className="text-white">
                  Delicioso plato de carne marinada (generalmente pollo o cordero) asada en un asador vertical. Se sirve
                  en pan de pita con ensaladas frescas y salsa de ajo o tahini.
                </Card.Text>
                <div className="d-flex">
                  <Button variant="success" className="btnDishMenu p-0">
                    <i class="bi bi-plus-circle"></i>
                    <p>Mas detalles</p>
                  </Button>
                  <Button variant="success" className="btnDishMenu p-0">
                    <i class="bi bi-cart-plus"></i>
                    <p>Agregar al pedido</p>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TabViewMenu;
