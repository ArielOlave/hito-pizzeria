import { useEffect, useState } from "react";
import axios from "axios";
import CardPizza from "../components/utils/Cardpizza";
const Pizza = () => {
  const [pizza, setPizza] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5000/api/pizzas/p001").then((res) => {
      setPizza(res.data);
    });
  }, []);
  return (
    <>
      <CardPizza listapizzas={[pizza]}></CardPizza>
    </>
  );
};

export default Pizza;
