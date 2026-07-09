# ACube Project Design Document

## Overview
**A-Cube Institute of Skills** is a multi-page corporate web application built to showcase their services in human resource supply, recruitment, HR consulting, and skill development programs. The application emphasizes a modern, professional, and trustworthy aesthetic using smooth scroll animations, a cohesive teal/green color palette, and premium UI components like glassmorphism and masonry grids.

## Technology Stack
- **Framework:** Next.js (v16.2.10) with App Router (`app` directory)
- **Library:** React (v19.2.4)
- **Styling:** Tailwind CSS (v4)
- **Language:** TypeScript
- **Animations:** GSAP (v3.15.0) & `@gsap/react` for complex timeline and scroll-triggered animations.
- **Icons:** `lucide-react`
- **Fonts:** DM Sans (via `next/font/google`)
- **Form Handling:** Web3Forms API (for contact form email delivery)

## Architecture & File Structure
The project follows a standard Next.js App Router structure with dedicated routes for main sections.

```
/acube
├── app/
│   ├── about/              # About Us page route
│   │   └── page.tsx        
│   ├── gallery/            # Gallery page route
│   │   └── page.tsx        
│   ├── contact/            # Contact Us page route
│   │   └── page.tsx        
│   ├── components/         # Reusable UI sections
│   │   ├── Clients.tsx     # Testimonials & Client Logos
│   │   ├── Footer.tsx      # Comprehensive Footer & CTA
│   │   ├── Hero.tsx        # Top landing section with stats
│   │   ├── Impacts.tsx     # Metrics and success numbers
│   │   ├── Navbar.tsx      # Sticky top navigation (w/ dynamic active states)
│   │   └── Services.tsx    # Scroll-linked services showcase
│   ├── globals.css         # Global styles & custom gradients
│   ├── layout.tsx          # Root layout with HTML/Body, font setup, and smooth scrolling
│   └── page.tsx            # Main landing page (Home)
├── public/                 # Static assets (images, logos)
├── package.json            # Dependencies and scripts
└── next.config.ts          # Next.js configuration
```

## Design System & Aesthetics
- **Color Palette:** 
  - Primary Theme: Teal/Green gradients (e.g., `#2D9F90`, `#A0DAAD`, `#00403C`) conveying growth, trust, and professionalism.
  - Backgrounds: Off-white (`--color-background`), pure white, and soft teal tints (e.g., `#E0F0EE`).
- **Typography:** `DM Sans` used globally for a clean, highly legible, and modern corporate look.
- **Visual Effects:** 
  - **Glassmorphism:** Used in the Navbar and hover overlays for a sleek, translucent effect with a noise overlay.
  - **Gradients:** Text gradients and background linear gradients applied to headings, CTA buttons, and Footer sections (responsive direction matching layouts).
  - **Animations:** Heavy use of GSAP for entrance animations (fade-ins, staggered sliding, scale effects) and ScrollTrigger for revealing elements seamlessly as the user scrolls.

## Pages & Component Details

### 1. Main Landing Page (`page.tsx`)
- **Hero:** Split layout with text/CTAs on the left and a stylized collage of skewed images on the right, plus a floating stats strip.
- **Impacts:** Grid-based cards with hover effects translating up and inverting text colors.
- **Services:** A complex layout featuring a "sticky" left panel and a scrollable right panel, updating navigation indicators via `IntersectionObserver`.
- **Clients:** Social proof section with auto-rotating testimonials and a responsive client logo grid.

### 2. About Page (`app/about/page.tsx`)
- **Company Overview:** Establishes the brand's history and mission.
- **Leadership:** Showcases the Managing Director with an interactive, animated avatar overlay.
- **Certifications:** A cleanly staggered grid of compliance and quality certifications (ISO, MSME, etc.) animating via GSAP `fromTo`.

### 3. Gallery Page (`app/gallery/page.tsx`)
- **Masonry Grid:** A visually appealing "bento-box" style responsive grid mixing spans (`col-span-1`, `row-span-2`, etc.) to display training and corporate moments.
- **Lightbox:** A custom-built, full-screen React modal that locks body scrolling and isolates the selected image with a high z-index and blurred backdrop.

### 4. Contact Page (`app/contact/page.tsx`)
- **Dual Layout:** Left side features beautifully styled cards for Head Office, Registered Office, and Direct Contact info. Right side features a modern contact form.
- **Web3Forms Integration:** The contact form is fully functional, intercepting the standard submit event and sending data to the Web3Forms API to deliver emails securely on the free tier.

### 5. Shared Global Components
- **Navbar:** Sticky header with glassmorphism, dynamic active page highlighting via Next.js `usePathname`, and a mobile-responsive hamburger menu.
- **Footer:** High-contrast CTA section with responsive gradients (top-to-bottom on mobile, left-to-right on desktop), brand information, quick links, and certifications.

## Conclusion
The ACube project is a visually rich, multi-page corporate web application. It successfully leverages modern web capabilities—specifically Tailwind CSS for rapid, responsive styling, Next.js App Router for clean navigation, and GSAP for premium scroll-based animations—to create an engaging user experience tailored to B2B clients in need of HR and manpower solutions.
