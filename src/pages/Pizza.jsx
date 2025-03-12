import CardPizza from "../components/utils/Cardpizza";
import { usarFetch } from "../context/fetchHomePizzaContext";
import { usarCart } from "../context/cartContext";
const Pizza = () => {
  const { pizza } = usarFetch();
  const { agregarpizza } = usarCart();
  return (
    <>
      <CardPizza listapizzas={pizza} agregarpizza={agregarpizza}></CardPizza>
    </>
  );
};

export default Pizza;
