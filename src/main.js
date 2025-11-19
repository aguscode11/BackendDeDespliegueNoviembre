import ENVIRONMENT from "./config/environment.config.js";
import connectToMongoDB from "./config/configMongoDB.config.js";
import express from 'express'
import authRouter from "./routes/auth.router.js";
import cors from 'cors'
import taskRoutes from './routes/taskRoutes.js'; 


connectToMongoDB()

const app = express()


// CORS SIEMPRE PRIMERO
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://vercel.com/my-team-agus/frontend-de-despliegue-noviembre"
    ],
    credentials: true
}));

app.use(express.json());

// Recién acá tus rutas
app.use('/api/auth', authRouter);
app.use('/api/tasks', taskRoutes);



app.listen(
    ENVIRONMENT.PORT || 8080,
    () => {
        console.log(`Tu servidor se esta ejecutando correctamente en el puerto ${ENVIRONMENT.PORT}`)
    }
)

/* ChannelRepository.getAllByWorkspaceId() */


/* MessagesChannelRepository.create(
    "69021f8d1f59e8d52c3e60f8",
    "68f8d8cc6968605f86bc6c90",
    'hola'
) */
/* MessagesChannelRepository.getAllByChannelId("69021f8d1f59e8d52c3e60f8").then(
    (messages) => console.log(messages[0])
) */