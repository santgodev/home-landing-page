import { getDictionary } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";

import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Process } from "@/components/sections/Process";
import { Approach } from "@/components/sections/Approach";
import { OptimizedLanding } from "@/components/sections/OptimizedLanding";
import { MidCTA } from "@/components/sections/MidCTA";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { AIIntegration } from "@/components/sections/AIIntegration";
import { Benefits } from "@/components/sections/Benefits";
import { DividerText } from "@/components/sections/DividerText";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default async function Home({ params }: { params: Promise<{ lang: "en" | "es" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-[100dvh] bg-brand-primary text-foreground selection:bg-brand-soft selection:text-brand-primary pt-20">
      <Header dict={dict.header} />
      <Hero dict={dict.hero} />
      <PainPoints dict={dict.painPoints} />
      <Process dict={dict.process} />
      <Approach dict={dict.approach} />
      <OptimizedLanding dict={dict.optimizedLanding} />
      <MidCTA dict={dict.midCTA} />
      <FeaturedProjects dict={dict.featuredProjects} />
      <AIIntegration dict={dict.aiIntegration} />
      <Benefits dict={dict.benefits} />
      <DividerText dict={dict.dividerText} />
      <Testimonials dict={dict.testimonials} />
      <ContactCTA dict={dict.contactCTA} />
    </main>
  );
}
