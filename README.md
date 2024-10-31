# Sistema de sesión con Context y react

Este proyecto es una aplicación de autenticación básica en la que los usuarios pueden iniciar y cerrar sesión. Muestra una pantalla de bienvenida personalizada con los datos del usuario y utiliza una combinación de React, TailwindCSS, Animate.css, y AlertifyJS para el frontend, y un backend en Node.js que simula la autenticación con un array en lugar de una base de datos.

## Tabla de Contenidos

1. [Características](#características)
2. [Tecnologías](#tecnologías)
3. [Requisitos](#requisitos)
4. [Instalación y Ejecución](#instalación-y-ejecución)
5. [Uso](#uso)
6. [Funcionalidades Adicionales](#funcionalidades-adicionales)

## Características

- Inicio y cierre de sesión.
- Alertas de éxito y error en la autenticación.
- Pantalla de bienvenida personalizada para el usuario.
- Indicador de carga mientras se realiza la autenticación.
- Estilos con TailwindCSS y animaciones de Animate.css.

## Tecnologías

- **Frontend**: React, TailwindCSS, Animate.css, AlertifyJS.
- **Backend**: Node.js, Express, bcrypt.

## Requisitos

- Node.js y npm instalados.

## Instalación y Ejecución

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Alexis217/Sesion_context.git

   Frontend
   cd Sesion_Context
   npm install
   npm run dev

   Backend
   cd Backend
   npm install
   npm run dev
   ```

2. **Configuración de variables de entorno**:
   ```
   PORT=3000
   ```

## **Uso**:

1.  **Iniciar sesión**: Ingresa el nombre de usuario y la contraseña. Si las credenciales son correctas, verás una pantalla de bienvenida.

2.  **Cerrar sesión**: Haz clic en "Cerrar sesión" en la pantalla de bienvenida para salir de la cuenta.

## **Funcionalidades Adicionales**

- **Indicador de carga**: Muestra el estado de carga mientras el backend procesa la autenticación.

- **Animaciones**: Se aplican animaciones de entrada con animate.css

- **Alertas con AlertifyJS**: Muestra notificaciones de éxito o error al usuario.
