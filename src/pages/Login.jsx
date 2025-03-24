import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { usarUsuario } from "../context/UserContext";

const Login = () => {
  const { login, token } = usarUsuario();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!mail.trim() || !password.trim()) {
      alert("Datos vacios");
    }
    if (!mailRegex.test(mail)) {
      alert("Correo electrónico no válido");
      return;
    }
    try {
      await login(mail, password);
    } catch (error) {
      alert("Error al iniciar sesion, verifica los datos ingresados");
    }
  };
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
          <Button variant="primary" type="submit" onClick={handleLogin}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Login;
