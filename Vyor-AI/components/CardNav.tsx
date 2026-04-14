"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

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

  const handleMouseEnter = useCallback((idx: number) => setHoveredIndex(idx), []);
  const handleMouseLeave = useCallback(() => setHoveredIndex(null), []);
  const toggleMobile = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-[100] flex justify-center pt-4 md:pt-6 px-4 md:px-8 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="pointer-events-auto rounded-[3rem] px-8 py-4 md:px-12 md:py-5 flex items-center justify-between w-full max-w-[1440px] shadow-[0_8px_40px_rgba(0,0,0,0.6)] border border-white/[0.08] relative backdrop-blur-2xl"
          style={{ backgroundColor: menuColor }}
        >
          {/* Subtle top highlight */}
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />

          {/* LOGO */}
          <Link href="/" className="z-50 flex items-center shrink-0 group">
            {logo ? (
              <div className="bg-white/5 p-2 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-200 border border-white/5 group-hover:border-white/10 group-hover:shadow-[0_0_20px_rgba(124,92,252,0.15)]">
                <Image src={logo} alt={logoAlt} width={120} height={36} className="h-7 md:h-9 w-auto object-contain" priority />
              </div>
            ) : (
              <span className="font-extrabold text-xl md:text-2xl tracking-tight" style={{ color: baseColor }}>
                {logoAlt}
              </span>
            )}
          </Link>

          {/* DESKTOP ITEMS */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-1 z-50 relative">
            {items.map((item, idx) => (
              <div
                key={item.label}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                className="relative px-5 py-3 cursor-pointer"
              >
                {/* Hover pill background */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 rounded-2xl bg-white/[0.08]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </AnimatePresence>

                <span
                  className="relative z-10 text-[13px] font-bold tracking-[0.12em] uppercase transition-colors duration-150"
                  style={{ color: hoveredIndex === idx ? "#A78BFA" : baseColor }}
                >
                  {item.label}
                </span>

                {/* CARD DROPDOWN */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{
                        duration: 0.18,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="absolute left-1/2 -translate-x-1/2 top-[110%] w-56 rounded-2xl p-1 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden border border-white/[0.08] backdrop-blur-xl"
                      style={{ backgroundColor: item.bgColor }}
                    >
                      {/* Dropdown inner glow */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vyor-purple/30 to-transparent" />

                      <div className="flex flex-col gap-0.5 relative z-10">
                        {item.links.map((link, linkIdx) => (
                          <Link
                            key={link.label}
                            href={link.href || "#"}
                            aria-label={link.ariaLabel}
                            className="group/link flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/[0.06] transition-all duration-150 text-white/80 hover:text-white"
                          >
                            <span className="font-semibold tracking-tight text-[15px]">
                              {link.label}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-60 group-hover/link:translate-x-0 transition-all duration-150" />
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
            <Link
              href="#"
              className="hidden md:flex items-center gap-2 relative px-7 py-3 rounded-full font-bold text-sm tracking-wider uppercase overflow-hidden hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 bg-gradient-to-r from-vyor-purple to-vyor-indigo text-white shadow-[0_0_25px_rgba(124,92,252,0.35)] hover:shadow-[0_0_35px_rgba(124,92,252,0.5)]"
            >
              <span className="relative z-10">Get Access</span>
            </Link>
            
            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/[0.06] text-white backdrop-blur-md hover:bg-white/[0.12] active:scale-90 transition-all duration-200 border border-white/[0.08]"
              onClick={toggleMobile}
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.1 } }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-[#0A0F1C]/98 backdrop-blur-3xl pt-24 pb-10 px-5 sm:px-8 z-[90] overflow-y-auto"
          >
            {/* Ambient Background Glows */}
            <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-vyor-purple/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[15%] left-[-5%] w-[250px] h-[250px] bg-vyor-indigo/8 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-4 relative z-10">
              {items.map((item, idx) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/[0.03] rounded-2xl p-5 border border-white/[0.06] shadow-lg"
                >
                  <h3 className="text-vyor-violet font-black uppercase text-[10px] tracking-[0.3em] mb-4 flex items-center gap-2">
                    <div className="w-4 h-px bg-vyor-purple/60" />
                    {item.label}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href || "#"}
                        onClick={closeMobile}
                        className="group flex items-center justify-between text-white/80 hover:text-white py-3 px-3 rounded-xl hover:bg-white/[0.04] transition-all duration-150 active:scale-[0.98]"
                      >
                        <span className="text-lg font-medium">{link.label}</span>
                        <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-vyor-violet group-hover:translate-x-0.5 transition-all duration-150" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + 0.05 * items.length, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  className="mt-2 w-full py-4 rounded-2xl font-bold text-sm tracking-[0.15em] uppercase bg-gradient-to-r from-vyor-purple to-vyor-indigo text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_10px_40px_-10px_rgba(124,92,252,0.4)]"
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
