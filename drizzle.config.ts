//import "dotenv/config";

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    //url: "postgres://postgres:awa2306@192.168.15.15:5432/postgres",
  },
});
