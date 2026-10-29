"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero({ dict }: { dict: any }) {
  const [isInitialBlurred, setIsInitialBlurred] = useState(true);
  const [isLooping, setIsLooping] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Cinematic entrance unblur
    const initialTimeout = setTimeout(() => {
      setIsInitialBlurred(false);
    }, 500);

    const video = videoRef.current;
    if (!video) return () => clearTimeout(initialTimeout);

    video.playbackRate = 0.8;

    // Blur just before the end of each loop
    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const timeLeft = video.duration - video.currentTime;
      setIsLooping(timeLeft <= 0.5);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      clearTimeout(initialTimeout);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-brand-primary">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.webp"
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/0622.mp4" type="video/mp4" />
        </video>
        
        {/* Dynamic Blur & Dark Overlay (Cinematic Entrance) */}
        <motion.div 
          animate={{
            backdropFilter: isInitialBlurred ? "blur(16px)" : "blur(0px)",
            backgroundColor: isInitialBlurred ? "rgba(5, 31, 32, 0.85)" : "rgba(5, 31, 32, 0.35)"
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-10 pointer-events-none"
        />
      </div>

      {/* Ambient Light Reflections (Glassmorphism & Depth) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-soft/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-green-secondary/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      {/* Main Content Area */}
      <div className="container relative z-20 mx-auto px-5 flex-1 flex flex-col items-center justify-center text-center mt-16 md:mt-20">
        


        {/* Static Title and Subtitle */}
        <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-3 md:gap-6">
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] text-glow"
            style={{ textShadow: "0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(142,182,155,0.3)" }}
          >
            {dict.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-lg md:text-xl text-brand-light/90 max-w-3xl font-medium"
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
        className="relative z-20 w-full pb-20 md:pb-10 pt-0 md:pt-16 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-transparent"
      >
        <div className="container mx-auto px-5">
          {/* Buttons: only primary on mobile */}
          <div className="flex flex-row items-center justify-center gap-3 md:gap-6 mb-6 md:mb-12">
            <Button size="lg" className="h-12 md:h-16 px-6 md:px-10 text-base md:text-xl bg-white text-brand-primary font-bold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all hover:bg-brand-light hover:scale-105 group" onClick={() => window.open('https://wa.me/573102297981?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20de%20software%20a%20medida.', '_blank')}>
              {dict.primaryCTA}
              <ArrowRight className="ml-2 h-4 w-4 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* Secondary button hidden on mobile */}
            <Button size="lg" variant="ghost" className="hidden md:inline-flex h-16 px-6 text-lg text-white/80 hover:text-white hover:bg-white/10 rounded-full font-medium transition-all group" onClick={() => window.open('https://wa.me/573102297981?text=Hola,%20me%20gustar%C3%ADa%20ver%20una%20demostraci%C3%B3n%20de%20sus%20sistemas%20y%20apps.', '_blank')}>
              <Play className="mr-2 h-5 w-5 text-brand-soft group-hover:scale-110 transition-transform" fill="currentColor" />
              {dict.secondaryCTA}
            </Button>
          </div>

          {/* Trust indicators: show only 3 on mobile */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-80">
            {dict.indicators && dict.indicators.map((indicator: string, index: number) => (
              <div key={index} className={`flex items-center gap-2 text-xs md:text-base font-medium text-white/80 ${index >= 3 ? 'hidden md:flex' : ''}`}>
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-brand-soft flex-shrink-0" />
                {indicator}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
