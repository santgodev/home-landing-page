import { getDictionary } from "@/lib/i18n";
import { Hero } from "@/components/sections/Hero";
import { CustomRules } from "@/components/sections/CustomRules";
import { OptimizedLanding } from "@/components/sections/OptimizedLanding";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

import { Header } from "@/components/layout/Header";

export default async function Home({ params }: { params: Promise<{ lang: "en" | "es" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-brand-primary text-foreground selection:bg-brand-soft selection:text-brand-primary pt-20">
      <Header dict={dict.header} />
      <Hero dict={dict.hero} />
      <CustomRules dict={dict.customRules} />
      <OptimizedLanding dict={dict.optimizedLanding} />
      <FeaturedProjects dict={dict.featuredProjects} />
      <ImpactStats dict={dict.impactStats} />
      <Testimonials dict={dict.testimonials} />
      <ContactCTA dict={dict.contactCTA} />
    </main>
  );
}
