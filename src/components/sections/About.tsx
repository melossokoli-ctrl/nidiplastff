"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { partners, projectImages, stats, ui } from "@/data/content";
import { useCountUp } from "@/lib/utils";
import { Reveal, fadeInUp } from "@/components/ui/AnimatedSection";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value, 2200);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="text-center p-8 rounded-2xl glass-light hover:shadow-glass-lg transition-shadow duration-500"
    >
      <div className="font-display text-5xl md:text-6xl font-bold gradient-text mb-2">
        {count.toLocaleString("sq-AL")}
        {suffix}
      </div>
      <p className="text-gray-500 font-medium">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <Reveal>
            <span className="eyebrow text-brand mb-4 block">
              {ui.about.label}
            </span>
            <h2 className="section-title text-surface-dark mb-6">
              {ui.about.title}{" "}
              <span className="gradient-text">{ui.about.titleHighlight}</span>
            </h2>
            <p className="section-subtitle mb-6">{ui.about.p1}</p>
            <p className="text-gray-500 leading-relaxed mb-8">{ui.about.p2}</p>
            <div className="flex flex-wrap gap-3">
              {ui.about.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full bg-brand/10 text-brand-dark text-sm font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal variant={fadeInUp}>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-glass-lg">
                <Image
                  src={projectImages.g01}
                  alt={ui.about.imageAlt1}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden shadow-glass-lg hidden md:block">
                <Image
                  src={projectImages.g08}
                  alt={ui.about.imageAlt2}
                  fill
                  sizes="192px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-brand rounded-2xl opacity-20 blur-2xl" />
            </div>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </motion.div>

        <Reveal>
          <div className="flex items-center gap-5 max-w-4xl mx-auto mb-10">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
            <p className="text-brand font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              Partnerët Tanë
            </p>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-glass hover:shadow-glass-lg hover:border-brand/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="absolute inset-x-8 top-0 h-px bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex h-20 items-center justify-center rounded-xl bg-surface-light/70 px-6 mb-6">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={partner.logoWidth}
                    height={partner.logoHeight}
                    className={`${partner.logoClass} w-auto object-contain`}
                  />
                </div>

                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <h3 className="font-display font-bold text-lg text-surface-dark">
                    {partner.role}
                  </h3>
                  <span className="text-xs font-medium tracking-wide uppercase text-brand shrink-0">
                    {partner.origin}
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

