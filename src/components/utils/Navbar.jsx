import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import "../styles/Navbar.css";
import PreviewCart from "./previewCart";
import { Link } from "react-router-dom";
const profile = document.getElementById("Profile");
const logout = document.getElementById("Logout");
const login = document.getElementById("Login");
const register = document.getElementById("Register");

const Menu = () => {
  const token = false;

  if (token) {
    profile.classList.remove("d-none");
    logout.classList.remove("d-none");
  } else if (token) {
    login.className = " d-none";
    register.className = " d-none";
  }
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
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

              <Nav.Link
                className="btn1 d-none"
                to="/profile"
                as={Link}
                id="Profile"
              >
                Profile
              </Nav.Link>

              <Nav.Link
                className="btn1 d-none"
                to="/logout"
                as={Link}
                id="Logout"
              >
                Logout
              </Nav.Link>

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
            </Nav>
            <PreviewCart></PreviewCart>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Menu;
