"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero({ dict }: { dict: any }) {
  const [isBlurred, setIsBlurred] = useState(true);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
    
    const blurDuration = 500;

    const initialTimeout = setTimeout(() => {
      setIsBlurred(false);
    }, blurDuration);

    return () => clearTimeout(initialTimeout);
  }, []);

  // Don't render animations until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-brand-primary">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Create_looping_video_dashboard_202606051542.mp4" type="video/mp4" />
        </video>
        
        {/* Dynamic Blur & Dark Overlay */}
        <motion.div 
          animate={{
            backdropFilter: isBlurred ? "blur(16px)" : "blur(0px)",
            backgroundColor: isBlurred ? "rgba(5, 31, 32, 0.85)" : "rgba(5, 31, 32, 0.35)"
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-10"
        />
      </div>

      {/* Ambient Light Reflections (Glassmorphism & Depth) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-soft/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-green-secondary/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      {/* Main Content Area */}
      <div className="container relative z-20 mx-auto px-6 flex-1 flex flex-col items-center justify-center text-center mt-20">
        


        {/* Static Title and Subtitle */}
        <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] text-glow"
            style={{ textShadow: "0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(142,182,155,0.3)" }}
          >
            {dict.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-brand-light/90 max-w-3xl font-medium"
          >
            {dict.subtitle}
          </motion.p>
        </div>

      </div>

      {/* Persistent Bottom Bar with CTAs & Trust Indicators */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-20 w-full pb-10 pt-16 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-transparent"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button size="lg" className="h-16 px-10 text-xl bg-white text-brand-primary font-bold rounded-full w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all hover:bg-brand-light hover:scale-105 group">
              {dict.primaryCTA}
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="ghost" className="h-16 px-6 text-lg text-white/80 hover:text-white hover:bg-white/10 rounded-full w-full sm:w-auto font-medium transition-all group">
              <Play className="mr-3 h-5 w-5 text-brand-soft group-hover:scale-110 transition-transform" fill="currentColor" />
              {dict.secondaryCTA}
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-80">
            {dict.indicators && dict.indicators.map((indicator: string, index: number) => (
              <div key={index} className="flex items-center gap-3 text-sm md:text-base font-medium text-white/80">
                <CheckCircle2 className="h-5 w-5 text-brand-soft" />
                {indicator}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
