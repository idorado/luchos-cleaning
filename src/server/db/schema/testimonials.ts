import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";


export const testimonials = pgTable("testimonials", {
    id: uuid("id").primaryKey(),
    quote: text("quote").notNull(),
    author: text("author").notNull(),
    role: text("role").notNull(),
    service: text("service").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});
