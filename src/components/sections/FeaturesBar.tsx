"use client";

import { motion } from "framer-motion";
import { Truck, Ruler, Shield, Globe } from "lucide-react";
import { ui } from "@/data/content";

const icons = [Shield, Ruler, Truck, Globe];

export default function FeaturesBar() {
  return (
    <section className="relative z-30 -mt-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 glass-light rounded-2xl p-6 md:p-8 shadow-glass-lg"
        >
          {ui.features.map((label, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 justify-center lg:justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-brand" />
                </div>
                <span className="font-medium text-surface-dark text-sm md:text-base">
                  {label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
