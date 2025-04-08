import { sql } from "drizzle-orm";
import { text, uuid, timestamp } from "drizzle-orm/pg-core";
import { createTable } from "./_table"


export const testimonials = createTable("testimonials", {
    id: uuid("id").primaryKey(),
    quote: text("quote").notNull(),
    author: text("author").notNull(),
    role: text("role").notNull(),
    service: text("service").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdateFn(() => sql`now()`),
});
