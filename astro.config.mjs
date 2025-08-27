import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: "https://dennisturco.github.io/ImparareFacile/",
  integrations: [
    mdx(),
    sitemap(),
    icon({
      include: ["fa6-solid", "fa6-brands"],

    }),
    mermaid({
      theme: 'forest', // Tema predefinito
      autoTheme: true, // Cambio automatico del tema in base a data-theme
      mermaidConfig: {
        flowchart: {
          curve: 'basis', // Curvatura dei collegamenti
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});