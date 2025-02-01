import { ListGroupItem, Card, ListGroup, Col } from "react-bootstrap";

const CardPizza = (Props) => {
  return (
    <>
      <Col className="col-3 col-lg-4 col-md-4 col-sm-12 col-xs-8 col-8 ">
        <Card>
          <Card.Img src={Props.img} style={{ padding: "5%" }}></Card.Img>
          <Card.Body>
            <Card.Title>{Props.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <h6>
                Ingredientes: <br />
              </h6>
              {Props.ingredients}
            </ListGroupItem>
            <ListGroupItem>Precio : ${Props.price}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link>Boton comprar</Card.Link>
            <Card.Link>Boton ver mas</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default CardPizza;
