"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteConfig, ui } from "@/data/content";
import { useScrollProgress } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none"
        style={{ originX: 0 }}
      >
        <motion.div
          className="h-full bg-gradient-brand"
          style={{ scaleX: progress, transformOrigin: "left" }}
        />
      </motion.div>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface-dark/85 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-gradient-to-b from-surface-dark/60 to-transparent"
        }`}
      >
        <nav
          className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 shrink-0 overflow-hidden rounded-xl bg-white p-1 ring-1 ring-white/20 shadow-sm">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-wide hidden sm:block leading-none">
              NIDI<span className="text-brand-light">PLAST</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-light transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hidden xl:flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={16} />
              {siteConfig.contact.phone}
            </a>
            <Link href="#contact" className="btn-primary !py-3 !px-6 text-sm">
              {ui.nav.requestQuote}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label={ui.nav.toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-surface-dark/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-surface-darker border-l border-white/10 p-8 pt-24"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-white/90 hover:text-brand-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary mt-4 text-center"
                >
                  {ui.nav.requestQuote}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
