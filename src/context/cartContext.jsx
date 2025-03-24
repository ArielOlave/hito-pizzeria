import { createContext, useState, useContext } from "react";
import api from "../navigation/axiosConfig.";

const Cartcontext = createContext();

export const usarCart = () => useContext(Cartcontext);

export const CartProvider = ({ children }) => {
  const [listacarrito, setListacarrito] = useState([]);
  const agregarpizza = (pizza) => {
    setListacarrito((prevCarrito) => {
      const pizzaExistente = prevCarrito.find((item) => item.id === pizza.id);
      if (pizzaExistente) {
        return prevCarrito.map((item) =>
          item.id === pizza.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prevCarrito, { ...pizza, cantidad: 1 }];
      }
    });
  };
  const restarpizza = (pizza) => {
    setListacarrito((prevCarrito) =>
      prevCarrito
        .map((item) =>
          item.id === pizza.id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };
  const total = listacarrito.reduce(
    (acc, pizza) => acc + pizza.price * pizza.cantidad,
    0
  );

  const enviarCarrito = async () => {
    try {
      const response = await api.post("/api/checkouts", {
        cart: listacarrito,
      });
      alert("compra realizada con exito!");
      setListacarrito([]);
    } catch (error) {
      alert("se ha producido un error");
      console.log("Error al realizar la compra ", error);
    }
  };

  return (
    <Cartcontext.Provider
      value={{ listacarrito, enviarCarrito, agregarpizza, restarpizza, total }}
    >
      {children}
    </Cartcontext.Provider>
  );
};
