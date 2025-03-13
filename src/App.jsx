import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import RutaProtegida from "./navigation/RutasProtegidas";
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
function App() {
  return (
    <>
      <CartProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pizzas/:id"
            element={
              <RutaProtegida isAuthenticated={true}>
                <Pizza />
              </RutaProtegida>
            }
          />
          <Route path="/cart" element={<Carrito />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <PreviewCart></PreviewCart>
      </CartProvider>

      <Footer></Footer>
    </>
  );
}

export default App;
