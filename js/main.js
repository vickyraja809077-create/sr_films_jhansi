/**
 * SR FILMS JHANSI - Interactive Website Engine
 * Controls: Portfolio filtering, Lightbox, Real Stories modal, Booking flow, WhatsApp generator
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavbar();
  initStats();
  initPortfolio();
  initStories();
  initPreweddingSpots();
  initPackages();
  initTestimonials();
  initFaqs();
  initBookingForm();
  initLightbox();
  initStoryModal();
  initLucide();
});

/* ==========================================================================
   Lucide Icons Helper
   ========================================================================== */
function initLucide() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   Light / Dark Mode Theme Switcher
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const mobileToggleBtn = document.getElementById("mobile-theme-toggle-btn");
  const mobileLabel = document.getElementById("mobile-theme-label");

  function updateThemeUI(isLight) {
    const moonIcons = document.querySelectorAll(".theme-icon-moon");
    const sunIcons = document.querySelectorAll(".theme-icon-sun");

    if (isLight) {
      document.documentElement.classList.add("light");
      moonIcons.forEach(icon => icon.classList.add("hidden"));
      sunIcons.forEach(icon => icon.classList.remove("hidden"));
      if (mobileLabel) mobileLabel.textContent = "Switch to Dark Mode";
      if (toggleBtn) toggleBtn.setAttribute("title", "Switch to Dark Mode");
    } else {
      document.documentElement.classList.remove("light");
      moonIcons.forEach(icon => icon.classList.remove("hidden"));
      sunIcons.forEach(icon => icon.classList.add("hidden"));
      if (mobileLabel) mobileLabel.textContent = "Switch to Light Mode";
      if (toggleBtn) toggleBtn.setAttribute("title", "Switch to Light Mode");
    }

    initLucide();
  }

  // Initial check
  const isInitiallyLight = document.documentElement.classList.contains("light") || localStorage.getItem("sr_theme") === "light";
  updateThemeUI(isInitiallyLight);

  function toggleTheme() {
    const currentIsLight = document.documentElement.classList.contains("light");
    const nextIsLight = !currentIsLight;
    localStorage.setItem("sr_theme", nextIsLight ? "light" : "dark");
    updateThemeUI(nextIsLight);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener("click", toggleTheme);
  }
}

/* ==========================================================================
   Navigation & Scroll Effects
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById("main-nav");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileMenu.classList.contains("hidden");
      if (isExpanded) {
        mobileMenu.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      } else {
        mobileMenu.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        document.body.style.overflow = "";
      });
    });
  }
}

/* ==========================================================================
   Dynamic Counter Stats
   ========================================================================== */
function initStats() {
  const statsContainer = document.getElementById("hero-stats");
  if (!statsContainer || !window.SR_DATA) return;

  const { experienceYears, weddingsCount, happyCouples, awardsCount } = window.SR_DATA.studio;
  
  statsContainer.innerHTML = `
    <div class="text-center p-4 rounded-xl bg-surface/50 border border-gold/20">
      <div class="text-3xl md:text-4xl font-extrabold text-gold font-heading">${weddingsCount}</div>
      <div class="text-xs uppercase tracking-wider text-muted-foreground mt-1">Weddings Filmed</div>
    </div>
    <div class="text-center p-4 rounded-xl bg-surface/50 border border-gold/20">
      <div class="text-3xl md:text-4xl font-extrabold text-gold font-heading">${experienceYears}+</div>
      <div class="text-xs uppercase tracking-wider text-muted-foreground mt-1">Years of Mastery</div>
    </div>
    <div class="text-center p-4 rounded-xl bg-surface/50 border border-gold/20">
      <div class="text-3xl md:text-4xl font-extrabold text-gold font-heading">${happyCouples}</div>
      <div class="text-xs uppercase tracking-wider text-muted-foreground mt-1">Happy Couples</div>
    </div>
    <div class="text-center p-4 rounded-xl bg-surface/50 border border-gold/20">
      <div class="text-3xl md:text-4xl font-extrabold text-gold font-heading">${awardsCount}</div>
      <div class="text-xs uppercase tracking-wider text-muted-foreground mt-1">Cinematic Awards</div>
    </div>
  `;
}

/* ==========================================================================
   Portfolio Filtering & Grid
   ========================================================================== */
