/**
 * SR FILMS JHANSI - Data Store
 * Photography & Cinematic Films Portfolio, Real Wedding Stories, Packages & Reviews
 */

const SR_DATA = {
  studio: {
    name: "SR Films Jhansi",
    shortName: "SR Films",
    logoGold: "images/sr-logo-gold.png",
    logoWhite: "images/sr-logo-white.png",
    logoIcon: "images/sr-logo-icon.png",
    tagline: "Crafting Love, Capturing Life",
    subtagline: "Luxury Wedding Photography & Cinematic Films across Jhansi, Bundelkhand & Destination Weddings",
    phone: "+91 94521 87654",
    phoneRaw: "919452187654",
    whatsapp: "919452187654",
    email: "srfilmsjhansi@gmail.com",
    address: "757/2, Bade Hanuman Mandir, Chandra Vihar Colony, Near BKD College, Jhansi - 284001, Uttar Pradesh",
    instagram: "@srfilms.jhansi",
    instagramUrl: "https://instagram.com",
    youtube: "SR Films Jhansi - Cinematic Weddings",
    experienceYears: 10,
    weddingsCount: "450+",
    happyCouples: "500+",
    awardsCount: "15+"
  },

  categories: [
    { id: "all", label: "All Works" },
    { id: "weddings", label: "Royal Weddings" },
    { id: "pre-wedding", label: "Pre-Wedding Shoots" },
    { id: "cinematic", label: "Cinematic Films" },
    { id: "rituals", label: "Haldi & Mehendi" },
    { id: "portraits", label: "Bridal & Groom Portraits" }
  ],

  portfolio: [
    {
      id: "port-1",
      title: "Aditya & Shweta",
      category: "weddings",
      tag: "Royal Wedding",
      location: "Orchha Heritage Resort, Near Jhansi",
      cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      date: "Dec 2025",
      description: "A majestic Bundelkhand wedding ceremony surrounded by regal architecture and sacred vows.",
      highlights: ["Royal Varmala in open courtyard", "Warm bokeh night sindoor moment", "Drone entrance with cold pyros"]
    },
    {
      id: "port-2",
      title: "Sunset Serenade at Betwa Ghats",
      category: "pre-wedding",
      tag: "Pre-Wedding",
      location: "Betwa River & Orchha Chhatris",
      cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      date: "Nov 2025",
      description: "Golden hour romance reflected upon the tranquil waters of Betwa river with regal cenotaphs in the background.",
      highlights: ["Sunset boat sequence", "Dramatic red gown trail", "Sunset silhouette portrait"]
    },
    {
      id: "port-3",
      title: "Bridal Grace: Ananya's Royal Glow",
      category: "portraits",
      tag: "Bridal Portrait",
      location: "Jhansi City Palace Hotel",
      cover: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      date: "Jan 2026",
      description: "Intricate kundan jewelry, crimson velvet lehenga, and a timeless smile captured with crisp portrait prime lenses.",
      highlights: ["Macro jewelry details", "Veil reflection shot", "Candid smiling glance"]
    },
    {
      id: "port-4",
      title: "Colors of Love: Haldi Euphoria",
      category: "rituals",
      tag: "Haldi Ceremony",
      location: "Civil Lines Lawn, Jhansi",
      cover: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      date: "Feb 2026",
      description: "Explosive yellow marigold showers, turmeric splashes, and contagious joyful laughter.",
      highlights: ["Slow-motion marigold rain", "Groom family playful splash", "Emotional blessing hug from grandma"]
    },
    {
      id: "port-5",
      title: "The Regal Groom: Kabir's Baraat",
      category: "portraits",
      tag: "Groom Portrait",
      location: "Elite Grand Hall, Jhansi",
      cover: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      date: "Nov 2025",
      description: "Regal ivory sherwani with royal safa, captured with dramatic cinematic rim lighting.",
      highlights: ["Safa tying family ritual", "Vintage sword portrait", "Royal steed arrival"]
    },
    {
      id: "port-6",
      title: "Karan & Ritika: The Jhansi Saga",
      category: "cinematic",
      tag: "Cinematic Film Teaser",
      location: "Rani Mahal & Fort View, Jhansi",
      cover: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      date: "Dec 2025",
      description: "A 4K cinematic film capturing their 5-year journey from college sweethearts to the mandap.",
      highlights: ["Drone sweep over Jhansi skyline", "Original audio vow voiceover", "High-energy sangeet montage"]
    },
    {
      id: "port-7",
      title: "Heritage Romance at Barua Sagar",
      category: "pre-wedding",
      tag: "Pre-Wedding",
      location: "Barua Sagar Lake & Fort, Jhansi",
      cover: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      date: "Oct 2025",
      description: "Historic masonry, stone carved arches and romantic strolls by the lakeside fortress.",
      highlights: ["Vintage couple styling", "Stone archway framing", "Drone top-down lake view"]
    },
    {
      id: "port-8",
      title: "Sacred Phere Under Starlit Mandap",
      category: "weddings",
      tag: "Wedding Ritual",
      location: "Hotel Bundelkhand Pride, Jhansi",
      cover: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      date: "Jan 2026",
      description: "Seven sacred vows taken amidst glowing lotus candles, fragrant tuberoses, and Vedic chants.",
      highlights: ["Havan fire silhouette", "Tender hand clasp during phere", "Emotional Vidai tears"]
    },
    {
      id: "port-9",
      title: "Intricate Mehendi Stories",
      category: "rituals",
      tag: "Mehendi Ceremony",
      location: "Sadar Bazar Family Estate, Jhansi",
      cover: "https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      date: "Dec 2025",
      description: "Dark henna etched with bride & groom portraits, musical instruments, and hidden initials.",
      highlights: ["Macro henna details", "Groom finding his name game", "Bohemian mehendi decor"]
    },
    {
      id: "port-10",
      title: "Rohan & Megha: Sangeet Night Glam",
      category: "rituals",
      tag: "Sangeet Extravaganza",
      location: "Jhansi Club Lawns",
      cover: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      date: "Jan 2026",
      description: "Pulsating bass, synchronized Bollywood choreography, sparkler blast, and unstoppable celebration.",
      highlights: ["Synchronized couple dance", "Cold pyros entrance", "High-speed shutter motion freezes"]
    },
    {
      id: "port-11",
      title: "Eternal Vows: Siddharth & Neha",
      category: "cinematic",
      tag: "Cinematic Film",
      location: "Gwalior & Jhansi Destination",
      cover: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      aspect: "landscape",
      date: "Nov 2025",
      description: "A three-day destination royal wedding film crafted with theatrical color grading and emotive sound design.",
      highlights: ["Cinematic 4K Master Grade", "Full family interviews", "Reception grandeur"]
    },
    {
      id: "port-12",
      title: "Rani Mahal Pre-Wedding Story",
      category: "pre-wedding",
      tag: "Pre-Wedding",
      location: "Rani Mahal & Jhansi Fort Grounds",
      cover: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
      aspect: "portrait",
      date: "Oct 2025",
      description: "Traditional Bundeli royal outfits contrasting with ancient red stone ramparts and ramparts at sunrise.",
      highlights: ["Sunrise flare shots", "Flowing Dupatta aerial track", "Timeless laughter"]
    }
  ],

  stories: [
    {
      id: "story-1",
      couple: "Aditya & Shweta",
      title: "The Royal Orchha Fairytale",
      subtitle: "A 3-Day Heritage Wedding Celebration by the Betwa River",
      location: "Amar Mahal & Orchha Palace, Near Jhansi",
      date: "December 14-16, 2025",
      cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
      ],
      teaserDuration: "4:32 mins",
      quote: "SR Films didn't just record our wedding — they crafted an emotional Bollywood movie that made our parents cry with joy. Every candid smile and sacred ritual was preserved like poetry.",
      narrative: "When Aditya and Shweta chose the mystical, stone-carved backdrop of Orchha for their union, we knew every frame needed to echo royalty. Starting with a sun-drenched Mehendi on the riverbanks, an electric Sangeet with sparkler fireworks, culminating in an awe-inspiring starlit Varmala, our team of 6 cinematographers documented the pure essence of their bond.",
      stats: { photos: "850+ Edited Photos", filmLength: "28 Min Feature Film", reelTeaser: "60 Sec Reel", album: "Handcrafted Italian Leather" }
    },
    {
      id: "story-2",
      couple: "Karan & Ritika",
      title: "Heritage Soulmates of Jhansi",
      subtitle: "From Childhood Friendship to a Grand Bundelkhand Wedding",
      location: "Elite Grand & Jhansi Club Lawns",
      date: "November 22-24, 2025",
      cover: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1400&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
      ],
      teaserDuration: "3:45 mins",
      quote: "The patience and artistic vision of SR Films is unmatched in Jhansi. They made us feel so comfortable in front of the lens that the candid moments look genuinely magical.",
      narrative: "Karan and Ritika have known each other since their school days in Jhansi. Their wedding was a heartwarming gathering of 700 guests filled with authentic laughter, heartfelt speeches, and energetic Bundeli folk dances. Our candid cameras caught those unseen, tender glances that define true love.",
      stats: { photos: "720+ Edited Photos", filmLength: "22 Min Feature Film", reelTeaser: "45 Sec Reel", album: "Velvet Hardbound Album" }
    },
    {
      id: "story-3",
      couple: "Aman & Priya",
      title: "Sunset Symphony: Orchha Pre-Wedding",
      subtitle: "A Dreamy Cinematic Journey along the Historic Chhatris",
      location: "Betwa Riverbank & Orchha Cenotaphs",
      date: "October 18, 2025",
      cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
      ],
      teaserDuration: "2:50 mins",
      quote: "Our pre-wedding video teaser got over 50,000 views on Instagram! Everyone kept asking which Mumbai production house shot it — and we proudly said: SR Films Jhansi!",
      narrative: "Shot over 2 tranquil days in Orchha and Barua Sagar, Aman and Priya's pre-wedding featured classic evening outfits, a vintage boat row at sunset, and dynamic drone tracking across the river rapids.",
      stats: { photos: "120+ Curated High-Res Photos", filmLength: "3:30 Min Cinematic Song Video", reelTeaser: "3 Reels for Instagram", album: "Pre-Wedding Keepsake Book" }
    }
  ],

  preweddingSpots: [
    {
      name: "Orchha Cenotaphs (Chhatris)",
      distance: "18 km from Jhansi",
      vibe: "Regal, Royal Rajput & Bundela Architecture",
      desc: "Spectacular 16th-century stone monuments along the calm Betwa river. The ultimate backdrop for royal bridal lehengas and flowing gowns.",
      bestTime: "Sunrise & Golden Hour (5:00 PM - 6:30 PM)",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Betwa River Banks & Boat Rides",
      distance: "20 km from Jhansi",
      vibe: "Romantic, Sunset Silhouettes & Water Reflections",
      desc: "Gentle river rapids, rocky outcrops, and traditional wooden boat sequences offering dreamy fairy-tale visuals.",
      bestTime: "Late Afternoon to Dusk",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Jhansi Fort & Rani Mahal Ramparts",
      distance: "Heart of Jhansi City",
      vibe: "Historic, Powerful & Majestic Heritage",
      desc: "Iconic fortress walls with panoramic city views, ancient stone archways, and vibrant historic textures.",
      bestTime: "Early Morning (Quiet & Golden light)",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Barua Sagar Fort & Lake",
      distance: "24 km from Jhansi",
      vibe: "Secluded, Lakeside Charm & Rustic Ruins",
      desc: "A hidden gem overlooking a sprawling reservoir. Perfect for drone cinematic runs and intimate romantic portraits.",
      bestTime: "Sunset",
      image: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80"
    }
  ],

  packages: [
    {
      id: "pkg-silver",
      name: "Silver Classic",
      badge: "Traditional Coverage",
      tagline: "Ideal for Intimate Weddings & Single-Day Celebrations",
      price: "₹45,000",
      period: "1 to 2 Days",
      popular: false,
      features: [
        "1 Senior Traditional Photographer",
        "1 Full HD Traditional Videographer",
        "300+ Color Graded High-Resolution Digital Photos",
        "Full Length Traditional Edited Video (2-3 Hours)",
        "Luxury Hardcover Photo Album (35 Sheets / 70 Pages)",
        "Online Private Cloud Gallery (Valid 1 Year)",
        "USB Drive with all Raw & Edited Footage"
      ],
      popularFor: "Day weddings, ring ceremony & intimate family gatherings"
    },
    {
      id: "pkg-gold",
      name: "Gold Cinematic",
      badge: "Most Popular in Jhansi",
      tagline: "The Perfect Blend of Candid Emotion & High-Definition Cinema",
      price: "₹85,000",
      period: "2 to 3 Days (Complete Rituals)",
      popular: true,
      features: [
        "2 Candid Master Photographers (Bride & Groom sides)",
        "2 Cinematic Cinematographers (Sony FX Cinema Line)",
        "1 4K Drone Pilot for Aerial Sweeps & Entrances",
        "600+ Master Edited High-Resolution Photos",
        "4-5 Minute Theatrical Cinematic Teaser / Highlight Film",
        "Full Length Edited Wedding Film with Rituals (2.5 Hours)",
        "1 Express Instagram Reel delivered within 48 Hours!",
        "1 Premium Velvet/Leather Album (40 Sheets / 80 Pages)",
        "Complimentary Pre-Wedding Shoot (1 Day in Orchha / Jhansi)"
      ],
      popularFor: "Complete 2-3 Day Grand Weddings with Sangeet, Haldi & Reception"
    },
    {
      id: "pkg-royal",
      name: "Royal Diamond Experience",
      badge: "Luxury Destination Tier",
      tagline: "Uncompromising Cinematic Grandeur with Full Production Crew",
      price: "₹1,45,000",
      period: "3 to 4 Days (All Functions)",
      popular: false,
      features: [
        "Comprehensive 7-Person Elite Crew",
        "3 Candid Photographers + 2 Gimbal Cinematographers",
        "Dual 4K Cinema Drones (Indoor & Outdoor Safe Flights)",
        "Same Day Edit (SDE) Teaser screened live at your Reception!",
        "Exclusive Conceptual Pre-Wedding Film with Story Scripting",
        "8-10 Minute Extended Cinematic Wedding Film",
        "Full Length Traditional Multicam 4K Video",
        "2 Luxury Master Italian Leather Albums + 2 Parents' Mini Albums",
        "Live YouTube 4K Streaming for outstation & overseas relatives",
        "Lifetime Cloud Storage Backup & Hard Drive Presentation Box"
      ],
      popularFor: "Palace, destination, and grand luxury celebrations"
    }
  ],

  testimonials: [
    {
      name: "Dr. Shubham & Dr. Pooja Verma",
      event: "Royal Wedding at Orchha Palace",
      location: "Jhansi / Orchha",
      rating: 5,
      date: "January 2026",
      text: "Choosing SR Films Jhansi was the best decision of our wedding! Sachin and his team were polite, invisible when needed, and captured pure gold. When we saw our wedding teaser, the entire hall got emotional. Truly the pride of Jhansi's wedding photography!"
    },
    {
      name: "Rohit & Meenakshi Bundela",
      event: "Pre-Wedding & 3-Day Wedding",
      location: "Civil Lines, Jhansi",
      rating: 5,
      date: "December 2025",
      text: "Their drone shots around the Orchha Chhatris look like a Sanjay Leela Bhansali movie! And the album quality is pure Italian leather luxury. Delivery was on time as promised in the contract. 10/10 recommend to every couple in Bundelkhand."
    },
    {
      name: "Vikram & Ananya Singh",
      event: "Destination Wedding & Sangeet",
      location: "Elite Grand Hotel, Jhansi",
      rating: 5,
      date: "November 2025",
      text: "The 48-hour express Instagram reel was insane! It crossed 70k views and all our friends couldn't stop praising the angles and color grade. Thank you SR Films team for immortalizing our most special days!"
    }
  ],

  faqs: [
    {
      q: "Where is SR Films located in Jhansi?",
      a: "Our studio is located at 757/2, Bade Hanuman Mandir, Chandra Vihar Colony, near BKD College, Jhansi - 284001. You can walk in to see our physical albums, cinema gear, and recent film cuts."
    },
    {
      q: "How far in advance should we book our wedding dates?",
      a: "Wedding dates during the peak Bundelkhand season (November to March) book out 4 to 8 months in advance. We accept only one wedding per date to guarantee 100% focused attention, so we advise reserving your date early."
    },
    {
      q: "Do you travel outside Jhansi for destination weddings?",
      a: "Yes! While we are proud to be Jhansi's leading studio, our team regularly covers weddings across Orchha, Gwalior, Khajuraho, Kanpur, Lucknow, Jaipur, and destination venues throughout India."
    },
    {
      q: "When do we receive our photos, films, and albums?",
      a: "We deliver 20-30 sneak-peek edited photos within 72 hours, an express Instagram reel within 48-72 hours, the complete photo gallery within 3-4 weeks, and the finalized 4K cinematic film and handcrafted albums within 5-7 weeks."
    },
    {
      q: "Can we customize packages according to our budget & rituals?",
      a: "Absolutely! Every wedding is unique. You can pick and choose services—like adding drone coverage, extra candid photographers, or custom parent albums. Talk to us on WhatsApp and we will tailor the best quote for you."
    }
  ]
};

// Export to window for browser access
if (typeof window !== "undefined") {
  window.SR_DATA = SR_DATA;
}
