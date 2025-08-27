import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import mermaid from 'astro-mermaid';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: "https://DennisTurco.github.io",
  base: "/ImparareFacile/",
  integrations: [
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    sitemap(),
    icon({
      include: ["fa6-solid", "fa6-brands"],
    }),
    mermaid({
      theme: 'forest',
      autoTheme: true,
      mermaidConfig: {
        flowchart: {
          curve: 'basis',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
