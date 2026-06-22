"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, PhoneCall } from "lucide-react";

export function ContactCTA({ dict }: { dict: any }) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate distance from center of button
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    // Magnetic pull effect (weaker at edges)
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className="py-40 relative bg-brand-primary overflow-hidden flex items-center justify-center">
      {/* Massive Glowing Background Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[80vw] max-w-4xl h-[500px] bg-brand-soft/20 rounded-[100%] blur-[120px]"
        />
        <div className="absolute w-[40vw] max-w-xl h-[300px] bg-brand-light/20 rounded-[100%] blur-[100px] mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8 leading-tight">
            {dict.finalTitle1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-soft to-brand-light">{dict.finalTitleHighlight}</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-brand-light/80 mb-16 max-w-3xl mx-auto">
            {dict.finalSub}
          </p>
          
          <motion.button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            className="group relative inline-flex items-center justify-center h-20 px-12 text-xl md:text-2xl font-bold rounded-full bg-brand-light text-brand-primary hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(218,241,222,0.4)] hover:shadow-[0_0_60px_rgba(218,241,222,0.6)]"
          >
            <PhoneCall className="mr-4 h-6 w-6" />
            {dict.finalBtn}
            <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            
            {/* Inner glow on hover */}
            <div className="absolute inset-0 rounded-full ring-2 ring-brand-soft opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
