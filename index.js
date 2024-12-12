import express from "express";
import helmet from "helmet";
import { connectDB } from "./src/config/mongo.js";
import { mapRoutes } from "./src/routes/mapRoutes.js";
import { userRoutes } from "./src/routes/userRoutes.js";
import errorMiddleware from "./src/middleware/errorMiddleware.js";
import YAML from "yamljs";

process.loadEnvFile();

const PORT = process.env.PORT;

const app = express();


app.use(helmet());
app.use(express.json());

connectDB();

app.use("/api/map", mapRoutes);
app.use("/api/users", userRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("Servidor en escucha por el puerto http://localhost:" + PORT);
});
