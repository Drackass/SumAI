import { createInsertSchema, createSelectSchema } from "drizzle-zod"
import { pgTable, text, boolean, timestamp } from 'drizzle-orm/pg-core';
import { z } from "zod";

export const attachment = pgTable('attachment', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  url: text('url').notNull(),
  createdAt: timestamp('created_at', { mode: "date", withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: "date", withTimezone: true }).notNull().defaultNow(),
});

export const insertAttachmentSchema = createInsertSchema(attachment);
export const selectAttachmentSchema = createSelectSchema(attachment);
export type Attachment = z.infer<typeof selectAttachmentSchema>;

export const summary = pgTable('summary', {
  id: text('id').primaryKey(),
  userId: text('userId').notNull(),
  title: text('title').notNull(),
  sourceType: text('sourceType').notNull(),
  isPublished: boolean('isPublished').default(false),
  attachmentId: text('attachmentId').references(() => attachment.id, { onDelete: "cascade" }),
  createdAt: timestamp('created_at', { mode: "date", withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: "date", withTimezone: true }).notNull().defaultNow(),
})

export const insertSummarySchema = createInsertSchema(summary);
export const selectSummarySchema = createSelectSchema(summary);
export type Summary = z.infer<typeof selectSummarySchema>;


