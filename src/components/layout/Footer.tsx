import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Clock,
  Mail,
} from "lucide-react";
import { navLinks, siteConfig, ui } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-surface-darker text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto section-padding !pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 bg-white/95 rounded-lg p-1">
                <Image
                  src="/logo.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-2xl">
                NIDI<span className="text-brand-light">PLAST</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed text-sm">
              {ui.footer.description}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand transition-colors"
                aria-label="Google Business"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              {ui.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              {ui.footer.products}
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              {ui.footer.productList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              {ui.footer.contact}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-light" />
                {siteConfig.contact.address}
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={16} className="shrink-0 text-brand-light" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-brand-light transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={16} className="shrink-0 text-brand-light" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brand-light transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Clock size={16} className="shrink-0 text-brand-light" />
                {siteConfig.contact.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} {siteConfig.name}.{" "}
              {ui.footer.rights}
            </p>
            <p className="text-center sm:text-right text-white/35">
              {ui.footer.standards}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
