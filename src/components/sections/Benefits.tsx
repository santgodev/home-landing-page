"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Benefits({ dict }: { dict: any }) {
  return (
    <section className="py-12 md:py-24 bg-brand-secondary relative overflow-hidden border-y border-brand-accent/20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/30 to-transparent pointer-events-none blur-[80px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase"
          >
            {dict.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-soft to-brand-light">
              {dict.titleHighlight}
            </span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {dict.items.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex items-center gap-4 bg-brand-primary/60 backdrop-blur-sm border border-brand-accent/40 rounded-2xl p-4 md:p-5 hover:border-brand-soft/40 transition-colors ${index >= 6 ? 'hidden md:flex' : ''}`}
              >
                <CheckCircle2 className="w-6 h-6 text-brand-soft flex-shrink-0" />
                <span className="text-lg font-medium text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
