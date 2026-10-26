import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Anciennes URL de l'architecture SPA → nouvelles routes App Router
      { source: "/services",   destination: "/expertises",       permanent: true },
      { source: "/a-propos",   destination: "/equipe",           permanent: true },
      { source: "/privacy",    destination: "/mentions-legales", permanent: true },
      { source: "/education",  destination: "/lumina-education", permanent: true },
      // Variantes avec slash final
      { source: "/services/",  destination: "/expertises",       permanent: true },
      { source: "/a-propos/",  destination: "/equipe",           permanent: true },
      { source: "/privacy/",   destination: "/mentions-legales", permanent: true },
      { source: "/education/", destination: "/lumina-education", permanent: true },
    ];
  },
};

export default nextConfig;
