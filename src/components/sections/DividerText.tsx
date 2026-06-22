"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function DividerText({ dict }: { dict: any }) {
  return (
    // Hidden entirely on mobile — saves scroll space, content is redundant with other sections
    <section className="hidden md:block py-24 bg-brand-secondary relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 uppercase">
            {dict.title1.trim()}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 block sm:inline sm:ml-4">
              {dict.titleHighlight}
            </span>
          </h2>
          <p className="text-xl md:text-3xl text-brand-light/90 font-medium">
            {dict.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
