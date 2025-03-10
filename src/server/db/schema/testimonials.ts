import { pgTable, text } from "drizzle-orm/pg-core";


export const testimonials = pgTable("testimonials", {
    id: text("id").primaryKey(),
    quote: text("quote").notNull(),
    author: text("author").notNull(),
    role: text("role").notNull(),
    service: text("service").notNull()
});
