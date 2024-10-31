import alertify from "alertifyjs";

export const login = async (username, password) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (response.ok) {
      alertify.success("Inicio de sesión exitoso");
      return data; // Devuelve los datos para que se usen en el contexto
    } else {
      alertify.error(data.error || "Error en el inicio de sesión");
      return null; // En caso de error, retorna null
    }
  } catch (error) {
    alertify.error("Error de red");
    return null; // Retorna null si hay un problema de red
  }
};
