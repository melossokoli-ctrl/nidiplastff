"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Expand, Sparkles } from "lucide-react";
import { galleryPhotos, ui, type GalleryPhoto } from "@/data/content";
import { Reveal } from "@/components/ui/AnimatedSection";

type GalleryGridProps = {
  showHeader?: boolean;
  className?: string;
  variant?: "dark" | "light";
};

const featuredIds = [12, 1, 14, 6];

export default function GalleryGrid({
  showHeader = true,
  className = "",
  variant = "dark",
}: GalleryGridProps) {
  const isDark = variant === "dark";
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const featured = useMemo(
    () => galleryPhotos.filter((p) => featuredIds.includes(p.id)),
    []
  );

  const rest = useMemo(
    () => galleryPhotos.filter((p) => !featuredIds.includes(p.id)),
    []
  );

  const activePhoto =
    activeIndex !== null ? galleryPhotos[activeIndex] : null;

  const openPhoto = (photo: GalleryPhoto) => {
    const idx = galleryPhotos.findIndex((p) => p.id === photo.id);
    if (idx !== -1) setActiveIndex(idx);
  };

  const goTo = useCallback((index: number) => {
    const len = galleryPhotos.length;
    setActiveIndex(((index % len) + len) % len);
  }, []);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goTo(activeIndex - 1);
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, goTo]);

  return (
    <>
      {showHeader && (
        <Reveal className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-brand-light font-semibold text-sm tracking-widest uppercase mb-4">
            <Sparkles size={14} />
            {ui.gallery.label}
          </span>
          <h2
            className={`section-title mb-6 ${isDark ? "text-white" : "text-surface-dark"}`}
          >
            {ui.gallery.title}{" "}
            <span className="gradient-text">{ui.gallery.titleHighlight}</span>
          </h2>
          <p
            className={`section-subtitle mx-auto ${isDark ? "text-white/60" : "text-gray-500"}`}
          >
            {ui.gallery.subtitle}
          </p>
        </Reveal>
      )}

      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 ${className}`}>
        {featured.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => openPhoto(photo)}
            className={`relative rounded-2xl overflow-hidden group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light ${
              i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"
            }`}
            aria-label={`${ui.gallery.viewPhoto}: ${photo.title}`}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              sizes={i === 0 ? "50vw" : "25vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/10 to-transparent" />
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Expand size={14} className="text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-display text-white text-sm sm:text-base font-semibold line-clamp-2">
                {photo.title}
              </h3>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {rest.map((photo) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => openPhoto(photo)}
            className="relative aspect-[3/4] rounded-xl overflow-hidden group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
            aria-label={`${ui.gallery.viewPhoto}: ${photo.title}`}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              sizes="20vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-surface-dark/0 group-hover:bg-surface-dark/50 transition-colors duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-surface-dark/90 to-transparent">
              <p className="text-white text-xs font-medium line-clamp-2">
                {photo.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activePhoto && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.title}
            onClick={close}
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
                onClick={close}
                className="absolute -top-10 sm:-top-12 right-0 text-white/70 hover:text-white transition-colors z-10"
                aria-label={ui.gallery.close}
              >
                <X size={28} />
              </button>

              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 ring-1 ring-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePhoto.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activePhoto.src}
                      alt={activePhoto.title}
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
                    {activePhoto.title}
                  </h3>
                  <p className="text-white/50 text-sm mt-2">
                    {activeIndex + 1} {ui.gallery.of} {galleryPhotos.length}
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex - 1)}
                    className="p-3 rounded-full glass text-white hover:bg-white/20 transition-colors"
                    aria-label={ui.gallery.prev}
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex + 1)}
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
    </>
  );
}

