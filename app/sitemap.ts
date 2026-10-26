import type { MetadataRoute } from "next";

const BASE = "https://lumina-cg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE,                                           lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/expertises`,                           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/lumina-education`,                     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/lumina-administration`,                lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/lumina-care`,                          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/travaux`,                              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/travaux/lumina-education`,             lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/travaux/france-afrique-media`,         lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/travaux/master-finance`,               lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/equipe`,                               lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/partners`,                             lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`,                              lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    { url: `${BASE}/mentions-legales`,                     lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
