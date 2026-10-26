import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LUMINA Creative Group",
    short_name: "LUMINA",
    description:
      "Agence numérique à Paris et Brazzaville. Éditeur de LUMINA Education.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0F172A",
    icons: [
      { src: "/favicon.ico",             sizes: "any",    type: "image/x-icon" },
      { src: "/logos/lumina-signe-app.svg", sizes: "48x48", type: "image/svg+xml" },
    ],
  };
}
