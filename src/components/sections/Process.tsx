"use client";

import { motion } from "framer-motion";

export function Process({ dict }: { dict: any }) {
  return (
    <section className="py-12 md:py-24 bg-brand-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-soft/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-5xl font-bold text-white tracking-tight mb-4 uppercase"
          >
            {dict.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-soft to-brand-light">
              {dict.titleHighlight}
            </span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-soft/50 via-brand-soft/20 to-transparent -translate-x-1/2" />

          {/* Timeline Steps */}
          <div className="flex flex-col gap-4 md:gap-0">
            {dict.steps.map((step: string, index: number) => {
              const isEven = index % 2 === 0;
              // On mobile: show only first 3 steps
              const mobileHidden = index >= 3 ? "hidden md:flex" : "";
              return (
                <div
                  key={index}
                  className={`relative flex items-center md:justify-between ${isEven ? "md:flex-row" : "md:flex-row-reverse"} ${mobileHidden}`}
                >
                  {/* Circle Marker */}
                  <div className="hidden md:flex absolute left-1/2 w-8 h-8 rounded-full bg-brand-primary border-4 border-brand-soft shadow-[0_0_15px_rgba(142,182,155,0.5)] transform -translate-x-1/2 items-center justify-center z-10">
                    <span className="text-xs font-bold text-brand-soft">{index + 1}</span>
                  </div>

                  {/* Mobile: simple numbered row */}
                  <div className="flex md:hidden items-center justify-start gap-4 w-full glass-card p-5 rounded-2xl text-left">
                    <div className="w-8 h-8 rounded-full bg-brand-primary border-2 border-brand-soft flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-brand-soft">{index + 1}</span>
                    </div>
                    <p className="text-base text-white font-medium leading-tight">{step}</p>
                  </div>

                  {/* Desktop: alternating cards */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`hidden md:block w-full md:w-5/12 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}
                  >
                    <div className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform">
                      <p className="text-xl md:text-2xl text-white font-medium">{step}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 md:mt-20 text-center max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-4xl font-medium text-brand-light/90 leading-tight">
              {dict.conclusion}{" "}
              <span className="font-bold text-white block mt-2 text-glow">
                {dict.conclusionHighlight}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
