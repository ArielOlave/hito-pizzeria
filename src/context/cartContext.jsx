import { createContext, useState, useContext } from "react";

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

  return (
    <Cartcontext.Provider
      value={{ listacarrito, agregarpizza, restarpizza, total }}
    >
      {children}
    </Cartcontext.Provider>
  );
};
