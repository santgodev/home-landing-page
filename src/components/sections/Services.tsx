"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Server, BrainCircuit, Webhook, Cloud } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance, modern web applications built with scalable architectures.",
    icon: Code2,
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile experiences that users love.",
    icon: Smartphone,
  },
  {
    title: "Enterprise Systems",
    description: "Robust internal tools and platforms tailored for complex business needs.",
    icon: Server,
  },
  {
    title: "Artificial Intelligence",
    description: "Intelligent AI agents, LLM integrations, and predictive models.",
    icon: BrainCircuit,
  },
  {
    title: "API Integrations",
    description: "Seamless connections between your favorite tools and custom software.",
    icon: Webhook,
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure, scalable, and optimized cloud deployments on AWS & GCP.",
    icon: Cloud,
  },
];

export function Services({ dict }: { dict: any }) {
  // Merge icons with dictionary data
  const servicesData = dict.items.map((item: any, index: number) => ({
    ...item,
    icon: services[index].icon
  }));

  return (
    <section className="py-32 relative bg-brand-primary overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-brand-soft/50 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-green-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {dict.title1} <span className="text-brand-soft">{dict.titleHighlight}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-light/70 text-lg"
          >
            {dict.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service: any, index: number) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-soft to-brand-green-secondary rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="relative h-full p-8 rounded-2xl glass-card flex flex-col items-start text-left overflow-hidden">
                {/* Moving gradient border effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#8EB69B_100%)] animate-spin duration-[3000ms]" />
                </div>
                <div className="absolute inset-[1px] bg-brand-secondary rounded-2xl z-0" />
                
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-brand-primary border border-brand-accent flex items-center justify-center mb-6 group-hover:border-brand-soft/50 transition-colors">
                    <service.icon className="h-7 w-7 text-brand-soft" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-brand-light/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
