<div align="center">
<img width="1200" height="475" alt="Portfolio Banner" src="/public/portfolio.png" />

# Amal S Kumar — Personal Portfolio

**A premium developer portfolio built with React, TypeScript, and Framer Motion.**  
Lavender Cherry Blossom aesthetic · Glassmorphism · Dark & Light modes · Fully responsive.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=flat-square&logo=framer)](https://www.framer.com/motion)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-CDN-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## ✨ Features

- **Lavender Cherry Blossom Theme** — Custom curated palette with `lavender`, `neon-purple`, `neon-cyan`, and `cream` tokens
- **Glassmorphism UI** — `backdrop-blur`, translucent borders, and layered depth across all cards
- **Dark / Light Mode** — System-aware toggle with smooth transitions
- **Scroll-Linked Animations** — `useScroll` + `useSpring` for parallax and word-reveal effects
- **3D Perspective Cards** — Scroll-driven 3D card fan on the About page
- **Falling Petals** — Animated cherry blossom petal rain on the Home page
- **Interactive Timeline** — Framer-Motion animated vertical spine on the Experience page
- **Case Study Detail View** — Ticket-cut hero card, serif scroll-reveal overview, and tilted feature cards on individual project pages
- **SEO Optimised** — Per-page `<title>` and `<meta description>` via `react-helmet-async`
- **Fully Responsive** — Mobile-first layout across all pages

---

## 🗂️ Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, skills belt, featured projects carousel, companies ribbon, telemetry |
| `/about` | About | 3D identity cards, scroll-reveal story, accomplishments, dev timeline |
| `/projects` | Projects | Glassmorphic project grid with card-wide navigation |
| `/projects/:id` | View Project | Ticket-cut hero, serif overview, tilted feature cards |
| `/experience` | Experience | Alternating timeline with scroll-tracked spine |
| `/contact` | Contact | Premium contact form with lavender styling |
| `/resume` | Resume | Resume viewer / download |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS (CDN) + Custom Tokens |
| Animations | Framer Motion 12 |
| Routing | React Router DOM 7 |
| Icons | Lucide React |
| SEO | react-helmet-async |
| Deployment | Vercel |

---

## 🚀 Run Locally

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
Personal-Portfolio/
├── components/          # Reusable UI components
│   ├── AboutIllustration.tsx   # 3D scroll-driven identity cards
│   ├── AboutSnapshot.tsx       # Scroll-linked word reveal
│   ├── AboutAccomplishments.tsx # Tilted numbered achievement cards
│   ├── AboutTimeline.tsx       # Interactive dev timeline
│   ├── FeaturedProjects.tsx    # Horizontal scroll carousel
│   ├── CompaniesRibbon.tsx     # Infinite marquee of client logos
│   ├── Hero.tsx                # Landing hero with petals
│   ├── LavenderPetals.tsx      # Animated falling petal component
│   ├── TechStackSnapshot.tsx   # Skills visualisation
│   ├── TelemetrySection.tsx    # Stats / telemetry cards
│   ├── Navbar.tsx / Footer.tsx
│   └── ...
├── pages/               # Route-level page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Project.tsx
│   ├── ViewProject.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Resume.tsx
├── data/
│   ├── projects.json    # Project data
│   └── experience.json  # Work experience data
├── types.ts             # Shared TypeScript interfaces
├── index.html           # Tailwind CDN + custom config
└── vite.config.ts
```

---

## 🎨 Design System

Custom Tailwind theme tokens defined in `index.html`:

| Token | Value | Usage |
|---|---|---|
| `cream` | `#FAF8F5` | Light mode background |
| `tech-black` | `#0A0A0B` | Dark mode background |
| `tech-dark` | `#141416` | Dark mode card surfaces |
| `lavender-*` | `50–900` scale | Primary accent palette |
| `neon-purple` | `#8B5CF6` | CTA buttons, highlights |
| `neon-cyan` | `#22D3EE` | Secondary accent |
| `neon-blue` | `#3B82F6` | Gradient partner |

---

## 🌐 Deployment

Deployed on **Vercel** with SPA routing configured via `vercel.json`. Any push to `main` triggers an automatic deployment.

---

<div align="center">

Made with 💜 by [Amal S Kumar](https://github.com/AmalSKumar0)

</div>
