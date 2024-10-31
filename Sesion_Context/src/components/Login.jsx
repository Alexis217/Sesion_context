import React, { useState } from "react";
import { useSession } from "../Hooks/useSession.js";
import "animate.css";

const Login = () => {
  const { login, loading } = useSession();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 animate__animated animate__fadeIn">
      <div className="bg-gray-200 border-2 border-emerald-300 p-8 shadow-md rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:outline-double focus:ring focus:ring-emerald-300"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-emerald-300 rounded-md focus:outline-double focus:ring focus:ring-emerald-300"
          />
          <button
            type="submit"
            className="w-full bg-emerald-400 text-black py-2 rounded-md hover:bg-emerald-600 transition duration-200"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>
        {loading && (
          <div className="mt-4 text-center text-gray-700">Procesando...</div>
        )}
      </div>
    </div>
  );
};

export default Login;
