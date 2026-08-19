"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Gem,
  Wrench,
  Truck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { whyChoose, ui } from "@/data/content";
import { Reveal } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  Gem,
  Wrench,
  Truck,
  ShieldCheck,
};

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="section-padding bg-surface-darker text-white relative overflow-hidden border-t border-white/[0.06]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <Reveal className="text-center mb-16">
          <span className="eyebrow text-brand-light mb-4 block">
            {ui.whyChoose.label}
          </span>
          <h2 className="section-title text-white mb-6">
            {ui.whyChoose.title}{" "}
            <span className="gradient-text">{ui.whyChoose.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto text-white/60">
            {ui.whyChoose.subtitle}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 group hover:border-brand-light/30 hover:bg-white/[0.06] transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-11 h-11 rounded-xl bg-brand/15 ring-1 ring-inset ring-brand-light/25 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-brand-light" />
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-brand-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
