import React from 'react'
import { Button, Card, CardImg } from "react-bootstrap";
import "../HorizontalCard/HorizontalCard.css"
import EditModal from '../../Overlay/EditModal/EditModal';
const HorizontalCard = () => {
  return (
    <Card className='text-white cardProductoPedidos'>
        <section className="d-flex justify-content-between jusjustify-content-md-evenly text-center flex-column-reverse flex-md-row">
          <div>
            <Card.Body id='cardHorizontal'>
              <Card.Title className='fs-1'>Shawarma</Card.Title>
              <Card.Text>
                <div className='fs-5'>
                  <p className='m-0 text-start'>Espesificaciones</p>
                  <div>
                    <ul>
                      <li>sin picante</li>
                      <li>salsa aparte </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-around">
                  <p className='m-0 me-3'>Precio: $400</p>
                  <p className='m-0 me-3'>Cantidad: x 3</p>
                </div>
              </Card.Text>
              <div className='text-start'>
                <EditModal></EditModal>
              </div>
            </Card.Body>
          </div>
          <div>
            <CardImg className="imgProductoPedido img-fluid" src='https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg'/>
          </div>
        </section>
      </Card>
  )
}

export default HorizontalCard