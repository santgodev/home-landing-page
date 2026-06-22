"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export function ContactCTA({ dict }: { dict: any }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className="py-20 md:py-40 relative bg-brand-primary overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[80vw] max-w-4xl h-[300px] md:h-[500px] bg-brand-soft/20 rounded-[100%] blur-[120px]"
        />
        <div className="absolute w-[40vw] max-w-xl h-[200px] md:h-[300px] bg-brand-light/20 rounded-[100%] blur-[100px] mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 md:mb-8 leading-tight">
            {dict.finalTitle1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-soft to-brand-light">
              {dict.finalTitleHighlight}
            </span>
          </h2>

          {/* Mobile: only first paragraph */}
          <div className="flex flex-col gap-3 mb-10 md:mb-16 max-w-3xl mx-auto">
            {dict.paragraphs.map((p: string, i: number) => (
              <p key={i} className={`text-lg md:text-2xl text-brand-light/80 ${i >= 1 ? "hidden md:block" : ""}`}>
                {p}
              </p>
            ))}
          </div>

          <motion.button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => window.open('https://wa.me/573102297981?text=Hola,%20estoy%20listo%20para%20digitalizar%20mi%20negocio.%20Me%20gustar%C3%ADa%20hablar%20con%20un%20especialista.', '_blank')}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            className="group relative inline-flex items-center justify-center h-16 md:h-20 px-8 md:px-12 text-lg md:text-2xl font-bold rounded-full bg-brand-light text-brand-primary hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(218,241,222,0.4)] hover:shadow-[0_0_60px_rgba(218,241,222,0.6)]"
          >
            <PhoneCall className="mr-3 h-5 w-5 md:h-6 md:w-6" />
            {dict.finalBtn}
            <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full ring-2 ring-brand-soft opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
