import { Navbar } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <Navbar
        className="justify-content-center fixed-bottom"
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        style={{ color: "white" }}
      >
        <h5>© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados</h5>
      </Navbar>
    </>
  );
};
export default Footer;
