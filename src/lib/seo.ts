import { i18n, type Locale } from "@/lib/i18n";

/**
 * URL base de producción del sitio. Se usa para metadataBase, canonical,
 * hreflang, Open Graph, sitemap y datos estructurados (JSON-LD).
 * Si el dominio cambia, se actualiza solo aquí.
 */
export const SITE_URL = "https://eveenia.com";

/** Número de WhatsApp de contacto (formato internacional, sin "+"). */
export const WHATSAPP_PHONE = "573102297981";

/** Rutas públicas indexables, relativas al prefijo de idioma (""= home). */
export const LOCALIZED_PATHS = ["", "/save/about", "/save/privacy", "/save/terms"] as const;

/** Construye la URL absoluta de una ruta para un idioma dado. */
export function localizedUrl(lang: Locale, path: string = ""): string {
  return `${SITE_URL}/${lang}${path}`;
}

/**
 * Mapa de alternates hreflang para una ruta: una entrada por idioma más
 * x-default (apunta al idioma por defecto). Lo consumen generateMetadata
 * (alternates.languages) y el sitemap (alternates.languages).
 */
export function hreflangFor(path: string = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const lang of i18n.locales) {
    languages[lang] = localizedUrl(lang, path);
  }
  languages["x-default"] = localizedUrl(i18n.defaultLocale, path);
  return languages;
}
