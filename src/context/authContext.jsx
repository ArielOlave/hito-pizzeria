import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const saveToken = (newToken) => {
    localStorage.setItem("jwt", newToken);
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem("jwt");
  };

  return (
    <AuthContext.Provider value={{ token, saveToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
