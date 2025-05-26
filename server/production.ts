import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { registerRoutes } from "./routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createServer() {
  const app = express();
  const server = await registerRoutes(app);

  // Health check endpoint for Render
  app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
  });

  // Serve static files from the built frontend
  const staticPath = join(__dirname, "../dist/public");
  app.use(express.static(staticPath));

  // Serve attached assets
  const assetsPath = join(__dirname, "../dist/attached_assets");
  app.use("/assets", express.static(assetsPath));

  // Catch-all handler for SPA routing
  app.get("*", (req, res) => {
    res.sendFile(join(staticPath, "index.html"));
  });

  return server;
}

const port = parseInt(process.env.PORT || "5000", 10);

createServer().then((server) => {
  server.listen(port, "0.0.0.0", () => {
    console.log(`Production server running on port ${port}`);
  });
}).catch((err) => {
  console.error("Failed to start production server:", err);
  process.exit(1);
});