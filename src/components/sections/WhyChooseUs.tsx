"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function AnimatedCounter({ value, duration = 2, suffix = "" }: { value: number, duration?: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });
  
  const displayValue = useTransform(springValue, (current) => Math.floor(current));
  
  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return (
    <span ref={ref} className="flex items-center">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Active Clients", value: 45, suffix: "" },
  { label: "Years of Experience", value: 10, suffix: "+" },
  { label: "Support Availability", value: 24, suffix: "/7" },
];

export function WhyChooseUs({ dict }: { dict: any }) {
  return (
    <section className="py-24 relative bg-brand-primary border-y border-brand-accent/30 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-brand-accent/50">
          {dict.stats.map((stat: any, index: number) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-mono">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-brand-light/60 text-sm md:text-base uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
