import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      screens: {
        'sm': '428px', // iPhone 14 Pro Max breakpoint
        'md': '1024px', // Desktop breakpoint
      },
    },
  },
});
