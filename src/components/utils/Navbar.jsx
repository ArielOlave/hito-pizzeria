import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import "../styles/Navbar.css";
import PreviewCart from "./previewCart";
import { Link } from "react-router-dom";
import { usarUsuario } from "../../context/UserContext";

const Menu = () => {
  const { token, logout } = usarUsuario();

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="fixed-top">
        <Container>
          <NavbarBrand>
            <Link className="text-decoration-none text-white" to="/">
              Pizzeria Mamma Mia!
            </Link>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="collapse-navbar" />
          <Navbar.Collapse id="collapse-navbar">
            <Nav className="me-auto">
              <Nav.Link
                className="text-decoration-none text-white"
                to="/"
                as={Link}
              >
                Home
              </Nav.Link>
              {token ? (
                <>
                  <Nav.Link
                    className="btn1"
                    to="/profile"
                    as={Link}
                    id="Profile"
                  >
                    Profile
                  </Nav.Link>

                  <Nav.Link className="btn1" onClick={logout} id="Logout">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="text-decoration-none text-white"
                    to="/login"
                    as={Link}
                    id="Login"
                  >
                    Login
                  </Nav.Link>

                  <Nav.Link
                    className="text-decoration-none text-white"
                    to="/register"
                    as={Link}
                    id="Register"
                  >
                    Registrar
                  </Nav.Link>
                </>
              )}
            </Nav>
            <PreviewCart></PreviewCart>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Menu;
