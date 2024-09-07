# 🗓️ Sistema de Gestión de Eventos

Bienvenido al **Sistema de Gestión de Eventos**, un potente backend construido con **Node.js**, **Express.js**, y **MongoDB**, complementado con una interfaz de usuario en **React.js**. Este sistema facilita la gestión eficiente de eventos, con soporte para categorías, roles de usuarios, y permisos personalizados.

## 🚀 Características

- **Administración de Eventos:** Gestión completa de eventos con categorización.
- **Gestión de Usuarios:** Sistema robusto de usuarios con roles y permisos específicos.
- **Autenticación Segura:** Implementación de autenticación mediante JWT para la seguridad de la API.

## 🛠️ Configuración

Para configurar y ejecutar el proyecto localmente, sigue estos pasos:

1. **Clona el Repositorio:**

   \`\`\`bash
   git clone https://github.com/tuusuario/tu-repositorio.git
   \`\`\`

2. **Instala las Dependencias:**

   Navega al directorio del proyecto y ejecuta:

   \`\`\`bash
   npm install
   \`\`\`

3. **Configura las Variables de Entorno:**

   Crea un archivo \`.env\` en la raíz del proyecto con el siguiente contenido:

   \`\`\`plaintext
   HOST=localhost
   PORT=3333
   MONGO_USER=admin
   MONGO_PASSWORD=<tu-mongo-pass>
   MONGO_HOST=localhost
   MONGO_PORT=27017
   MONGO_DATABASE=eventManagement
   JWT_SECRET=palabraDeSeguridadMuySegura
   \`\`\`

4. **Inicia el Servidor:**

   Para iniciar el servidor en modo desarrollo, ejecuta:

   \`\`\`bash
   npm start
   \`\`\`

   El servidor estará corriendo en \`http://localhost:3333\`.

## 🧪 Pruebas

Para ejecutar el conjunto de pruebas y asegurarte de que todo funcione correctamente, utiliza:

\`\`\`bash
npm test
\`\`\`

## 📂 Estructura del Proyecto

- **\`config/\`**: Configuración del sistema, incluyendo la conexión a MongoDB y la configuración de Passport para la autenticación.
- **\`controllers/\`**: Controladores que manejan la lógica de negocio para eventos y usuarios.
- **\`middlewares/\`**: Middlewares de autenticación, manejo de errores y otros procesos intermedios.
- **\`models/\`**: Modelos de datos utilizando Mongoose.
- **\`routes/\`**: Definición de rutas para la API.
- **\`validations/\`**: Validaciones de datos con Joi para asegurar la integridad de las entradas.

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¡Gracias por usar el Sistema de Gestión de Eventos! Si tienes alguna pregunta o comentario, no dudes en abrir un [issue](https://github.com/tuusuario/tu-repositorio/issues) en el repositorio.

