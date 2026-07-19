import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT as string,
  NODE_ENV: process.env.NODE_ENV as string,
};
