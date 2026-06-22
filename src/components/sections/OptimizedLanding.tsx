"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Zap, Search, Layout, MessageSquare, TrendingUp, Cpu } from "lucide-react";

const getIconForFeature = (id: string) => {
  switch (id) {
    case "hero":
      return <TrendingUp className="h-6 w-6" strokeWidth={1.5} />;
    case "seo":
      return <Search className="h-6 w-6" strokeWidth={1.5} />;
    case "speed":
      return <Zap className="h-6 w-6" strokeWidth={1.5} />;
    case "whatsapp":
      return <MessageSquare className="h-6 w-6" strokeWidth={1.5} />;
    case "automation":
      return <Cpu className="h-6 w-6" strokeWidth={1.5} />;
    case "design":
      return <Layout className="h-6 w-6" strokeWidth={1.5} />;
    default:
      return <Globe className="h-6 w-6" strokeWidth={1.5} />;
  }
};

const images = [
  "/landing1.png",
  "/landing2.png",
  "/landing3.png"
];

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  metric: string;
  metricLabel: string;
  highlight?: boolean;
}

interface OptimizedLandingProps {
  dict: {
    title1: string;
    titleHighlight: string;
    features: FeatureItem[];
  };
}

export function OptimizedLanding({ dict }: OptimizedLandingProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const delay = index === images.length - 1 ? 8000 : 4000;
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section className="py-24 relative bg-brand-secondary overflow-hidden border-t border-white/5">
      {/* Subtle ambient glow circles */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-soft/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-green-secondary/5 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in"
          >
            {dict.title1} <span className="text-brand-soft">{dict.titleHighlight}</span>
          </motion.h2>
        </div>

        {/* Hero Landing Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(142,182,155,0.15)] border border-brand-accent/50 group bg-brand-secondary aspect-[16/10] w-full"
        >
          <div className="absolute inset-0 bg-brand-soft/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
          
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={index}
              src={images[index]} 
              alt={`Optimized Landing Page Design ${index + 1}`} 
              initial={{ opacity: 0, scale: 1.08, y: 15 }}
              animate={{ opacity: 1, scale: 1.02, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ 
                opacity: { duration: 1.0, ease: "easeInOut" },
                scale: { duration: 5.5, ease: "easeOut" },
                y: { duration: 1.0, ease: "easeInOut" }
              }}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </AnimatePresence>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === idx ? "w-6 bg-brand-soft" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Bento Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto relative z-10">
          {dict.features.map((feature: FeatureItem, index: number) => {
            const isHero = feature.highlight;
            
            // Bento Grid spans
            const cardClass = isHero
              ? "col-span-1 md:col-span-2 flex flex-col md:flex-row justify-between items-start md:items-stretch"
              : "col-span-1 flex flex-col justify-between";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={`${cardClass} p-8 bg-[#082221]/90 backdrop-blur-2xl border border-white/[0.04] rounded-3xl hover:border-brand-soft/30 hover:bg-[#0a2c2b] transition-all duration-500 group min-h-[220px]`}
              >
                {isHero ? (
                  // WIDE CARDS (Hero & Bottom full-width layouts)
                  <>
                    <div className="flex flex-col justify-between flex-1 pr-0 md:pr-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-brand-soft">
                          {getIconForFeature(feature.id)}
                        </div>
                        <h4 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-sm text-brand-light/60 leading-relaxed max-w-xl">
                        {feature.desc}
                      </p>
                    </div>
                    
                    <div className="flex flex-col justify-end items-start md:items-end mt-6 md:mt-0 select-none border-t md:border-t-0 md:border-l border-white/[0.05] pt-4 md:pt-0 md:pl-8 min-w-[140px]">
                      <div className="text-5xl md:text-6xl font-light text-brand-soft tracking-tighter text-glow">
                        {feature.metric}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-brand-light/40 mt-1 font-bold">
                        {feature.metricLabel}
                      </div>
                    </div>
                  </>
                ) : (
                  // SQUARE CARDS (Standard 1-column layouts)
                  <>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-brand-soft">
                          {getIconForFeature(feature.id)}
                        </div>
                        <h4 className="text-base md:text-lg font-semibold text-white tracking-tight">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-sm text-brand-light/60 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                    
                    <div className="mt-6 select-none flex justify-between items-end border-t border-white/[0.05] pt-4">
                      <div className="text-[9px] uppercase tracking-wider text-brand-light/40 font-bold max-w-[100px] leading-tight">
                        {feature.metricLabel}
                      </div>
                      <div className="text-3xl font-light text-brand-soft tracking-tight">
                        {feature.metric}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
