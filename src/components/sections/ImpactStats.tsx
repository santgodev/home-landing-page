"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Helper component for animating numbers
const AnimatedNumber = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = parseInt(value, 10);

  useEffect(() => {
    if (isNaN(targetValue)) return;
    
    let start = 0;
    const duration = 2000;
    const increment = targetValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setDisplayValue(targetValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [targetValue]);

  return <span>{isNaN(targetValue) ? value : displayValue}</span>;
};

export function ImpactStats({ dict }: { dict: any }) {
  return (
    <section className="py-24 relative bg-brand-secondary border-y border-brand-accent/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {dict.stats.map((stat: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-light to-brand-soft mb-4">
                <AnimatedNumber value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-brand-light/80 text-lg font-medium leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
