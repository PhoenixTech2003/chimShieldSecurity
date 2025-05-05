import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const securityTeams = pgTable("security_teams", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    type: text("type").notNull(),
    teamLeader: text("team_leader").notNull().references(() => user.id, { onDelete: "cascade" }),
    price: text("price").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
}); 