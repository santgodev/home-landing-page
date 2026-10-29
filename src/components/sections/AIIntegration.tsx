"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, X, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function AIIntegration({ dict }: { dict: any }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    
    // Custom timing: 5s for Excel, 8s for Chat
    const duration = activeIndex === 0 ? 5000 : 8000;
    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev === 1 ? 0 : 1));
    }, duration);
    return () => clearTimeout(timeout);
  }, [activeIndex, isInView]);

  if (!dict) return null;

  return (
    <section className="py-12 md:py-20 relative bg-brand-primary overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-soft/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          
          {/* Centered Title Hierarchy */}
          <div className="w-full max-w-3xl text-center flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-soft/30 bg-brand-soft/10 text-brand-soft font-bold text-[10px] md:text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(142,182,155,0.2)] mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              SOLUCIONES QUE SE PAGAN SOLAS
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-white leading-[1.1] tracking-tight mb-4"
            >
              Integramos IA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-soft to-brand-light block mt-1">
                a tu software
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-brand-light/90 font-medium max-w-2xl mx-auto mb-6"
            >
              Unimos todos tus datos en un solo lugar. La IA revisa todo por ti y te avisa solo de lo que importa, como oportunidades de venta o problemas de inventario.
            </motion.p>
          </div>

          {/* Huge Visual/Image Side - Slider (The Hero Mockup) */}
          <motion.div 
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-[850px] relative min-h-[280px] sm:min-h-[400px] md:min-h-[450px] aspect-[4/3] md:aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-brand-primary"
          >
            <AnimatePresence mode="wait">
               {activeIndex === 0 && (
                 <motion.div 
                   key="slide0"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.02 }}
                   transition={{ duration: 0.4 }}
                   className="absolute inset-0"
                 >
                    <Image src="/excel_example.webp" fill className="object-cover object-left-top" alt="Caos en Excel" />
                    
                    {/* Context Header */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 scale-90 sm:scale-100 origin-top-left">
                      <div className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-md shadow-lg border border-red-500/50 px-3 py-1.5 rounded-lg">
                        <X className="w-4 h-4 text-white" />
                        <span className="text-xs text-white font-bold tracking-wide">EL PROBLEMA: CAOS EN EXCEL</span>
                      </div>
                    </div>

                    {/* Cinematic Transition Text */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none bg-black/40 backdrop-blur-[2px]"
                    >
                      <div className="text-center px-6">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] tracking-tight mb-2 sm:mb-4">
                          Le damos orden al <span className="text-red-400">caos</span> de Excel
                        </h3>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
                          Claridad, automatización y control total.
                        </p>
                      </div>
                    </motion.div>
                 </motion.div>
               )}

               {activeIndex === 1 && (
                 <motion.div 
                   key="slide1"
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.02 }}
                   transition={{ duration: 0.4 }}
                   className="absolute inset-0"
                 >
                    <Image src="/hero2.webp" fill className="object-cover object-left-top" alt="ERP Financiero con IA" />
                    
                    {/* Context Header */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 scale-90 sm:scale-100 origin-top-left">
                      <div className="inline-flex items-center gap-2 bg-brand-soft/90 backdrop-blur-md shadow-lg border border-brand-soft/50 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                        <span className="text-xs text-brand-primary font-bold tracking-wide">LA SOLUCIÓN: SOFTWARE A MEDIDA</span>
                      </div>
                    </div>

                    {/* AI Chat Conversation Overlay (Sleek & Strong Shadow) */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 150, delay: 0.8 }}
                      style={{ WebkitTransform: "translate3d(0,0,0)", WebkitBackfaceVisibility: "hidden" }}
                      className="absolute bottom-4 right-3 sm:bottom-6 sm:right-6 w-[250px] sm:w-[320px] p-3 sm:p-4 rounded-2xl border border-gray-400/50 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:backdrop-blur-xl bg-gray-100 sm:bg-gray-200/95 z-20 flex flex-col gap-2 sm:gap-3 transform-gpu"
                    >
                      {/* Header */}
                      <div className="flex items-center gap-2 sm:gap-3 border-b border-gray-300/50 pb-2 sm:pb-3 mb-1">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0 shadow-sm border border-yellow-300/50">
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                        </div>
                        <div>
                          <p className="text-[10px] sm:text-xs text-gray-900 font-bold uppercase tracking-wider">Asistente IA</p>
                          <p className="text-[8px] sm:text-[10px] text-green-600 font-semibold mt-0.5">Revisando números...</p>
                        </div>
                      </div>

                      {/* Human Message */}
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6 }}
                        className="flex justify-end"
                      >
                        <div className="bg-white rounded-xl rounded-tr-sm px-2.5 py-1.5 sm:px-3 sm:py-2 max-w-[90%] sm:max-w-[85%] border border-gray-300 shadow-sm">
                          <p className="text-gray-800 text-[9px] sm:text-[11px] font-medium leading-relaxed">¿Cómo nos fue con las ganancias de este mes?</p>
                        </div>
                      </motion.div>

                      {/* AI Response */}
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5 }}
                        className="flex justify-start"
                      >
                        <div className="bg-yellow-50 border border-yellow-300/80 rounded-xl rounded-tl-sm px-2.5 py-1.5 sm:px-3 sm:py-2 max-w-[95%] sm:max-w-[90%] shadow-sm">
                          <p className="text-gray-800 text-[9px] sm:text-[11px] leading-relaxed">
                            Muy bien, tu ganancia libre subió un <strong className="text-yellow-700 font-bold">24%</strong> porque vendimos más y gastamos menos en envíos.
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                 </motion.div>
               )}
            </AnimatePresence>

            {/* Slider Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-40 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
              <div 
                onClick={() => setActiveIndex(0)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${activeIndex === 0 ? "w-6 bg-red-400" : "w-1.5 bg-white/40 hover:bg-white/60"}`} 
              />
              <div 
                onClick={() => setActiveIndex(1)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${activeIndex === 1 ? "w-6 bg-brand-soft" : "w-1.5 bg-white/40 hover:bg-white/60"}`} 
              />
            </div>
          </motion.div>

          {/* Text Below Images: Antes vs Después & CTA */}
          <div className="w-full max-w-4xl flex flex-col items-center mt-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 w-full"
            >
              {/* Antes */}
              <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <span className="inline-block px-2 py-1 rounded bg-red-500/20 text-red-400 text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-2 md:mb-3">Tu vida hoy</span>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-center gap-2 text-brand-light/60 text-xs md:text-sm"><X className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400/70 flex-shrink-0" /> Buscando información en varios Excel</li>
                    <li className="flex items-center gap-2 text-brand-light/60 text-xs md:text-sm"><X className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400/70 flex-shrink-0" /> Trabajo manual muy demorado</li>
                    <li className="flex items-center gap-2 text-brand-light/60 text-xs md:text-sm"><X className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400/70 flex-shrink-0" /> Tomando decisiones casi a ciegas</li>
                  </ul>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="w-8 h-8 rounded-full bg-brand-soft/20 flex items-center justify-center rotate-90 sm:rotate-0 flex-shrink-0 border border-brand-soft/30">
                <ArrowRight className="w-4 h-4 text-brand-soft" />
              </div>

              {/* Después */}
              <div className="flex-1 w-full bg-brand-soft/10 border border-brand-soft/30 rounded-xl md:rounded-2xl p-3 md:p-5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-soft/5 group-hover:bg-brand-soft/10 transition-colors duration-500" />
                <div className="relative z-10">
                  <span className="inline-block px-2 py-1 rounded bg-brand-soft/20 text-brand-soft text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-2 md:mb-3">Con tu nuevo software</span>
                  <ul className="space-y-1 md:space-y-2">
                    <li className="flex items-center gap-2 text-white text-xs md:text-sm font-medium"><CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-soft flex-shrink-0" /> Toda tu empresa en 1 sola pantalla</li>
                    <li className="flex items-center gap-2 text-white text-xs md:text-sm font-medium"><CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-soft flex-shrink-0" /> Procesos automáticos y rápidos</li>
                    <li className="flex items-center gap-2 text-white text-xs md:text-sm font-medium"><CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-soft flex-shrink-0" /> La IA vigila y te da respuestas claras</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <a 
                href="https://wa.me/573102297981?text=Hola,%20quiero%20saber%20c%C3%B3mo%20integrar%20IA%20y%20automatizar%20procesos%20en%20mi%20negocio." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-soft text-brand-primary font-bold rounded-full hover:bg-brand-light transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(142,182,155,0.4)]"
              >
                {dict.cta || "Quiero ver cómo funcionaría en mi negocio"}
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
