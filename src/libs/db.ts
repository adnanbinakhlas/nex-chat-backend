import mongoose from "mongoose";
import { env } from "../config/env.js";
import { AppError } from "../helpers/AppError.js";

export const connectDB = async (): Promise<void> => {
  try {
    const dbUrl = env.DATABASE_URL;

    if (!dbUrl) {
      throw new AppError(
        "DATABASE_URL environment variable is missing. Please define it in your .env file.",
        500,
      );
    }

    const connection = await mongoose.connect(dbUrl);

    console.log(
      `✅ MongoDB Connected Successfully: ${connection.connection.host}`,
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`❌ MongoDB Connection Error: ${error.message}`);
    } else {
      console.error(
        `❌ An unknown error occurred during database connection.`,
        error,
      );
    }

    process.exit(1);
  }
};
