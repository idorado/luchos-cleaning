import { pgTable, text, numeric, integer, timestamp, pgEnum, varchar } from "drizzle-orm/pg-core";


export const serviceCategoryEnum = pgEnum("service_category", ["residential", "commercial", "emergency"]);

export const services = pgTable("services", {
    id: text("id").primaryKey(),
    serviceName: text("service_name").notNull(),
    category: serviceCategoryEnum("category").notNull(),
    type: varchar("type", { length: 50 }).notNull(),
    description: text("description"),
    price: numeric("price", { precision: 10, scale: 2 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});