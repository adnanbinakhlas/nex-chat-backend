import e, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { formatUptime } from "../utils/formatUptime.js";

const app: Application = e();

// Parsers
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(morgan("dev"));

// CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

// Health Check
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "NexChat API is running.",
    data: {
      app: {
        name: "NexChat API",
        version: process.env.npm_package_version,
        environment: process.env.NODE_ENV,
      },
      health: {
        status: "healthy",
        uptime: formatUptime(process.uptime()),
        timestamp: new Date().toLocaleString(),
      },
    },
  });
});

export default app;
