import CardPizza from "../components/utils/Cardpizza";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { pizzas } from "../components/utils/Pizzas";
import axios from "axios";
const Home = ({ agregarpizza }) => {
  const [listapizzas, setListapizzas] = useState(pizzas);
  const obtenerPizzas = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/pizzas");
      const data = await response.data;
      setListapizzas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerPizzas();
  }, []);

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
