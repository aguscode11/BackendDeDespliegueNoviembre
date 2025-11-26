🚀 README COMPLETO — BACKEND (Node.js + Express + MongoDB)

# 📌 Backend – Task Manager API

API RESTful para gestión de tareas y categorías, con autenticación por JWT, verificación por email, arquitectura en capas y CRUD completo.

## 🛠️ Tecnologías utilizadas

Node.js

Express

MongoDB + Mongoose

JWT (autenticación)

Bcrypt (hash de contraseñas)

Nodemailer (verificación por email)

Dotenv (env variables)

Arquitectura en capas (controllers, services, repositories)

# 📁 Estructura del proyecto
src/
 ├─ config/
 │   ├─ db.js
 │   ├─ environment.config.js
 │   └─ mailTransporter.config.js
 ├─ controllers/
 │   ├─ auth.controller.js
 │   ├─ categoryController.js
 │   └─ taskController.js
 ├─ middleware/
 │   ├─ authMiddleware.js
 │   ├─ validateRequest.middleware.js
 │   └─ error.js
 ├─ models/
 │   ├─ User.model.js
 │   ├─ Task.model.js
 │   └─ Category.js
 ├─ repositories/
 │   ├─ user.repository.js
 │   ├─ taskRepository.js
 │   └─ categoryRepository.js
 ├─ routes/
 │   ├─ auth.router.js
 │   ├─ categoryRoutes.js
 │   └─ taskRoutes.js
 ├─ services/
 │   ├─ auth.service.js
 │   ├─ taskService.js
 │   └─ categoryService.js
 └─ main.js



Variables de entorno

Crear un archivo .env en la raíz del proyecto:

PORT=8080
MONGO_URI=tu_conexion_mongo
JWT_SECRET=tu_secret
JWT_EXPIRES_IN=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=tu_email
EMAIL_PASS=tu_password_app
CLIENT_URL=http://localhost:5173

# 🔐 Autenticación

El backend utiliza Bearer Token (JWT).

Todas las rutas protegidas requieren:

Authorization: Bearer <token>

# 📮 Verificación por email

(Modificar si no lo tenés completo aún)

El usuario se registra

Se envía correo con link de verificación

El usuario debe hacer clic para activar su cuenta

Recién ahí puede iniciar sesión

Endpoints documentados abajo.

# 📚 Endpoints
## 🔵 AUTH
POST /api/auth/register

Registra un usuario nuevo.

POST /api/auth/login

Devuelve JWT y datos del usuario.

GET /api/auth/verify/:token

Verifica la cuenta vía email.

## 🟣 CATEGORIES (protegido)
GET /api/categories

Obtiene todas las categorías del usuario logueado.

POST /api/categories

Crea una nueva categoría.

Body:

{
  "name": "Trabajo",
  "color": "#ff0000"
}

PUT /api/categories/:id

Edita una categoría.

DELETE /api/categories/:id

Elimina una categoría.

## 🟡 TASKS (protegido)
GET /api/tasks

Obtiene todas las tareas del usuario.

POST /api/tasks

Crea una tarea:

{
  "title": "Comprar leche",
  "description": "Ir al super",
  "priority": "medium",
  "dueDate": "2025-02-05",
  "categoryId": "65asdsa98s…"
}

PUT /api/tasks/:id

Actualiza una tarea (incluye cambio de categoría).

{
  "title": "Tarea editada",
  "categoryId": null
}

DELETE /api/tasks/:id

Elimina una tarea.

# ⚙️ Instalación
1️⃣ Clonar repositorio
git clone https://github.com/usuario/backend.git
cd backend

2️⃣ Instalar dependencias
npm install

3️⃣ Variables de entorno

Crear un archivo .env en la raíz del proyecto:

PORT=8080
MONGO_URI=tu_conexion_mongo
JWT_SECRET=tu_secret
JWT_EXPIRES_IN=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=tu_email
EMAIL_PASS=tu_password_app
CLIENT_URL=http://localhost:5173

4️⃣ Ejecutar el proyecto
npm run dev