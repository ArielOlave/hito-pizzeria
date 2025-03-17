import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { usarUsuario } from "../context/UserContext";
const Profile = () => {
  const { token } = usarUsuario();
  if (token == true) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Container className="p-2">
        <Row className="text-center">
          <Col>
            <h1>Perfil de Usuario</h1>
            <p>Nombre: Juan Perez</p>
            <p>Email:</p>
            <p>Telefono:</p>
            <Link className="btn btn-danger">Cerrar sesion</Link>
            <Link className="btn btn-primary" to="/">
              Volver al Home
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Profile;
