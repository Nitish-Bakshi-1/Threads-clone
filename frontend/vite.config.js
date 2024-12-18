import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/threads-clone/", // Set the base path for assets when deploying to a subfolder
  plugins: [react()],
});
