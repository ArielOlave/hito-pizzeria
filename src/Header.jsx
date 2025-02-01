import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <>
      <div className="container-fluid fondo align-content-center text-center">
        <div className="col-6 mx-auto">
          <h1>¡Pizzeria Mamma Mia!</h1>
          <h5>tenemos las mejores pizzas</h5>
          <hr />
        </div>
      </div>
    </>
  );
}
export default Header;
