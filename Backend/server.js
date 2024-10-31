import express from "express";
import { authRoutes } from "./routes/authRoutes.js";
import { Login } from "./Controllers/authController.js";
import dotenv from "dotenv";
dotenv.config();

// Configuración de Express
const app = express();
app.use(express.json());

// Rutas de autenticación
app.use("/api/auth", authRoutes);

// Ruta de inicio de sesión
authRoutes.post("/Login", Login);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
