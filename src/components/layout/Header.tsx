"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Header({ dict }: { dict: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-brand-primary/95 backdrop-blur-lg border-b border-white/5"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 relative z-[60] group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-soft flex items-center justify-center shadow-[0_0_15px_rgba(142,182,155,0.4)] group-hover:shadow-[0_0_20px_rgba(142,182,155,0.6)] transition-all">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Eveen<span className="text-brand-soft uppercase tracking-normal">ia</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {dict.links.map((link: string, index: number) => (
              <Link 
                key={index} 
                href="#" 
                className="text-sm font-medium text-brand-light/70 hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 relative z-[60]">
            <button 
              onClick={() => window.open('https://wa.me/573102297981?text=Hola,%20me%20gustar%C3%ADa%20empezar%20a%20digitalizar%20mi%20empresa.', '_blank')}
              className="hidden md:block px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/5 hover:border-white/20 shadow-lg"
            >
              {dict.cta}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-brand-light hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-primary/98 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col gap-6 text-center mt-10">
              {dict.links.map((link: string, index: number) => (
                <Link
                  key={index}
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-white tracking-tight py-2 border-b border-white/5"
                >
                  {link}
                </Link>
              ))}
            </nav>
            <div className="mt-auto mb-12 flex justify-center">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open('https://wa.me/573102297981?text=Hola,%20me%20gustar%C3%ADa%20empezar%20a%20digitalizar%20mi%20empresa.', '_blank');
                }}
                className="w-full max-w-sm px-6 py-4 rounded-full bg-brand-soft text-brand-primary font-bold text-lg shadow-lg"
              >
                {dict.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
