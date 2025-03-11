import { useEffect, useState } from "react";
import axios from "axios";
import CardPizza from "../components/utils/Cardpizza";

const Pizza = () => {
  const [pizza, setPizzas] = useState([]);
  const obtenerPizza = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/pizzas/p001");
      const data = await response.data;
      setPizzas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerPizza();
  }, []);

  return (
    <>
      <CardPizza listapizzas={pizza}></CardPizza>
    </>
  );
};

export default Pizza;
