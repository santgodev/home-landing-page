import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/lib/i18n";
import { Locale } from "@/lib/i18n";
const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return {
    title: dict.metadata?.title || "EveenIA | Software Agency",
    description: dict.metadata?.description || "We build scalable digital products.",
  };
}

import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`dark ${geist.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-[100dvh]">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
