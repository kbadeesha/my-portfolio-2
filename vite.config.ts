import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is the key setting for SPAs. 
  // It tells Vite to always serve index.html for non-file requests.
  appType: 'spa',
});