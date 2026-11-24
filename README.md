# 🎬 SR Films Jhansi — Official Photography & Cinematic Studio Website

> **Luxury Wedding Photography & Cinematic Filmmaking across Jhansi, Orchha, Bundelkhand & Destination Weddings.**

A modern, responsive, high-aesthetic web application designed specifically for **SR Films Jhansi**. Built with luxury obsidian & royal Rajputana gold tones, smooth animations, interactive portfolio filtering, real wedding stories, pre-wedding destination guides, transparent packages, and a comprehensive booking flow with direct WhatsApp integration.

---

## 🌟 Key Features

### 1. 📸 Curated Work Portfolio (`#portfolio`)
- **Filterable Categories**:
  - Royal Weddings
  - Pre-Wedding Shoots
  - Cinematic Films & Teasers
  - Haldi & Mehendi Rituals
  - Bridal & Groom Portraits
- **Interactive Fullscreen Lightbox**: Click any photograph or film thumbnail to view in high resolution with shot details, location tags, and arrow/keyboard navigation.

### 2. 💍 Real Wedding Stories (`#stories`)
- Deep-dive narratives highlighting real celebrations (e.g. *Aditya & Shweta in Orchha*, *Karan & Ritika in Jhansi*).
- Photo reels, couple testimonials, delivery stats (photos delivered, film length, Instagram teaser speed, album finishes).
- Modal viewer to read the love story and view the full gallery.

### 3. 🏰 Pre-Wedding Hotspots Guide (`#prewedding`)
- Local destination spotlight for couples:
  - **Orchha Cenotaphs (Chhatris)** (Regal stone architecture)
  - **Betwa River Banks & Boat Rides** (Sunset silhouettes)
  - **Jhansi Fort & Rani Mahal** (Historic Bundeli ramparts)
  - **Barua Sagar Fort & Lake** (Lakeside charm)
- Distance from Jhansi, best photography timings (golden hour / sunrise), and direct "Shoot Here" booking CTA.

### 4. 💎 Packages & Investment Options (`#packages`)
- **Silver Classic (₹45,000)**: 1 Traditional Photographer + 1 Videographer, 300+ Photos, Luxury Hardcover Album.
- **Gold Cinematic (₹85,000 — Most Popular)**: 2 Candid Photographers, 2 Cinema Cinematographers, 4K Drone, 48-Hour Express Instagram Reel, Handcrafted Velvet/Leather Album, Complimentary Orchha Pre-Wedding shoot.
- **Royal Diamond Experience (₹1,45,000)**: 7-person elite crew, 4K Cinema Drones, Same-Day Edit (SDE) teaser, 2 Master Italian Leather Albums, Live YouTube Streaming.
- One-click package selection that scrolls and pre-fills the booking form.

### 5. 📅 Interactive Booking & WhatsApp Integration (`#booking`)
- Comprehensive booking inquiry form:
  - Client Name, Phone, Email
  - Event Type & Duration (1 to 4+ Days)
  - Event Date with minimum date validation
  - City selection (Jhansi, Orchha, Babina, Lalitpur, Orai, Gwalior, etc.)
  - Package preference & Vision notes
- **Instant WhatsApp Booking**: Generates an auto-formatted, professional booking message and opens WhatsApp directly to SR Films.
- **Online Booking Submission**: Generates a unique tracking reference (e.g. `SR-849201`), displays an animated luxury confirmation modal, and stores the booking in local storage.

### 6. 🌓 Dark Mode & Light Mode Theme Switcher
- **One-Click Theme Toggle**: Switch effortlessly between **Royal Obsidian (Dark Mode)** and **Warm Ivory & Gold (Light Mode)**.
- **Persistent Preference**: Automatically saves your choice to `localStorage` and respects system preferences with zero flash on reload.
- **Accessible on Desktop & Mobile**: Toggle button in the sticky navigation bar and within the mobile slide-out drawer.

### 7. 📍 Jhansi Studio & Contact (`#contact`)
- Physical address: **757/2, Bade Hanuman Mandir, Chandra Vihar Colony, Near BKD College, Jhansi - 284001, Uttar Pradesh**.
- Interactive Google Maps integration.
- Direct phone and WhatsApp quick-dial links.
- Floating action buttons for mobile users.

---

## 🚀 How to Run & Preview

### Option 1: Open Directly in Browser
Simply open `index.html` in any web browser:
```bash
open /Users/ashishkushwaha/.gemini/antigravity/scratch/sr-films-jhansi/index.html
```

### Option 2: Run with Local Python Server
```bash
cd /Users/ashishkushwaha/.gemini/antigravity/scratch/sr-films-jhansi
python3 -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

### Option 3: Deploy to Vercel / Netlify / GitHub Pages
Upload this folder to GitHub or drag-and-drop into Netlify for zero-configuration, instant live hosting.

---

## 📁 File Structure

```
sr-films-jhansi/
├── index.html         # Main luxury single-page application
├── css/
│   └── styles.css     # Obsidian & Gold theme, glassmorphism, animations
├── js/
│   ├── data.js        # Data store (Portfolio, Stories, Spots, Packages, FAQs)
│   └── main.js        # Logic for filtering, lightbox, modals, and booking
├── images/            # Directory for local media assets
├── package.json       # Project scripts and metadata
└── README.md          # Documentation and setup instructions
```

---

*Crafted for SR Films Jhansi — Capturing Royal Moments & Timeless Love Stories.*
