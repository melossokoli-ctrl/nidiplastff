"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Shield,
  Palette,
  Award,
  CloudRain,
  type LucideIcon,
} from "lucide-react";
import { doorFeatures, projectImages, ui } from "@/data/content";
import { Reveal } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Palette,
  Award,
  CloudRain,
};

export default function EntranceDoors() {
  return (
    <section id="doors" className="section-padding bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="eyebrow text-brand mb-4 block">
              {ui.doors.label}
            </span>
            <h2 className="section-title text-surface-dark mb-6">
              {ui.doors.title}{" "}
              <span className="gradient-text">{ui.doors.titleHighlight}</span>
            </h2>
            <p className="section-subtitle mb-10">{ui.doors.subtitle}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {doorFeatures.map((feature, i) => {
                const Icon = iconMap[feature.icon];
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-glass transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-brand" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-surface-dark mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          <Reveal>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-glass-lg"
              >
                <Image
                  src={projectImages.door01}
                  alt={ui.doors.imageAlt1}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -left-8 w-56 aspect-square rounded-2xl overflow-hidden shadow-glass-lg hidden md:block border-4 border-white"
              >
                <Image
                  src={projectImages.door02}
                  alt={ui.doors.imageAlt2}
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 border border-brand/20 rounded-full hidden lg:block"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
