import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/utils/Navbar";
import Footer from "./components/views/Footer";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
