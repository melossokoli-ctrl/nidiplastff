"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { insectScreenTypes, ui } from "@/data/content";
import { Reveal } from "@/components/ui/AnimatedSection";

export default function InsectScreens() {
  return (
    <section id="screens" className="section-padding bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="eyebrow text-brand mb-4 block">
            {ui.screens.label}
          </span>
          <h2 className="section-title text-surface-dark mb-6">
            {ui.screens.title}{" "}
            <span className="gradient-text">{ui.screens.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{ui.screens.subtitle}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {insectScreenTypes.map((screen, i) => (
            <motion.article
              key={screen.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-glass hover:shadow-glass-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={screen.image}
                  alt={screen.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-surface-dark mb-2">
                  {screen.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {screen.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
