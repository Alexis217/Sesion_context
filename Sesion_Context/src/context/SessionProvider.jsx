import React, { createContext, useState } from "react";
import { login as loginService } from "../services/authService.js";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (username, password) => {
    setLoading(true);
    const data = await loginService(username, password);

    if (data) {
      setUser(data.user);
    }
    setLoading(false);
  };

  const logout = () => {
    setUser(null);
    alertify.success("Sesión cerrada");
  };

  return (
    <SessionContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </SessionContext.Provider>
  );
};
