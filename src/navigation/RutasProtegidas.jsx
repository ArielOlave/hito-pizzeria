import { Navigate } from "react-router-dom";

const RutaProtegida = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
export default RutaProtegida;
