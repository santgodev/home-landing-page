"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function MidCTA({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-32 bg-brand-primary relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-brand-soft/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            {dict.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-soft to-brand-light">
              {dict.titleHighlight}
            </span>
          </h2>

          {/* On mobile show only first paragraph */}
          <div className="mb-8 md:mb-12 flex flex-col gap-2">
            {dict.paragraphs.map((p: string, i: number) => (
              <p key={i} className={`text-lg md:text-2xl text-brand-light/80 font-medium ${i >= 1 ? "hidden md:block" : ""}`}>
                {p}
              </p>
            ))}
          </div>

          <button 
            onClick={() => window.open('https://wa.me/573102297981?text=Hola,%20me%20gustar%C3%ADa%20hablar%20con%20un%20experto%20sobre%20c%C3%B3mo%20escalar%20mi%20negocio%20con%20tecnolog%C3%ADa.', '_blank')}
            className="group inline-flex items-center justify-center h-14 md:h-16 px-8 md:px-10 text-base md:text-lg font-bold rounded-full bg-brand-soft text-brand-primary hover:bg-brand-light transition-colors duration-300"
          >
            {dict.btn}
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
