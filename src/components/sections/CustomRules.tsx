"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";

const images = [
  "/hero1.png",
  "/hero2.png"
];

interface CustomRulesProps {
  dict: {
    badge: string;
    title: string;
    desc: string;
    sequence: string[];
  };
}

export function CustomRules({ dict }: CustomRulesProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const total = dict?.sequence?.length || 2;
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % total);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [index, dict?.sequence]);

  if (!dict) return null;

  return (
    <section className="py-24 relative bg-brand-primary overflow-hidden border-t border-white/5">
      {/* Subtle organic ambient glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-soft/5 rounded-full blur-[140px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Text & Value Propositions */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            
            {/* Small Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-soft/20 bg-brand-secondary/40 backdrop-blur-md mb-6 w-fit"
            >
              <Cpu className="h-4 w-4 text-brand-soft" />
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-soft">
                {dict.badge}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6"
            >
              {dict.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-brand-light/70 leading-relaxed"
            >
              {dict.desc}
            </motion.p>

          </div>

          {/* Right Column: Dynamic Custom Software Showcase */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center relative">
            
            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-soft/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-2xl rounded-3xl overflow-hidden border border-[#d2d2d7]/30 bg-[#f5f5f7] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col relative"
            >
              {/* Browser Header Bar - Absolutely positioned overlay (Apple silver-light grey Toolbar) */}
              <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 py-3 select-none bg-[#e8e8ed]/95 backdrop-blur-md border-b border-[#d2d2d7]/50">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56] shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E] shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F] shadow-[inset_0_0_1px_rgba(0,0,0,0.15)]" />
                </div>
                <div className="px-6 py-1 rounded-md bg-white border border-[#d2d2d7]/50 text-[10px] text-[#515154] font-sans tracking-normal w-44 text-center truncate shadow-sm">
                  app.tunegocio.com
                </div>
                <div className="w-10" /> {/* Spacer */}
              </div>

              {/* Showcase Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#f5f5f7] pt-[28px]">
                <div className="absolute inset-x-0 bottom-0 top-[28px] bg-gradient-to-t from-[#f5f5f7]/95 via-transparent to-transparent z-10 pointer-events-none" />
                
                <AnimatePresence mode="popLayout">
                  <motion.img 
                    key={index}
                    src={images[index % images.length]} 
                    alt={`Custom Software Dashboard ${index + 1}`} 
                    initial={{ opacity: 0, scale: 1.1, y: 10 }}
                    animate={{ opacity: 1, scale: 1.03, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: -10 }}
                    transition={{ 
                      opacity: { duration: 1.0, ease: "easeInOut" },
                      scale: { duration: 5.5, ease: "easeOut" },
                      y: { duration: 1.0, ease: "easeInOut" }
                    }}
                    className="absolute inset-x-0 bottom-0 top-[28px] w-full h-[calc(100%-28px)] object-cover object-top"
                  />
                </AnimatePresence>

                {/* Dynamic Floating Glass Card (highly stylized SaaS widget) */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-6 mt-[10px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="px-6 py-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-[#d2d2d7]/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-sm text-center flex flex-col items-center gap-2"
                    >
                      {/* Category Accent Badge (Silver-grey, matching Apple's OS design style) */}
                      <span className="text-[9px] font-extrabold tracking-[0.22em] uppercase bg-[#e8e8ed] border border-[#d2d2d7]/60 text-[#515154] px-3 py-1 rounded-md shadow-sm select-none">
                        {index === 0 ? "RESTAURANTES" : index === 1 ? "EMPRESAS" : "SISTEMAS"}
                      </span>
                      
                      {/* Tagline Text */}
                      <p className="text-sm md:text-base font-bold text-[#1d1d1f] tracking-wide leading-relaxed mt-1">
                        {dict.sequence && dict.sequence[index]}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Dashboard Stats Indicators (Floating overlays to give a motion design aesthetic) */}
                <div className="absolute bottom-5 left-5 z-20 flex gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a2c2b]/95 backdrop-blur border border-brand-soft/20 text-[10px] text-brand-soft font-semibold shadow-xl">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-soft animate-ping" />
                    Procesos Optimizados
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
