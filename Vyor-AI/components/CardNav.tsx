"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  ariaLabel?: string;
  href?: string;
}

interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

export interface CardNavProps {
  logo?: string;
  logoAlt?: string;
  items: NavItem[];
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  ease?: string;
  theme?: "light" | "dark";
}

export default function CardNav({
  logo,
  logoAlt = "Company Logo",
  items,
  baseColor = "#fff",
  menuColor = "#000",
  buttonBgColor = "#111",
  buttonTextColor = "#fff",
  ease = "power3.out",
  theme = "light",
}: CardNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const transitionSettings = {
    ease: [0.215, 0.61, 0.355, 1],
    duration: 0.5,
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-[100] flex justify-center pt-4 md:pt-6 px-4 md:px-8 pointer-events-none">
        <nav 
          className="pointer-events-auto rounded-[3rem] px-8 py-5 md:px-12 md:py-6 flex items-center justify-between w-full max-w-[1440px] shadow-[0_8px_30px_rgb(0,0,0,0.5)] border border-white/10 relative transition-all duration-300 backdrop-blur-2xl"
          style={{ backgroundColor: menuColor }}
        >
          {/* LOGO */}
          <Link href="/" className="z-50 flex items-center shrink-0">
            {logo ? (
              <div className="bg-white/5 p-2 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5">
                <Image src={logo} alt={logoAlt} width={120} height={36} className="h-7 md:h-9 w-auto object-contain" priority />
              </div>
            ) : (
              <span className="font-extrabold text-xl md:text-2xl tracking-tight" style={{ color: baseColor }}>
                {logoAlt}
              </span>
            )}
          </Link>

          {/* DESKTOP ITEMS */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-2 z-50 relative">
            {items.map((item, idx) => (
              <div
                key={item.label}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-6 py-3 cursor-pointer"
              >
                <span
                  className="text-[16px] font-bold tracking-wide uppercase transition-colors"
                  style={{ color: hoveredIndex === idx ? buttonBgColor : baseColor }}
                >
                  {item.label}
                </span>

                {/* CARD DROPDOWN */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={transitionSettings}
                      className="absolute left-1/2 -translate-x-1/2 top-[120%] w-64 rounded-3xl p-6 shadow-2xl overflow-hidden border border-white/10"
                      style={{ backgroundColor: item.bgColor, color: item.textColor }}
                    >
                      <div className="flex flex-col gap-4 relative z-10">
                        {item.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href || "#"}
                            aria-label={link.ariaLabel}
                            className="hover:opacity-60 transition-opacity font-bold tracking-tight text-lg"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* DESKTOP CTA BUTTON & MOBILE TOGGLE */}
          <div className="flex items-center gap-4 z-50 relative pointer-events-auto">
            <button
              className="hidden md:block relative px-8 py-3.5 rounded-full font-black text-sm tracking-widest uppercase overflow-hidden hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            >
              <span className="relative z-10">Get Access</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
            </button>
            
            <button
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-colors border border-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="lg:hidden fixed inset-0 bg-[#030712]/95 backdrop-blur-3xl pt-28 pb-10 px-6 sm:px-10 z-[90] overflow-y-auto"
          >
            {/* Ambient Background Glow in Menu */}
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              {items.map((item, idx) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5, ease: "easeOut" }}
                  className="bg-white/[0.03] rounded-[2rem] p-6 border border-white/[0.05] shadow-lg"
                >
                  <h3 className="text-emerald-400 font-black uppercase text-[10px] tracking-[0.3em] mb-5 border-l-2 border-emerald-500/50 pl-3">
                    {item.label}
                  </h3>
                  <div className="flex flex-col gap-5">
                    {item.links.map((link, lIdx) => (
                      <Link
                        key={link.label}
                        href={link.href || "#"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-white text-xl font-medium hover:text-emerald-300 transition-colors flex justify-between items-center group"
                      >
                        {link.label}
                        <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-emerald-500 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <button
                  className="mt-4 w-full py-5 rounded-[2rem] font-black text-sm tracking-[0.2em] uppercase bg-white text-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
                >
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
