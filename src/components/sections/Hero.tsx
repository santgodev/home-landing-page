"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero({ dict }: { dict: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // A subtle ambient particle effect or gradient animation can be added here with Canvas or GSAP if needed,
    // but we can achieve a great look with CSS and Framer Motion first.
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-primary"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/40 via-brand-primary to-brand-primary opacity-80" />
        
        {/* Animated glowing orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-soft/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-green-secondary/30 rounded-full blur-[150px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/50 bg-brand-secondary/50 backdrop-blur-md mb-4">
            <span className="flex h-2 w-2 rounded-full bg-brand-soft animate-pulse" />
            <span className="text-sm font-medium text-brand-light">{dict.badge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            {dict.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-soft to-brand-light">{dict.titleHighlight}</span> {dict.title2}
          </h1>
          
          <p className="text-lg md:text-xl text-brand-light/80 max-w-2xl mx-auto leading-relaxed">
            {dict.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="h-14 px-8 text-lg bg-brand-soft hover:bg-brand-light text-brand-primary font-semibold rounded-full w-full sm:w-auto shadow-[0_0_20px_rgba(142,182,155,0.4)] transition-all">
              {dict.scheduleMeeting}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-brand-accent text-brand-light hover:bg-brand-secondary/50 rounded-full w-full sm:w-auto glass">
              <Play className="mr-2 h-5 w-5" />
              {dict.viewProjects}
            </Button>
          </div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-16 flex flex-col items-center gap-6"
          >
            <p className="text-sm text-brand-light/60 uppercase tracking-widest font-medium">{dict.trustedBy}</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Replace with actual logos, using placeholders for now */}
              {['Acme Corp', 'Global Tech', 'Nexus', 'Stark Ind'].map((name) => (
                <div key={name} className="flex items-center gap-2 text-xl font-bold text-brand-light">
                  <ShieldCheck className="h-6 w-6 text-brand-soft" />
                  {name}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
    </section>
  );
}