let activeCategory = "all";
let currentFilteredList = [];

function initPortfolio() {
  const tabsContainer = document.getElementById("portfolio-tabs");
  const gridContainer = document.getElementById("portfolio-grid");
  if (!tabsContainer || !gridContainer || !window.SR_DATA) return;

  // Render Tabs
  tabsContainer.innerHTML = window.SR_DATA.categories.map(cat => `
    <button 
      class="filter-tab ${cat.id === activeCategory ? 'active' : ''}" 
      data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join("");

  // Attach tab clicks
  tabsContainer.querySelectorAll(".filter-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      tabsContainer.querySelectorAll(".filter-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      renderPortfolioItems(activeCategory);
    });
  });

  // Initial render
  renderPortfolioItems(activeCategory);
}

function renderPortfolioItems(category) {
  const gridContainer = document.getElementById("portfolio-grid");
  if (!gridContainer || !window.SR_DATA) return;

  const items = window.SR_DATA.portfolio;
  currentFilteredList = category === "all" ? items : items.filter(it => it.category === category);

  gridContainer.innerHTML = currentFilteredList.map((item, index) => `
    <div class="portfolio-item group" onclick="openLightbox(${index})">
      <img src="${item.cover}" alt="${item.title}" loading="lazy" />
      <div class="portfolio-overlay">
        <div class="flex items-center justify-between mb-2">
          <span class="badge-gold">
            <i data-lucide="camera" class="w-3 h-3"></i> ${item.tag}
          </span>
          <span class="text-xs text-slate-300 font-medium flex items-center gap-1">
            <i data-lucide="map-pin" class="w-3 h-3 text-gold"></i> ${item.location.split(',')[0]}
          </span>
        </div>
        <h3 class="text-xl font-bold font-heading text-white group-hover:text-gold transition-colors duration-300">
          ${item.title}
        </h3>
        <p class="text-xs text-slate-300 line-clamp-2 mt-1">
          ${item.description}
        </p>
        <div class="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
          <span class="text-xs text-gold flex items-center gap-1.5 font-semibold">
            <i data-lucide="zoom-in" class="w-3.5 h-3.5"></i> View Full Shot
          </span>
          <span class="text-[11px] text-slate-400">${item.date}</span>
        </div>
      </div>
    </div>
  `).join("");

  initLucide();
}

/* ==========================================================================
   Real Wedding Stories Showcase
   ========================================================================== */
function initStories() {
  const container = document.getElementById("stories-container");
  if (!container || !window.SR_DATA) return;

  container.innerHTML = window.SR_DATA.stories.map((story, idx) => `
    <div class="story-card-large p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center">
      <div class="w-full lg:w-1/2 relative rounded-xl overflow-hidden group">
        <img src="${story.cover}" alt="${story.title}" class="w-full h-[320px] md:h-[420px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
          <div class="inline-block">
            <span class="badge-gold mb-2">
              <i data-lucide="film" class="w-3.5 h-3.5"></i> Real Wedding Story
            </span>
          </div>
          <span class="text-xs text-slate-300 flex items-center gap-1.5 mt-1">
            <i data-lucide="calendar" class="w-3.5 h-3.5 text-gold"></i> ${story.date} • ${story.location}
          </span>
        </div>
      </div>

      <div class="w-full lg:w-1/2 flex flex-col justify-center">
        <div class="text-xs uppercase tracking-widest text-gold font-bold mb-2">Exclusive Coverage</div>
        <h3 class="text-2xl md:text-3xl font-extrabold font-heading text-white mb-2">
          ${story.couple}
        </h3>
        <h4 class="text-base text-gold font-serif italic mb-4">
          "${story.subtitle}"
        </h4>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          ${story.narrative}
        </p>

        <div class="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-black/40 border border-white/5">
          <div>
            <div class="text-[11px] uppercase tracking-wider text-slate-400">Photos Delivered</div>
            <div class="text-sm font-semibold text-white mt-0.5">${story.stats.photos}</div>
          </div>
          <div>
            <div class="text-[11px] uppercase tracking-wider text-slate-400">Film Length</div>
            <div class="text-sm font-semibold text-gold mt-0.5">${story.stats.filmLength}</div>
          </div>
          <div>
            <div class="text-[11px] uppercase tracking-wider text-slate-400">Instagram Reel</div>
            <div class="text-sm font-semibold text-white mt-0.5">${story.stats.reelTeaser}</div>
          </div>
          <div>
            <div class="text-[11px] uppercase tracking-wider text-slate-400">Keepsake</div>
            <div class="text-sm font-semibold text-gold mt-0.5">${story.stats.album}</div>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-4">
          <button onclick="openStoryModal(${idx})" class="btn-gold text-xs py-3 px-6">
            <i data-lucide="book-open" class="w-4 h-4"></i> Read Full Story & Gallery
          </button>
          <a href="#booking" onclick="preselectEventStory('${story.couple}')" class="btn-outline-gold text-xs py-3 px-6">
            <i data-lucide="heart" class="w-4 h-4"></i> Book Similar Style
          </a>
        </div>
      </div>
    </div>
  `).join("");

  initLucide();
}

/* ==========================================================================
   Pre-Wedding Hotspots in & around Jhansi
   ========================================================================== */
function initPreweddingSpots() {
  const container = document.getElementById("prewedding-spots");
  if (!container || !window.SR_DATA) return;

  container.innerHTML = window.SR_DATA.preweddingSpots.map(spot => `
    <div class="luxury-card overflow-hidden flex flex-col group">
      <div class="relative h-48 overflow-hidden">
        <img src="${spot.image}" alt="${spot.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div class="absolute top-3 right-3">
          <span class="badge-gold bg-black/60 backdrop-blur-md">
            <i data-lucide="map-pin" class="w-3 h-3 text-gold"></i> ${spot.distance}
          </span>
        </div>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h4 class="text-lg font-bold font-heading text-white group-hover:text-gold transition-colors">
            ${spot.name}
          </h4>
          <div class="text-xs text-gold font-medium mt-1 mb-2">
            Vibe: ${spot.vibe}
          </div>
          <p class="text-xs text-slate-300 leading-relaxed">
            ${spot.desc}
          </p>
        </div>
        <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <span class="flex items-center gap-1">
            <i data-lucide="sun" class="w-3.5 h-3.5 text-gold"></i> Best: ${spot.bestTime}
          </span>
          <button onclick="bookPreweddingSpot('${spot.name}')" class="text-gold font-semibold hover:underline">
            Shoot Here &rarr;
          </button>
        </div>
      </div>
    </div>
  `).join("");

  initLucide();
}

/* ==========================================================================
   Packages & Pricing Cards
   ========================================================================== */
function initPackages() {
  const container = document.getElementById("packages-container");
  if (!container || !window.SR_DATA) return;

  container.innerHTML = window.SR_DATA.packages.map(pkg => `
    <div class="luxury-card p-6 md:p-8 flex flex-col justify-between ${pkg.popular ? 'gold-glow-card' : ''}">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="badge-gold ${pkg.popular ? 'bg-gold/20 text-white border-gold' : ''}">
            ${pkg.badge}
          </span>
          <span class="text-xs text-slate-400 font-medium">${pkg.period}</span>
        </div>

        <h3 class="text-2xl font-extrabold font-heading text-white mb-1">${pkg.name}</h3>
        <p class="text-xs text-slate-400 mb-6">${pkg.tagline}</p>

        <div class="mb-6 pb-6 border-b border-white/10">
          <div class="text-xs uppercase tracking-wider text-slate-400">Starting Investment</div>
          <div class="text-4xl font-extrabold text-gold font-heading mt-1">${pkg.price}</div>
          <div class="text-[11px] text-slate-400 mt-1">Inclusive of professional editing & color grading</div>
        </div>

        <ul class="space-y-3 mb-8">
          ${pkg.features.map(feat => `
            <li class="flex items-start gap-2.5 text-xs text-slate-200">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-gold shrink-0 mt-0.5"></i>
              <span>${feat}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div>
        <div class="p-3 rounded-lg bg-black/40 text-[11px] text-slate-400 mb-4 border border-white/5">
          <strong class="text-slate-200">Recommended for:</strong> ${pkg.popularFor}
        </div>
        <button 
          onclick="selectPackage('${pkg.name}', '${pkg.price}')" 
          class="w-full ${pkg.popular ? 'btn-gold' : 'btn-outline-gold'} text-xs py-3.5">
          <i data-lucide="calendar" class="w-4 h-4"></i> Reserve This Package
        </button>
      </div>
    </div>
  `).join("");

  initLucide();
}

/* ==========================================================================
   Client Testimonials
   ========================================================================== */
function initTestimonials() {
  const container = document.getElementById("testimonials-container");
  if (!container || !window.SR_DATA) return;

  container.innerHTML = window.SR_DATA.testimonials.map(item => `
    <div class="luxury-card p-6 md:p-8 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-1 text-gold mb-4">
          ${Array(item.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-gold"></i>').join("")}
        </div>
        <p class="text-sm text-slate-200 italic font-serif leading-relaxed mb-6">
          "${item.text}"
        </p>
      </div>
      <div class="pt-4 border-t border-white/10 flex items-center justify-between">
        <div>
          <div class="font-bold text-sm text-white font-heading">${item.name}</div>
          <div class="text-xs text-gold">${item.event}</div>
          <div class="text-[11px] text-slate-400">${item.location} • ${item.date}</div>
        </div>
        <div class="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
          <i data-lucide="quote" class="w-4 h-4"></i>
        </div>
      </div>
    </div>
  `).join("");

  initLucide();
}

/* ==========================================================================
   Frequently Asked Questions
   ========================================================================== */
function initFaqs() {
  const container = document.getElementById("faqs-container");
  if (!container || !window.SR_DATA) return;

  container.innerHTML = window.SR_DATA.faqs.map((faq, i) => `
    <div class="border border-white/10 rounded-xl overflow-hidden bg-surface transition-all">
      <button 
        class="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm md:text-base text-white hover:text-gold transition-colors"
        onclick="toggleFaq(${i})">
        <span>${faq.q}</span>
        <i data-lucide="chevron-down" id="faq-icon-${i}" class="w-4 h-4 text-gold shrink-0 transition-transform duration-300"></i>
      </button>
      <div id="faq-ans-${i}" class="hidden p-5 pt-0 text-xs md:text-sm text-slate-300 leading-relaxed border-t border-white/5">
        ${faq.a}
      </div>
    </div>
  `).join("");

  initLucide();
}

function toggleFaq(index) {
  const ans = document.getElementById(`faq-ans-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!ans || !icon) return;

  const isClosed = ans.classList.contains("hidden");
  if (isClosed) {
    ans.classList.remove("hidden");
    icon.style.transform = "rotate(180deg)";
  } else {
    ans.classList.add("hidden");
    icon.style.transform = "rotate(0deg)";
  }
}

/* ==========================================================================
   Fullscreen Lightbox Modal
   ========================================================================== */
let activeLightboxIndex = 0;

function initLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!modal) return;

  closeBtn?.addEventListener("click", closeLightbox);
  prevBtn?.addEventListener("click", prevLightbox);
  nextBtn?.addEventListener("click", nextLightbox);

  // Close when clicking outside image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevLightbox();
    if (e.key === "ArrowRight") nextLightbox();
  });
}

function openLightbox(index) {
  activeLightboxIndex = index;
  updateLightboxContent();
  const modal = document.getElementById("lightbox-modal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function nextLightbox() {
  if (currentFilteredList.length === 0) return;
  activeLightboxIndex = (activeLightboxIndex + 1) % currentFilteredList.length;
  updateLightboxContent();
}

function prevLightbox() {
  if (currentFilteredList.length === 0) return;
  activeLightboxIndex = (activeLightboxIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = currentFilteredList[activeLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const tagEl = document.getElementById("lightbox-tag");
  const locEl = document.getElementById("lightbox-location");
  const descEl = document.getElementById("lightbox-desc");
  const counterEl = document.getElementById("lightbox-counter");

  if (imgEl) imgEl.src = item.cover;
  if (titleEl) titleEl.textContent = item.title;
  if (tagEl) tagEl.textContent = item.tag;
  if (locEl) locEl.textContent = item.location;
  if (descEl) descEl.textContent = item.description;
  if (counterEl) counterEl.textContent = `${activeLightboxIndex + 1} / ${currentFilteredList.length}`;
}

/* ==========================================================================
   Story Modal (Deep Dive into Wedding Journey)
   ========================================================================== */
function initStoryModal() {
  const modal = document.getElementById("story-modal");
  const closeBtn = document.getElementById("story-modal-close");
  if (!modal) return;

  closeBtn?.addEventListener("click", () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });
}

function openStoryModal(index) {
  const modal = document.getElementById("story-modal");
  const content = document.getElementById("story-modal-content");
  if (!modal || !content || !window.SR_DATA) return;

  const story = window.SR_DATA.stories[index];
  if (!story) return;

  content.innerHTML = `
    <div class="relative h-64 md:h-80 w-full rounded-t-2xl overflow-hidden">
      <img src="${story.cover}" alt="${story.title}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
        <span class="badge-gold mb-2 w-max">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Featured Love Story
        </span>
        <h2 class="text-3xl font-bold font-heading text-white">${story.couple}</h2>
        <p class="text-xs text-gold font-serif italic">${story.location} • ${story.date}</p>
      </div>
    </div>

    <div class="p-6 md:p-8 space-y-6">
      <blockquote class="p-4 rounded-xl bg-gold/10 border-l-4 border-gold text-sm italic text-slate-200">
        "${story.quote}"
      </blockquote>

      <div>
        <h4 class="text-sm uppercase tracking-wider text-gold font-bold mb-2">The Story Behind the Lens</h4>
        <p class="text-sm text-slate-300 leading-relaxed">${story.narrative}</p>
      </div>

      <div>
        <h4 class="text-sm uppercase tracking-wider text-gold font-bold mb-3">Highlights Gallery</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          ${story.gallery.map(imgUrl => `
            <div class="rounded-lg overflow-hidden border border-white/10 group cursor-pointer" onclick="viewStoryPhoto('${imgUrl}')">
              <img src="${imgUrl}" class="w-full h-32 object-cover transition-transform group-hover:scale-110" />
            </div>
          `).join("")}
        </div>
      </div>

      <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div class="text-xs text-slate-400">
          Interested in creating a similar cinematic wedding film for your big day?
        </div>
        <button onclick="bookThisStoryTheme('${story.couple}')" class="btn-gold text-xs py-2.5 px-6">
          Check Availability For My Dates &rarr;
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  initLucide();
}

function viewStoryPhoto(url) {
  const imgEl = document.getElementById("lightbox-img");
  const titleEl = document.getElementById("lightbox-title");
  const descEl = document.getElementById("lightbox-desc");
  if (imgEl) imgEl.src = url;
  if (titleEl) titleEl.textContent = "Wedding Story Gallery";
  if (descEl) descEl.textContent = "Captured by SR Films Jhansi";
  const modal = document.getElementById("lightbox-modal");
  modal.classList.add("active");
}

/* ==========================================================================
   Interactive Booking & WhatsApp Routing Engine
   ========================================================================== */
function initBookingForm() {
  const form = document.getElementById("booking-form");
  const whatsappBtn = document.getElementById("btn-send-whatsapp");
  if (!form) return;

  // Set minimum date to today
  const dateInput = document.getElementById("book-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  // Handle standard form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    processBookingSubmission(form);
  });

  // Handle direct WhatsApp submission
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", (e) => {
      e.preventDefault();
      sendViaWhatsApp(form);
    });
  }
}

