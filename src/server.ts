import http from "http";

import { env } from "./config/env.js";
import app from "./app/app.js";

const PORT = env.PORT;

const server = http.createServer(app);

const gracefulShutdown = async (signal: string) => {
  console.log(`\n🔄 Received ${signal}. Shutting down gracefully...`);

  try {
    server.close(() => {
      console.log("✅ HTTP server closed.");
    });

    process.exit(0);
  } catch (error) {
    console.error("❌ Error during shutdown:", error);
    process.exit(1);
  }
};

async function bootstrap() {
  try {
    server.listen(PORT, () => {
      console.log(`🚀 NexChat Server listening to port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);

    process.exit(1);
  }
}

process.on("SIGINT", () => {
  void gracefulShutdown("SIGINT");
});

process.on("SIGTERM", () => {
  void gracefulShutdown("SIGTERM");
});

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error);
  void gracefulShutdown("uncaughtException");
});

process.on("unhandledRejection", (reason) => {
  console.error("❌ Unhandled Rejection:", reason);
  void gracefulShutdown("unhandledRejection");
});

void bootstrap();
