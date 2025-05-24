import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (retained from original schema)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  responded: boolean("responded").default(false).notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  phone: true,
  subject: true,
  message: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Newsletter signups
export const newsletterSignups = pgTable("newsletter_signups", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  active: boolean("active").default(true).notNull(),
});

export const insertNewsletterSignupSchema = createInsertSchema(newsletterSignups).pick({
  email: true,
});

export type InsertNewsletterSignup = z.infer<typeof insertNewsletterSignupSchema>;
export type NewsletterSignup = typeof newsletterSignups.$inferSelect;

// Availability searches (for analytics)
export const availabilitySearches = pgTable("availability_searches", {
  id: serial("id").primaryKey(),
  arrival: text("arrival").notNull(),
  departure: text("departure").notNull(),
  guests: text("guests"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  converted: boolean("converted").default(false).notNull(),
});

export const insertAvailabilitySearchSchema = createInsertSchema(availabilitySearches).pick({
  arrival: true,
  departure: true,
  guests: true,
});

export type InsertAvailabilitySearch = z.infer<typeof insertAvailabilitySearchSchema>;
export type AvailabilitySearch = typeof availabilitySearches.$inferSelect;
