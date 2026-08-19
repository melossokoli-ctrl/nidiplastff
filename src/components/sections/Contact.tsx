"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";
import { siteConfig, ui, formProductOptions } from "@/data/content";
import { Reveal } from "@/components/ui/AnimatedSection";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productLabel =
      formProductOptions.find((opt) => opt.value === formState.product)?.label ??
      formState.product;
    const subject = encodeURIComponent(
      `Kërkesë Oferte - ${formState.name}`
    );
    const body = encodeURIComponent(
      `Emri: ${formState.name}\nTelefoni: ${formState.phone}\nProdukti: ${productLabel}\n\nMesazhi:\n${formState.message}`
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", phone: "", product: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-surface-light">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="eyebrow text-brand mb-4 block">
            {ui.contact.label}
          </span>
          <h2 className="section-title text-surface-dark mb-6">
            {ui.contact.title}{" "}
            <span className="gradient-text">{ui.contact.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{ui.contact.subtitle}</p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-light rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-surface-dark mb-6">
                {ui.contact.infoTitle}
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{ui.contact.phone}</p>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="font-medium text-surface-dark hover:text-brand transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{ui.contact.email}</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium text-surface-dark hover:text-brand transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{ui.contact.address}</p>
                    <p className="font-medium text-surface-dark">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{ui.contact.hours}</p>
                    <p className="font-medium text-surface-dark">
                      {siteConfig.contact.hours}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#1877F2] text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Facebook size={20} />
                Facebook
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-medium hover:opacity-90 transition-opacity"
              >
                <Instagram size={20} />
                Instagram
              </a>
            </div>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              <MessageCircle size={22} />
              {ui.contact.whatsapp}
            </a>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-light rounded-2xl p-8 md:p-10"
            >
              <h3 className="font-display text-xl font-bold text-surface-dark mb-6">
                {ui.contact.formTitle}
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    {ui.contact.fullName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all bg-white"
                    placeholder={ui.contact.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    {ui.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all bg-white"
                    placeholder="+383 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    {ui.contact.productInterest}
                  </label>
                  <select
                    value={formState.product}
                    onChange={(e) =>
                      setFormState({ ...formState, product: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all bg-white"
                  >
                    {formProductOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  {ui.contact.message}
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all bg-white resize-none"
                  placeholder={ui.contact.messagePlaceholder}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full sm:w-auto"
              >
                {submitted ? (
                  ui.contact.sent
                ) : (
                  <>
                    <Send size={18} />
                    {ui.contact.send}
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-glass h-64 md:h-80">
              <iframe
                src={siteConfig.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={ui.contact.mapTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
