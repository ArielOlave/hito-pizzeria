import {
  ListGroupItem,
  Card,
  ListGroup,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import { pizzas } from "./Pizzas";
import { useState } from "react";

const CardPizza = (Props) => {
  const [listapizzas, setListapizzas] = useState(pizzas);
  return (
    <>
      <Container className="p-2">
        <Row className="text-center mx-auto">
          {listapizzas.map((pizza) => (
            <Col
              className="col-3 col-lg-4 col-md-4 col-sm-12 col-xs-8 col-8 "
              key={pizza.id}
            >
              <Card>
                <Card.Img src={pizza.img} style={{ padding: "5%" }}></Card.Img>
                <Card.Body>
                  <Card.Title>{pizza.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <h6>
                      Ingredientes: <br />
                    </h6>
                    {pizza.ingredients}
                  </ListGroupItem>
                  <ListGroupItem>Precio : ${pizza.prices}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link>Boton comprar</Card.Link>
                  <Card.Link>Boton ver mas</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default CardPizza;
