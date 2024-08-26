import { createInsertSchema } from "drizzle-zod"
import { pgTable, text, boolean } from 'drizzle-orm/pg-core';

export const summary = pgTable('summary', {
  id: text('id').primaryKey(),
  userId: text('userId').notNull(),
  title: text('title').notNull(),
  sourceType: text('sourceType').notNull(),
  isPublished: boolean('isPublished').default(false)
})

export const insertSummarySchema = createInsertSchema(summary);