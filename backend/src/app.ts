import express from "express";
import cors from "cors";
import classRoutes from "./routes/class.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/classes", classRoutes);

app.use(errorHandler);

export default app;