function getFormData(form) {
  const name = form.querySelector("#book-name")?.value.trim() || "";
  const phone = form.querySelector("#book-phone")?.value.trim() || "";
  const email = form.querySelector("#book-email")?.value.trim() || "";
  const eventType = form.querySelector("#book-event-type")?.value || "Wedding Ceremony";
  const date = form.querySelector("#book-date")?.value || "";
  const days = form.querySelector("#book-days")?.value || "2 Days";
  const city = form.querySelector("#book-city")?.value || "Jhansi";
  const venue = form.querySelector("#book-venue")?.value.trim() || "To be decided";
  const packagePref = form.querySelector("#book-package")?.value || "Gold Cinematic";
  const notes = form.querySelector("#book-notes")?.value.trim() || "Looking forward to capturing our royal moments.";

  return { name, phone, email, eventType, date, days, city, venue, packagePref, notes };
}

function validateFormData(data) {
  if (!data.name) {
    alert("Please enter your name.");
    return false;
  }
  if (!data.phone || data.phone.length < 10) {
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  }
  if (!data.date) {
    alert("Please choose your expected event date.");
    return false;
  }
  return true;
}

function processBookingSubmission(form) {
  const data = getFormData(form);
  if (!validateFormData(data)) return;

  // Generate Booking Reference
  const refCode = "SR-" + Math.floor(100000 + Math.random() * 900000);
  const timestamp = new Date().toLocaleString();

  // Save in LocalStorage
  const bookings = JSON.parse(localStorage.getItem("sr_films_bookings") || "[]");
  bookings.push({ ...data, refCode, timestamp, status: "Confirmed Received" });
  localStorage.setItem("sr_films_bookings", JSON.stringify(bookings));

  // Show Confirmation Modal
  showBookingSuccessModal(refCode, data);
  form.reset();
}

