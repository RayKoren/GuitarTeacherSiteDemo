import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes can be added here if needed in the future
  // Contact form is handled client-side with EmailJS

  const httpServer = createServer(app);

  return httpServer;
}
