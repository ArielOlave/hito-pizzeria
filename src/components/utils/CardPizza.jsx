import { ListGroupItem, Card, ListGroup, Col } from "react-bootstrap";

const CardPizza = ({ listapizzas }) => {
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
                <h6>
                  Ingredientes: <br />
                </h6>
                <p>{pizza.ingredients}</p>
              </ListGroupItem>
              <ListGroupItem>Precio : ${pizza.price}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link>Boton comprar</Card.Link>
              <Card.Link>Boton ver mas</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default CardPizza;
