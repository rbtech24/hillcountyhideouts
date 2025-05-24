import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required")
});

// Newsletter signup schema
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address")
});

// Search availability schema
const searchAvailabilitySchema = z.object({
  arrival: z.string().min(1, "Arrival date is required"),
  departure: z.string().min(1, "Departure date is required"),
  guests: z.string().optional()
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix
  const apiPrefix = "/api";

  // Contact form submission
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, you would save to database and/or send an email
      const contact = await storage.createContact(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Thank you for your message. We'll get back to you soon."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while submitting your message" 
      });
    }
  });

  // Newsletter signup
  app.post(`${apiPrefix}/newsletter`, async (req, res) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      
      // In a real application, you would save to database or send to email service
      const newsletter = await storage.createNewsletterSignup(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Thank you for subscribing to our newsletter!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your subscription" 
      });
    }
  });

  // Availability search - redirects to booking partner
  app.post(`${apiPrefix}/search-availability`, (req, res) => {
    try {
      const validatedData = searchAvailabilitySchema.parse(req.body);
      
      // In a real application, this might interact with a booking API
      // For now, we'll just return the URL to redirect to
      const redirectUrl = `https://www.hillcountrypremier.com/cabins-at-flite-acres/?arrival=${validatedData.arrival}&departure=${validatedData.departure}${validatedData.guests ? `&guests=${validatedData.guests}` : ''}`;
      
      res.status(200).json({ 
        success: true, 
        redirectUrl 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your search" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
