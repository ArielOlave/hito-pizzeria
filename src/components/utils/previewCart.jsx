import { useState } from "react";
import { Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const PreviewCart = ({
  listacarrito = [],
  agregarpizza,
  restarpizza,
  total,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      {Array.isArray(listacarrito) ? (
        <Offcanvas placement="end" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Detalles del pedido:</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p>El carrito esta vacio</p>
            <div className="offcanvas-footer">
              <Link
                className="btn btn-primary"
                to="/"
                as={Link}
                onClick={handleClose}
              >
                Ver pizzas
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      ) : (
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
                <strong>Total : ${total} </strong>
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
      )}
    </>
  );
};

export default PreviewCart;
