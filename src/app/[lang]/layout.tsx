import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { getDictionary } from "@/lib/i18n";
import { Locale } from "@/lib/i18n";
import { SITE_URL, WHATSAPP_PHONE, localizedUrl } from "@/lib/seo";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

// Open Graph usa el formato "idioma_PAÍS".
const OG_LOCALE: Record<string, string> = {
  en: "en_US",
  es: "es_CO",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  const title = dict.metadata?.title || "EveenIA | Software & AI Agency";
  const description =
    dict.metadata?.description ||
    "We build scalable web, mobile and AI solutions that turn ideas into profitable digital products.";
  const url = localizedUrl(lang as Locale);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: "EveenIA",
    openGraph: {
      type: "website",
      siteName: "EveenIA",
      locale: OG_LOCALE[lang] ?? "en_US",
      url,
      title,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  // Datos estructurados (JSON-LD): identifican la entidad "EveenIA" ante
  // Google y los asistentes de IA. Localizados por idioma.
  const description =
    dict.metadata?.description ||
    "Agencia de software e inteligencia artificial.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: "EveenIA",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        image: `${SITE_URL}/og-image.png`,
        description,
        areaServed: { "@type": "Country", name: "Colombia" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: `+${WHATSAPP_PHONE}`,
          availableLanguage: ["es", "en"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "EveenIA",
        inLanguage: lang,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <html
      lang={lang}
      className={`dark ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-[100dvh]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
