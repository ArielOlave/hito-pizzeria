import { useState } from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { pizzas } from "./Pizzas";
import { Link } from "react-router-dom";
const PreviewCart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [listacarrito, setlistacarrito] = useState(pizzas);

  const agregarpizza = (pizza) => {
    const nuevalista = [...listacarrito];
    const index = nuevalista.findIndex((el) => el.id === pizza.id);
    nuevalista[index].cantidad = nuevalista[index].cantidad + 1;
    setlistacarrito(nuevalista);
  };
  const restarpizza = (pizza) => {
    const nuevalista = [...listacarrito];
    const index = nuevalista.findIndex((el) => el.id === pizza.id);
    if (nuevalista[index].cantidad > 1) {
      nuevalista[index].cantidad = nuevalista[index].cantidad - 1;
      setlistacarrito(nuevalista);
      return;
    } else {
      eliminarpizza(nuevalista[index]);
      return;
    }
  };
  const eliminarpizza = (pizza) => {
    if (confirm("¿Desea eliminar la pizza del carrito?")) {
      const nuevalista = listacarrito.filter((el) => el.id !== pizza.id);
      setlistacarrito(nuevalista);
      return true;
    } else {
      return false;
    }
  };
  const total = listacarrito.reduce(
    (acc, el) => acc + el.prices * el.cantidad,
    0
  );
  return (
    <>
      <Nav.Link
        id="Cart"
        className="text-decoration-none text-white"
        onClick={handleShow}
      >
        Vista previa /{" "}
      </Nav.Link>
      <Link
        to="/cart"
        className="text-white text-decoration-none"
        as={Link}
        onClick={handleClose}
      >
        Ver carrito
      </Link>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Detalles del pedido:</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group list-group-flush">
            {listacarrito.map((pizza) => (
              <li className="list-group-item" key={pizza.id}>
                <img
                  src={pizza.img}
                  style={{ height: "30px" }}
                  alt={pizza.name}
                />
                {pizza.name} - ${pizza.prices * pizza.cantidad} - <br />
                <a onClick={() => agregarpizza(pizza)}>
                  <i className="bi bi-plus-lg primary"></i>
                </a>
                {"  "}
                {pizza.cantidad}
                {"  "}
                <a onClick={() => restarpizza(pizza)}>
                  <i className="bi bi-dash-lg danger"></i>
                </a>
              </li>
            ))}
          </ul>
          <div className="offcanvas-footer">
            <span>
              <strong>Total : {total} </strong>
            </span>
            <Link
              className="btn btn-primary"
              to="/cart"
              as={Link}
              onClick={handleClose}
            >
              Ver carrito
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default PreviewCart;
