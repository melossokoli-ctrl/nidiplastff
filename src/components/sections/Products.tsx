"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Check, X, ChevronLeft, Expand } from "lucide-react";
import { productCategories, ui } from "@/data/content";
import { Reveal } from "@/components/ui/AnimatedSection";

export default function Products() {
  const [activeId, setActiveId] = useState(productCategories[0].id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const active = productCategories.find((p) => p.id === activeId)!;
  const allImages = [active.image, ...active.gallery];

  const selectCategory = (id: string) => {
    setActiveId(id);
    setLightboxIndex(null);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goTo = useCallback(
    (index: number) => {
      const len = allImages.length;
      setLightboxIndex(((index % len) + len) % len);
    },
    [allImages.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goTo(lightboxIndex - 1);
      if (e.key === "ArrowRight") goTo(lightboxIndex + 1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, closeLightbox, goTo]);

  return (
    <section
      id="products"
      className="section-padding bg-surface-darker text-white border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="eyebrow text-brand-light mb-4 block">
            {ui.products.label}
          </span>
          <h2 className="section-title text-white mb-6">
            {ui.products.title}{" "}
            <span className="gradient-text">{ui.products.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto text-white/60">
            {ui.products.subtitle}
          </p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => selectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeId === cat.id
                  ? "bg-gradient-brand text-white shadow-glow"
                  : "glass text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div className="relative group">
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
                aria-label={`${ui.gallery.viewPhoto}: ${active.title}`}
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/60 to-transparent" />
                <div className="absolute top-4 right-4 glass rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand size={18} aria-hidden />
                </div>
              </button>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {active.gallery.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => openLightbox(i + 1)}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-brand-light transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
                    aria-label={`${ui.gallery.viewPhoto} ${i + 2}`}
                  >
                    <Image
                      src={img}
                      alt={`${active.title} ${i + 2}`}
                      fill
                      sizes="(max-width: 1024px) 33vw, 200px"
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {active.title}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {active.description}
              </p>

              <div className="glass rounded-2xl p-6 mb-8">
                <h4 className="font-semibold text-brand-light mb-4 text-sm tracking-wider uppercase">
                  {ui.products.specs}
                </h4>
                <ul className="space-y-3">
                  {active.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-white/80">
                      <span className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                        <Check size={14} className="text-brand-light" />
                      </span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className="btn-primary inline-flex group">
                {ui.products.getQuote}
                <ChevronRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => selectCategory(cat.id)}
              className="glass rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h4 className="font-display font-semibold text-lg group-hover:text-brand-light transition-colors">
                  {cat.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={closeLightbox}
          >
            <div className="absolute inset-0 bg-surface-dark/95 backdrop-blur-xl" />

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 26 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute -top-10 sm:-top-12 right-0 text-white/70 hover:text-white transition-colors z-10"
                aria-label={ui.gallery.close}
              >
                <X size={28} />
              </button>

              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-black/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={allImages[lightboxIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={allImages[lightboxIndex]}
                      alt={active.title}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-5">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {active.title}
                  </h3>
                  <p className="text-white/50 text-sm mt-2">
                    {lightboxIndex + 1} {ui.gallery.of} {allImages.length}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => goTo(lightboxIndex - 1)}
                    className="p-3 rounded-full glass text-white hover:bg-white/20 transition-colors"
                    aria-label={ui.gallery.prev}
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(lightboxIndex + 1)}
                    className="p-3 rounded-full glass text-white hover:bg-white/20 transition-colors"
                    aria-label={ui.gallery.next}
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

