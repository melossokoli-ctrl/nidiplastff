import Link from "next/link";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { ui } from "@/data/content";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding bg-surface-dark text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(77,163,255,0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(77,163,255,0.3) 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <GalleryGrid />
        <div className="text-center mt-14">
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-brand-light hover:bg-white/5 transition-all duration-300 text-sm font-medium"
          >
            {ui.gallery.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

