"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header({ dict }: { dict: any }) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-primary/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-accent to-brand-soft flex items-center justify-center shadow-[0_0_15px_rgba(142,182,155,0.4)]">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">{dict.logo}</span>
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

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/5 hover:border-white/20 shadow-lg">
            {dict.cta}
          </button>
          <button className="md:hidden p-2 text-brand-light hover:text-white transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
