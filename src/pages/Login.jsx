import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { usarUsuario } from "../context/UserContext";
const Login = () => {
  const { token } = usarUsuario();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function handleSumbit(e) {
    e.preventDefault();
    if (!mail.trim() || !password.trim()) {
      alert("Datos vacios");
    }
    if (!mailRegex.test(mail)) {
      alert("Correo electrónico no válido");
      return;
    } else {
      alert("Ingresado correctamente con el correo: " + mail);
      setMail("");
      setPassword("");
      handleClose();
    }
    console.log(mail, password);
  }
  {
    if (token) {
      return <Navigate to="/" />;
    }
  }
  return (
    <>
      <Modal
        style={{ position: "relative" }}
        show={show}
        backdrop="static"
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
          <Link to="/" className="btn-close"></Link>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Form.Label htmlFor="mail">Mail</Form.Label>
            <Form.Control
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="mail"
              id="mail"
            />
            <Form.Label htmlFor="password">Contraseña</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" to="/" as={Link}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit" onClick={handleSumbit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Login;
