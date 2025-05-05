import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { securityTeams } from "./security-teams";
import { user } from "./auth-schema";

export const bookings = pgTable("bookings", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    teamId: uuid("team_id").notNull().references(() => securityTeams.id, { onDelete: "cascade" }),
    eventDate: timestamp("event_date").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
});