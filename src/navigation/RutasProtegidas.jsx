import { Navigate } from "react-router-dom";
import { usarUsuario } from "../context/UserContext";

const RutaProtegida = ({ children }) => {
  const { token } = usarUsuario();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default RutaProtegida;
