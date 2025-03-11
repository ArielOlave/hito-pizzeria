import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/utils/Navbar";
import Footer from "./components/views/Footer";
import Pizza from "./pages/Pizza";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Carrito from "./pages/Cart";
import PreviewCart from "./components/utils/previewCart";
import { useState } from "react";

function App() {
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
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home agregarpizza={agregarpizza} />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route
          path="/cart"
          element={
            <Carrito
              listacarrito={listacarrito}
              agregarpizza={agregarpizza}
              restarpizza={restarpizza}
              total={total}
            />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <PreviewCart
        listacarrito={listacarrito}
        agregarpizza={agregarpizza}
        restarpizza={restarpizza}
        total={total}
      />
      <Footer></Footer>
    </>
  );
}

export default App;
