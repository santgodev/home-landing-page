"use client";

import { motion } from "framer-motion";

export function PainPoints({ dict }: { dict: any }) {
  return (
    <section className="py-12 md:py-24 bg-brand-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6 uppercase"
            >
              {dict.title1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                {dict.titleHighlight}
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-2xl text-brand-light/90 font-medium mb-2 md:mb-4"
            >
              {dict.subtitle}
            </motion.p>
            {/* description: hidden on mobile */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block text-lg text-brand-light/70"
            >
              {dict.description}
            </motion.p>
          </div>

          {/* Points List — show first 3 on mobile, all on desktop */}
          <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-16">
            {dict.points.map((point: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`glass-card p-4 md:p-6 rounded-2xl flex items-start gap-3 md:gap-4 border border-red-900/20 hover:border-red-900/40 ${index >= 3 ? "hidden md:flex" : ""}`}
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full" />
                </div>
                <p className="text-base md:text-lg text-white font-medium">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* Conclusion & Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center bg-brand-primary/80 border border-brand-accent/50 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-soft/10 rounded-full blur-[80px] pointer-events-none" />
            <p className="hidden md:block text-xl text-brand-light/80 mb-6 font-medium relative z-10">
              {dict.conclusion}
            </p>
            <p className="text-xl md:text-3xl text-white font-bold leading-relaxed relative z-10">
              {dict.solution}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
