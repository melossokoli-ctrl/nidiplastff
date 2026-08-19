"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Truck, Wrench, MapPin, type LucideIcon } from "lucide-react";
import { deliveryHighlights, exportPhotos, ui } from "@/data/content";
import { Reveal } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Truck,
  Wrench,
  MapPin,
};

export default function Delivery() {
  return (
    <section
      id="delivery"
      className="section-padding bg-surface-dark text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 24px,
              rgba(77,163,255,0.25) 24px,
              rgba(77,163,255,0.25) 25px
            )`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <Reveal className="text-center mb-16">
          <span className="eyebrow text-brand-light mb-4 block">
            {ui.delivery.label}
          </span>
          <h2 className="section-title text-white mb-6">
            {ui.delivery.title}{" "}
            <span className="gradient-text">{ui.delivery.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto text-white/60">
            {ui.delivery.subtitle}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliveryHighlights.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-8 group hover:shadow-glow transition-shadow duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-brand-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Dritare{" "}
              <span className="gradient-text">PVC & Alumini</span>
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Pamje nga eksporti ynë — dritare të prodhuara dhe të paketuara
              profesionalisht për transport në të gjithë Evropën.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exportPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {photo.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
