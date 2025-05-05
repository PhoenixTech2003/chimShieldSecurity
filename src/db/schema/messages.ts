import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { user } from "./auth-schema";

export const messages = pgTable("messages", {
    id: uuid("id").primaryKey().defaultRandom(),
    senderId: text("sender_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    receiverId: text("receiver_id").notNull().references(() => user.id, { onDelete: "cascade" }),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").notNull(),
    updatedAt: timestamp("updated_at").notNull(),
});