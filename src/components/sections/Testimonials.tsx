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
    <section className="py-16 md:py-32 relative bg-brand-primary overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-soft/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            {dict.title1} <span className="text-brand-soft">{dict.titleHighlight}</span>
          </motion.h2>
        </div>

        {/* Mobile: show only first testimonial */}
        {/* Desktop: show all 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {dict.items.map((item: any, index: number) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`glass p-6 md:p-8 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500 ${index >= 1 ? "hidden md:block" : ""}`}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-accent/40" />
              <div className="relative z-10">
                <p className="text-base md:text-lg text-brand-light/90 leading-relaxed mb-6 pt-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.author}</p>
                    <p className="text-sm text-brand-light/60">{item.role}</p>
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
