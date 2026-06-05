import { Hero } from "@/components/sections/Hero";
import { getDictionary } from "@/lib/i18n";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default async function Home({ params }: { params: Promise<{ lang: "en" | "es" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-brand-primary text-foreground selection:bg-brand-soft selection:text-brand-primary">
      <Hero dict={dict.hero} />
      <Services dict={dict.services} />
      <WhyChooseUs dict={dict.whyChooseUs} />
      <FeaturedProjects dict={dict.featuredProjects} />
      <TechnologyStack dict={dict.technologyStack} />
      <Process dict={dict.process} />
      <Testimonials dict={dict.testimonials} />
      <ContactCTA dict={dict.contactCTA} />
    </main>
  );
}
