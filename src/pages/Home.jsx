import CardPizza from "../components/utils/Cardpizza";
import { Container, Row } from "react-bootstrap";
import { usarCart } from "../context/cartContext";
import { usarFetch } from "../context/fetchHomePizzaContext";
const Home = () => {
  const { agregarpizza } = usarCart();
  const { listapizzas } = usarFetch();

  return (
    <>
      <Container className="p-2">
        <Row className="text-center mx-auto">
          <CardPizza
            listapizzas={listapizzas}
            agregarpizza={agregarpizza}
          ></CardPizza>
        </Row>
      </Container>
    </>
  );
};

export default Home;
