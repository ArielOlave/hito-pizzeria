import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const usarUsuario = () => useContext(UserContext);
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  console.log(token);
  const logout = () => {
    setToken(false);
    alert("usuario desconectado");
  };
  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};
