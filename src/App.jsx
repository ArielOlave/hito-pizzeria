import Home from "./components/views/Home";
import Navbar from "./components/utils/Navbar";
import Footer from "./components/views/Footer";
import Pizza from "./components/utils/Pizza";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>

      <Pizza></Pizza>
      <Footer></Footer>
    </>
  );
}

export default App;
