import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Preparation from "../Cart/views/Preparation/Preparation";
import FormData from "../Cart/views/FormData/FormData";
import Result from "../Cart/views/Result/Result";
const Cart = () => {
  const ok = true;
  return (
    <div className="mainSection">
      <Container>
        <h2 className="text-center display-3 m-2 ">Tus pedidos</h2>
        <p className="text-center">Timepo estimado 40' a 60'</p>
        <hr />
        {ok ? (
          <>
            <Routes>
              <Route exact path="/" element={<Preparation></Preparation>}></Route>
            </Routes>
          </>
        ) : (
          <h4 className="text-center display-4 text-danger">No tiene pedidos</h4>
        )}
      </Container>
    </div>
  );
};

export default Cart;
