"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Angular", delay: 0 },
  { name: "Spring Boot", delay: 0.1 },
  { name: "PostgreSQL", delay: 0.2 },
  { name: "Docker", delay: 0.3 },
  { name: "AWS", delay: 0.4 },
  { name: "OpenAI", delay: 0.5 },
  { name: "TypeScript", delay: 0.6 },
  { name: "Java", delay: 0.7 },
];

export function TechnologyStack({ dict }: { dict: any }) {
  // Map delays back to dictionary items
  const techData = dict.technologies.map((name: string, index: number) => ({
    name,
    delay: technologies[index % technologies.length].delay
  }));

  return (
    <section className="py-24 relative bg-brand-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-brand-secondary/20 to-brand-primary" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {dict.title1} <span className="text-brand-soft">{dict.titleHighlight}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-light/60"
          >
            {dict.description}
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
          {techData.map((tech: any) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: tech.delay, duration: 0.5, type: "spring" }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(35, 83, 71, 0.4)" }}
              // Applying continuous floating animation
              style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${tech.delay * 2}s`
              }}
              className="px-6 py-4 rounded-2xl bg-brand-secondary border border-brand-accent/50 glass text-brand-light font-medium tracking-wide shadow-[0_0_15px_rgba(22,56,50,0.5)] cursor-pointer"
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  );
}
