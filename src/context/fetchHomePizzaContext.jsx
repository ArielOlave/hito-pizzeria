import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const fetchAPI = createContext();

export const usarFetch = () => useContext(fetchAPI);

export const PizzasProvider = ({ children }) => {
  const [listapizzas, setListapizzas] = useState([]);
  const [pizza, setPizza] = useState([]);
  const obtenerPizzas = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/pizzas");
      const data = await response.data;
      setListapizzas(data);
    } catch (error) {
      console.log(error);
    }
  };
  const obtenerPizza = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/pizzas/p001");
      const data = await response.data;
      setPizza(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    obtenerPizzas();
    obtenerPizza();
  }, []);
  return (
    <fetchAPI.Provider
      value={{ listapizzas, pizza, obtenerPizza, obtenerPizzas }}
    >
      {children}
    </fetchAPI.Provider>
  );
};
