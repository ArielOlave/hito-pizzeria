import { ListGroupItem, Card, ListGroup, Col } from "react-bootstrap";
import React from "react";
const CardPizza = ({ listapizzas, agregarpizza }) => {
  if (Array.isArray(listapizzas)) {
    return (
      <>
        {listapizzas.map((pizza, index) => (
          <Col
            className="col-3 col-lg-4 col-md-4 col-sm-12 col-xs-8 col-8 "
            key={index}
          >
            <Card>
              <Card.Img src={pizza.img} style={{ padding: "5%" }}></Card.Img>
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <ul>
                    {pizza.ingredients.map((ingredientes) => {
                      return <li key={ingredientes}>{ingredientes}</li>;
                    })}
                  </ul>
                </ListGroupItem>
                <ListGroupItem>Precio : ${pizza.price}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link
                  className="btn btn-success text-decoration-none"
                  onClick={() => agregarpizza(pizza)}
                >
                  Agregar al carro
                </Card.Link>
                <Card.Link className="btn btn-primary text-decoration-none">
                  ver mas
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </>
    );
  } else {
    return (
      <>
        {
          <Col className="col-3 col-lg-4 col-md-4 col-sm-12 col-xs-8 col-8 ">
            <Card>
              <Card.Img
                src={listapizzas.img}
                style={{ padding: "5%" }}
              ></Card.Img>
              <Card.Body>
                <Card.Title>{listapizzas.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <ul>
                    {listapizzas.ingredients.map((ingredientes) => {
                      return <li key={ingredientes}>{ingredientes}</li>;
                    })}
                  </ul>
                </ListGroupItem>
                <ListGroupItem>Precio : ${listapizzas.price}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link
                  className="btn btn-success text-decoration-none"
                  onClick={agregarpizza()}
                >
                  Agregar al carro
                </Card.Link>
                <Card.Link className="btn btn-primary text-decoration-none">
                  ver mas
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        }
      </>
    );
  }
};
export default CardPizza;
