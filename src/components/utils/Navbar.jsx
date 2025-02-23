import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import "../styles/Navbar.css";
const profile = document.getElementById("Profile");
const logout = document.getElementById("Logout");
const login = document.getElementById("Login");
const register = document.getElementById("Register");

const Menu = () => {
  const total = 25000;
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
          <NavbarBrand href="#">Pizzeria Mamma Mia!</NavbarBrand>
          <Navbar.Toggle aria-controls="collapse-navbar" />
          <Navbar.Collapse id="collapse-navbar">
            <Nav className="me-auto">
              <Nav.Link className="btn1 " href="#Home">
                Home
              </Nav.Link>

              <Nav.Link className="btn1 d-none" id="Profile" href="#Profile">
                Profile
              </Nav.Link>
              <Nav.Link className="btn1 d-none" id="Logout" href="#Logout">
                Logout
              </Nav.Link>

              <Nav.Link className="btn1" id="Login" href="#Login">
                Login
              </Nav.Link>
              <Nav.Link className="btn1" id="Register" href="#Register">
                Register
              </Nav.Link>
            </Nav>

            <Nav.Link className="justify-content-end btn2" href="#total">
              Total:{total}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Menu;
