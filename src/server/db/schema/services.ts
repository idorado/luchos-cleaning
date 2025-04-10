import { uuid, text, numeric, timestamp, pgEnum, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { createTable, enumToPgEnum } from "./_table"

export enum ServiceCategory {
    RESIDENTIAL = "residential",
    COMMERCIAL = "commercial",
    EMERGENCY = "emergency"
}


export const serviceCategoryEnum = pgEnum("service_category", enumToPgEnum(ServiceCategory));

export const services = createTable("services", {
    id: uuid("id").primaryKey(),
    serviceName: text("service_name").notNull(),
    category: serviceCategoryEnum("category").notNull(),
    type: varchar("type", { length: 50 }).notNull(),
    description: text("description"),
    price: numeric("price", { precision: 10, scale: 2 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdateFn(() => sql`now()`),
});
