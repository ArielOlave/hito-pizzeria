import { useEffect, useState } from "react";
import axios from "axios";
const Pizza = () => {
  const [pizza, setPizza] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5000/api/pizzas/p001").then((res) => {
      setPizza(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <h1>{pizza.name}</h1>
        <p>{pizza.price}</p>
        <p>{pizza.ingredients}</p>

        <img src={pizza.img} alt={pizza.name} />
        <p>{pizza.desc}</p>
        <button> Añadir al carrito</button>
      </div>
    </>
  );
};

export default Pizza;
