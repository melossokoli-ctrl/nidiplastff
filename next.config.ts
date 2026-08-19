import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    // Next.js i konverton vetë fotot në WebP/AVIF dhe i shërben
    // në madhësinë e duhur për çdo ekran.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "files.keje.nl",
      },
    ],
  },
};

export default nextConfig;
