# Nidi Plast — Premium Windows & Doors Website

A luxury, ultra-modern marketing website for **Nidi Plast**, built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and GSAP.

## Features

- Full-screen hero with video background and animated window-opening effect
- 10 content sections: About, Products, 4-Season Windows, Insect Screens, Premium Doors, Why Choose, Gallery, Testimonials, Contact
- Glassmorphism UI, dark/light sections, premium typography (Inter + Outfit)
- Framer Motion scroll animations + GSAP parallax
- Masonry gallery with before/after lightbox
- Auto-sliding testimonials
- Contact form, WhatsApp button, Google Maps, social links
- SEO: metadata, Open Graph, sitemap, robots.txt

## Getting Started

```bash
cd nidiplast
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit contact details and social URLs in `src/data/content.ts`:

- Phone, email, WhatsApp, address
- Facebook, Instagram, Google Maps embed URL

Replace placeholder media with your own product photos and videos.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **GSAP** (ScrollTrigger for hero parallax)
- **Lucide React** icons
