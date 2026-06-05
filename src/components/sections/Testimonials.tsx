"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They didn't just build software; they transformed our entire digital infrastructure. The quality is truly Apple-level.",
    author: "Sarah Jenkins",
    role: "CTO, TechNova",
  },
  {
    quote: "The attention to detail and modern aesthetic they brought to our SaaS platform helped us double our conversion rate in 3 months.",
    author: "Marcus Chen",
    role: "Founder, DataFlow AI",
  },
  {
    quote: "Premium work from a premium team. They understood our complex enterprise needs and delivered a flawless system.",
    author: "Elena Rodriguez",
    role: "VP Engineering, GlobalCorp",
  }
];

export function Testimonials({ dict }: { dict: any }) {
  return (
    <section className="py-32 relative bg-brand-primary overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-soft/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {dict.title1} <span className="text-brand-soft">{dict.titleHighlight}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.items.map((item: any, index: number) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass p-8 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-brand-accent/40 group-hover:text-brand-soft/20 transition-colors" />
              <div className="relative z-10">
                <p className="text-lg text-brand-light/90 leading-relaxed mb-8 relative z-10 pt-4">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.author}</h4>
                    <p className="text-brand-soft text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
