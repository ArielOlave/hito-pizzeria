import CardPizza from "../components/utils/Cardpizza";
import { usarFetch } from "../context/fetchHomePizzaContext";
import { usarCart } from "../context/cartContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Pizza = () => {
  const { id } = useParams();
  const { pizza, obtenerPizza } = usarFetch();
  const { agregarpizza } = usarCart();
  useEffect(() => {
    obtenerPizza(id);
  }, [id, obtenerPizza]);
  return (
    <>
      {pizza ? (
        <CardPizza listapizzas={pizza} agregarpizza={agregarpizza}></CardPizza>
      ) : (
        <p>Pizza no encontrada</p>
      )}
    </>
  );
};

export default Pizza;
