import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LUMINA Creative Group",
    short_name: "LUMINA",
    description:
      "Agence numérique. Éditeur de LUMINA Education.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0F172A",
    icons: [
      { src: "/favicon.ico",    sizes: "any",       type: "image/x-icon" },
      { src: "/icon-192.png",   sizes: "192x192",   type: "image/png" },
      { src: "/icon-512.png",   sizes: "512x512",   type: "image/png" },
    ],
  };
}
