import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  source: text("source").default("community"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
})
