import type { MetadataRoute } from "next";
import { i18n } from "@/lib/i18n";
import { localizedUrl, hreflangFor, LOCALIZED_PATHS } from "@/lib/seo";

// Genera /sitemap.xml con una URL por idioma y ruta, incluyendo los
// alternates hreflang (<xhtml:link rel="alternate" .../>) para el SEO
// multilingüe ES/EN.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOCALIZED_PATHS.flatMap((path) =>
    i18n.locales.map((lang) => ({
      url: localizedUrl(lang, path),
      lastModified,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.6,
      alternates: {
        languages: hreflangFor(path),
      },
    }))
  );
}
