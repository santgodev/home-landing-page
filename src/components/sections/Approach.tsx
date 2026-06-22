"use client";

import { motion } from "framer-motion";

export function Approach({ dict }: { dict: any }) {
  return (
    <section className="py-12 md:py-24 bg-brand-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#163832_1px,transparent_1px),linear-gradient(to_bottom,#163832_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight uppercase">
              {dict.title1.trim()}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-soft to-brand-light block mt-2">
                {dict.titleHighlight}
              </span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4 lg:gap-6 lg:pl-10 lg:border-l border-brand-accent/30 text-center lg:text-left">
            {dict.paragraphs.map((p: string, i: number) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                // On mobile: only show first paragraph
                className={`text-lg md:text-2xl font-medium leading-relaxed ${i === 0 ? "text-brand-soft" : "text-brand-light/90"} ${i >= 1 ? "hidden md:block" : ""}`}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
