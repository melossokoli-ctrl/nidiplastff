"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { projectImages, siteConfig, ui } from "@/data/content";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Parallax me framer-motion (më parë ky efekt kërkonte GSAP + ScrollTrigger,
  // rreth 70 KB JavaScript shtesë vetëm për këtë).
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-[100svh] min-h-[620px] overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={projectImages.hero}
          alt={siteConfig.name}
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark/85 via-brand-dark/40 to-surface-dark/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_0%,rgba(15,23,42,0.55)_75%)]" />
      </motion.div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.07] backdrop-blur-sm text-white/80 text-xs tracking-[0.18em] uppercase font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-light" />
            {ui.hero.badge}
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white leading-[1.08] text-balance mb-6">
            {ui.hero.title}{" "}
            <span className="gradient-text">{ui.hero.titleHighlight}</span>
          </h1>

          <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed mb-10">
            {ui.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="btn-primary">
              {ui.hero.ctaQuote}
            </Link>
            <Link href="#products" className="btn-secondary">
              {ui.hero.ctaProducts}
            </Link>
          </div>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">
              {ui.hero.scroll}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
