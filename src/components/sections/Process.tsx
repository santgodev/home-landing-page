"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Discovery", description: "Understanding your business goals, target audience, and technical requirements." },
  { title: "Planning", description: "Architecting the solution and defining the technical roadmap and milestones." },
  { title: "Design", description: "Creating premium user interfaces and seamless user experiences." },
  { title: "Development", description: "Writing scalable, secure, and performant code using modern stacks." },
  { title: "Testing", description: "Rigorous quality assurance, automated testing, and security audits." },
  { title: "Launch", description: "Smooth deployment to production and continuous post-launch support." },
];

export function Process({ dict }: { dict: any }) {
  return (
    <section className="py-32 relative bg-brand-primary">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {dict.title1} <span className="text-brand-soft">{dict.titleHighlight}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-light/70 text-lg max-w-2xl mx-auto"
          >
            {dict.description}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated vertical line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-brand-accent/50 -translate-x-1/2">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-brand-soft via-brand-light to-transparent"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12">
            {dict.steps.map((step: any, index: number) => (
              <div key={step.title} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.2 }}
                  className="absolute left-[27px] md:left-1/2 w-4 h-4 rounded-full bg-brand-primary border-2 border-brand-soft -translate-x-1/2 shadow-[0_0_10px_rgba(142,182,155,0.5)] z-10"
                />

                <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                    className="p-6 rounded-2xl glass-card border border-brand-accent/30 hover:border-brand-soft/50 transition-colors"
                  >
                    <span className="text-brand-soft text-sm font-bold tracking-widest uppercase mb-2 block">{dict.stepPrefix} 0{index + 1}</span>
                    <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-brand-light/70">{step.description}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
