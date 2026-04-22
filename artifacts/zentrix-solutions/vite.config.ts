import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    "BASE_PATH environment variable is required but was not provided.",
  );
}

const STATIC_FILES: Record<string, { contentType: string; file: string }> = {
  "/sitemap.xml": {
    contentType: "application/xml; charset=utf-8",
    file: path.resolve(import.meta.dirname, "public", "sitemap.xml"),
  },
  "/robots.txt": {
    contentType: "text/plain; charset=utf-8",
    file: path.resolve(import.meta.dirname, "public", "robots.txt"),
  },
};

function serveStaticFilesPlugin() {
  function handler(
    req: import("http").IncomingMessage,
    res: import("http").ServerResponse,
    next: () => void,
  ) {
    const url = req.url?.split("?")[0] ?? "";
    const match = STATIC_FILES[url];
    if (match && fs.existsSync(match.file)) {
      const content = fs.readFileSync(match.file, "utf-8");
      res.setHeader("Content-Type", match.contentType);
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.statusCode = 200;
      res.end(content);
      return;
    }
    next();
  }

  return {
    name: "serve-static-files",
    configureServer(server: import("vite").ViteDevServer) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server: import("vite").PreviewServer) {
      server.middlewares.use(handler);
    },
  };
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    serveStaticFilesPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
