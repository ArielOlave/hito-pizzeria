import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { usarCart } from "../context/cartContext";
const Carrito = () => {
  const { listacarrito, agregarpizza, restarpizza, total } = usarCart();
  return (
    <>
      <Container>
        <Row className="text-center mx-auto">
          <h1>Carrito de compras</h1>
          <Col className="col-lg-8 col-xl-8 col-xxl-8 col-md-8 col-sm-8">
            <ul className="list-group list-group-flush">
              {listacarrito.map((pizza) => (
                <li className="list-group-item" key={pizza.id}>
                  <img
                    src={pizza.img}
                    style={{ height: "50px" }}
                    alt={pizza.name}
                  />
                  {pizza.name} - ${pizza.price * pizza.cantidad} - <br />
                  <a onClick={() => agregarpizza(pizza)}>
                    <i className="bi bi-plus-lg primary"></i>
                  </a>
                  {"  "}
                  {pizza.cantidad}
                  {"  "}
                  <a onClick={() => restarpizza(pizza)}>
                    <i className="bi bi-dash-lg danger"></i>
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <span>
                <strong>Total : {total} </strong>
              </span>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Carrito;
