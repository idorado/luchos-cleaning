import { pgSchema, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Define the auth schema for reference only
const authSchema = pgSchema("auth");

// Reference the existing users table without trying to create it
// This is just a reference for relationships
export const users = authSchema.table("users", {
  id: uuid("id").primaryKey(),
});
