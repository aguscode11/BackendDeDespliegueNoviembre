import ENVIRONMENT from "./config/environment.config.js";
import connectToMongoDB from "./config/configMongoDB.config.js";
import express from 'express'
import authRouter from "./routes/auth.router.js";
import cors from 'cors'
import taskRoutes from './routes/taskRoutes.js'; 

connectToMongoDB()

const app = express()

// 🔥 CORS SIEMPRE VA PRIMERO
app.use(cors())

// Middleware para parsear JSON
app.use(express.json())

// Rutas
app.use('/api/auth', authRouter)
app.use('/api/tasks', taskRoutes)

// Start server
app.listen(
    ENVIRONMENT.PORT || 8080,
    () => {
        console.log(`Servidor corriendo en el puerto ${ENVIRONMENT.PORT}`)
    }
)
