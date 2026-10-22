import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Genera /robots.txt. En Next 16 es un Route Handler especial cacheado.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
