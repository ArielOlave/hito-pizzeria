import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import "../styles/Navbar.css";
const Register = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [show, setShow] = useState(false);
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
    } else if (password !== password2) {
      alert("Las contraseñas no coinciden");
    } else {
      alert("Registrado correctamente con el correo: " + mail);
      setMail("");
      setPassword("");
      handleClose();
    }

    console.log(mail, password);
  }
  return (
    <>
      <a
        className="btn1 nav-link"
        id="Register"
        variant="primary"
        onClick={handleShow}
      >
        Registrar
      </a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
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
            <Form.Label htmlFor="password">Confirmar contraseña</Form.Label>
            <Form.Label htmlFor="password2">Contraseña</Form.Label>
            <Form.Control
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              id="password2"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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
export default Register;
