import CardPizza from "../components/utils/Cardpizza";
import { Container, Row } from "react-bootstrap";
import { usarCart } from "../context/cartContext";
import { usarFetch } from "../context/fetchHomePizzaContext";

import Header from "../components/views/Header";
const Home = () => {
  const { agregarpizza } = usarCart();
  const { listapizzas } = usarFetch();

  return (
    <>
      <Header></Header>
      <Container className="p-2">
        <Row className="text-center mx-auto align-items-center">
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
