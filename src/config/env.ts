import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

export const env = {
  PORT: process.env.PORT as string,
  NODE_ENV: process.env.NODE_ENV as string,
  DATABASE_URL: process.env.DATABASE_URL as string,
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY as string,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY as string,
  IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY as string,
};
