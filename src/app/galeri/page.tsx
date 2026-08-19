import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { ui } from "@/data/content";

export const metadata: Metadata = {
  title: ui.gallery.pageTitle,
  description: ui.gallery.pageSubtitle,
};

export default function GaleriPage() {
  return (
    <div className="min-h-screen bg-surface-light pt-28 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/#gallery"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-brand transition-colors mb-10"
        >
          <ArrowLeft size={18} />
          {ui.gallery.backHome}
        </Link>

        <header className="text-center mb-14 max-w-3xl mx-auto">
          <span className="eyebrow text-brand mb-4 block">
            {ui.gallery.label}
          </span>
          <h1 className="section-title text-surface-dark mb-5">
            {ui.gallery.pageTitle}
          </h1>
          <p className="section-subtitle mx-auto">{ui.gallery.pageSubtitle}</p>
        </header>

        <GalleryGrid showHeader={false} variant="light" />
      </div>
    </div>
  );
}
