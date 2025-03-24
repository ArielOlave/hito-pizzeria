import { createContext, useContext, useState } from "react";
import api from "../navigation/axiosConfig.";
import { Navigate, useNavigate } from "react-router-dom";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);
  const navigate = useNavigate();
  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", {
        email: email,
        password,
      });
      const { token, rmail: userEmail } = response.data;
      setToken(token);
      setEmail(userEmail);
      localStorage.setItem("jwt", token);
      localStorage.setItem("email", userEmail);
      alert("Inicio de sesion correcto");
      navigate("/");
    } catch (error) {
      alert("Error al iniciar sesion ", error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await api.post("/auth/register", { email, password });
      const { token, email: userEmail } = response.data;
      setToken(token);
      setEmail(userEmail);
      localStorage.setItem("jwt", token);
      localStorage.setItem("email", userEmail);
      alert("registro exitoso");
    } catch (error) {
      console.error("Error al registrar el usuario ", error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("jwt");
    localStorage.removeItem("email");
  };
  const fetchProfile = async () => {
    try {
      const response = await api.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error al obtener datos ", error);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, fetchProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const usarUsuario = () => useContext(UserContext);
