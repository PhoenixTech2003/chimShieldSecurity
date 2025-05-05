import { pgTable, uuid, timestamp, pgEnum, text } from "drizzle-orm/pg-core";
import { bookings } from "./bookings";
export const status = pgEnum("status", ["pending", "in_progress", "resolved"])
export const incidentReports = pgTable("incident_reports", {
    id: uuid("id").primaryKey().defaultRandom(),
    status: status().notNull().default("pending"),
    bookingId: uuid("booking_id").notNull().references(() => bookings.id, { onDelete: "cascade" }),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
});