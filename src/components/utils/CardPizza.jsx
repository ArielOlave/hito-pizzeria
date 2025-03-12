import { ListGroupItem, Card, ListGroup, Col } from "react-bootstrap";
import React from "react";

const CardPizza = ({ listapizzas, agregarpizza }) => {
  if (!listapizzas) {
    console.log("listapizzas está vacío o undefined");
    return <p>Cargando...</p>;
  }

  if (Array.isArray(listapizzas)) {
    return (
      <>
        {listapizzas.map((pizza, index) => (
          <Col
            className="col-3 col-lg-4 col-md-4 col-sm-12 col-xs-8 col-8 "
            key={index}
          >
            <Card>
              <Card.Img src={pizza.img} style={{ padding: "5%" }} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <ul>
                    {pizza.ingredients.map((ingrediente) => (
                      <li key={ingrediente}>{ingrediente}</li>
                    ))}
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
                  Ver más
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </>
    );
  } else {
    return (
      <Col className="col-3 col-lg-4 col-md-4 col-sm-12 col-xs-8 col-8 ">
        <Card>
          <Card.Img src={listapizzas.img} style={{ padding: "5%" }} />
          <Card.Body>
            <Card.Title>{listapizzas.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <ul>
                {listapizzas.ingredients.map((ingrediente) => (
                  <li key={ingrediente}>{ingrediente}</li>
                ))}
              </ul>
            </ListGroupItem>
            <ListGroupItem>Precio : ${listapizzas.price}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link
              className="btn btn-success text-decoration-none"
              onClick={() => agregarpizza(listapizzas)}
            >
              Agregar al carro
            </Card.Link>
            <Card.Link className="btn btn-primary text-decoration-none">
              Ver más
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
};

export default CardPizza;