function sendViaWhatsApp(form) {
  const data = getFormData(form);
  if (!validateFormData(data)) return;

  const phoneStudio = window.SR_DATA?.studio?.whatsapp || "919452187654";
  
  const text = `*New Booking Inquiry - SR Films Jhansi*\n` +
    `-----------------------------------------\n` +
    `👤 *Client Name:* ${data.name}\n` +
    `📞 *Phone:* ${data.phone}\n` +
    `📧 *Email:* ${data.email || 'N/A'}\n` +
    `💍 *Event Type:* ${data.eventType}\n` +
    `📅 *Event Date:* ${data.date} (${data.days})\n` +
    `📍 *Location:* ${data.city} - ${data.venue}\n` +
    `🎬 *Package Selected:* ${data.packagePref}\n` +
    `📝 *Vision Notes:* ${data.notes}\n` +
    `-----------------------------------------\n` +
    `_Sent via SR Films Jhansi Official Website_`;

  const encoded = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${phoneStudio}?text=${encoded}`;
  window.open(whatsappUrl, "_blank");
}

function showBookingSuccessModal(refCode, data) {
  const modal = document.getElementById("booking-success-modal");
  const refEl = document.getElementById("success-ref-code");
  const detailsEl = document.getElementById("success-details");
  if (!modal) return;

  if (refEl) refEl.textContent = refCode;
  if (detailsEl) {
    detailsEl.innerHTML = `
      <div class="text-left text-xs bg-black/40 p-3 rounded-lg border border-gold/20 space-y-1 text-slate-300">
        <div><strong class="text-white">Name:</strong> ${data.name}</div>
        <div><strong class="text-white">Event:</strong> ${data.eventType} on ${data.date}</div>
        <div><strong class="text-white">City:</strong> ${data.city} (${data.days})</div>
        <div><strong class="text-white">Package:</strong> ${data.packagePref}</div>
      </div>
    `;
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSuccessModal() {
  const modal = document.getElementById("booking-success-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
}

/* ==========================================================================
   Helper Actions from Other Sections
   ========================================================================== */
function selectPackage(pkgName, price) {
  const select = document.getElementById("book-package");
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(pkgName) || select.options[i].value.includes(pkgName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

function bookPreweddingSpot(spotName) {
  const notes = document.getElementById("book-notes");
  const eventSelect = document.getElementById("book-event-type");
  if (eventSelect) eventSelect.value = "Pre-Wedding Shoot";
  if (notes) {
    notes.value = `Interested in shooting our Pre-Wedding at: ${spotName}. Please share location permits and styling suggestions.`;
  }
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

function preselectEventStory(coupleName) {
  const notes = document.getElementById("book-notes");
  if (notes) {
    notes.value = `Loved the cinematic coverage style of ${coupleName}. Looking for similar drone coverage, candid storytelling, and regal color grading.`;
  }
}

function bookThisStoryTheme(coupleName) {
  const modal = document.getElementById("story-modal");
  if (modal) modal.classList.add("hidden");
  document.body.style.overflow = "";
  preselectEventStory(coupleName);
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

// Attach globally for inline HTML click handlers
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.nextLightbox = nextLightbox;
window.prevLightbox = prevLightbox;
window.openStoryModal = openStoryModal;
window.viewStoryPhoto = viewStoryPhoto;
window.selectPackage = selectPackage;
window.bookPreweddingSpot = bookPreweddingSpot;
window.preselectEventStory = preselectEventStory;
window.bookThisStoryTheme = bookThisStoryTheme;
window.closeSuccessModal = closeSuccessModal;
window.toggleFaq = toggleFaq;
