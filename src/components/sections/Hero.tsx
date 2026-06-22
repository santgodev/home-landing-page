"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero({ dict }: { dict: any }) {
  const [step, setStep] = useState(0);
  const [isBlurred, setIsBlurred] = useState(true);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Reduce speed by 20%
    }
    
    // Video normally loops at 8s. At 0.8x speed, it loops exactly at 10s!
    // A 5s cycle fits exactly twice per loop, perfectly hiding the 10s video cut.
    const totalCycle = 5000;
    const blurDuration = 500;

    const initialTimeout = setTimeout(() => {
      setIsBlurred(false);
    }, blurDuration);

    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
      setIsBlurred(true);
      
      setTimeout(() => {
        setIsBlurred(false);
      }, blurDuration);
    }, totalCycle);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [dict.sequence]);

  const currentIndex = dict.sequence ? step % dict.sequence.length : 0;

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
            backgroundColor: isBlurred ? "rgba(5, 31, 32, 0.7)" : "rgba(5, 31, 32, 0.2)"
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
        
        {/* Subtle Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 glass mb-8 shadow-2xl"
        >
          <span className="flex h-2.5 w-2.5 rounded-full bg-brand-soft animate-pulse shadow-[0_0_10px_rgba(142,182,155,0.8)]" />
          <span className="text-sm font-semibold text-white/90 tracking-wide uppercase">{dict.badge}</span>
        </motion.div>

        {/* Animated Sequence Text */}
        <div className="h-[180px] sm:h-[220px] md:h-[280px] flex items-center justify-center w-full max-w-6xl">
          <AnimatePresence mode="wait">
              <motion.h1
                key={step}
                initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Cinematic premium easing
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] text-glow"
                style={{ textShadow: "0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(142,182,155,0.3)" }}
              >
                {dict.sequence && dict.sequence[currentIndex]}
              </motion.h1>
          </AnimatePresence>
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
            <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-white/20 text-white bg-black/20 hover:bg-white/10 rounded-full w-full sm:w-auto backdrop-blur-lg font-semibold transition-all hover:border-white/40 group glass">
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
