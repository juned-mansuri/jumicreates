/**
 * JUMI CREATES - Central Portfolio Data Store
 * 
 * To add or replace projects:
 * 1. Place your video files in public/media/reels/, public/media/web/, or public/media/motion/
 * 2. Update the 'video' / 'previewVideo' path and 'poster' path here.
 * 3. The components will automatically detect and render the real video with autoplay, looping,
 *    and pause-on-scroll. If empty, an ultra-stylish placeholder is shown.
 */

export const REELS_PROJECTS = [
  {
    id: "reel-cycle",
    title: "10 DIN, ANAGINAT",
    category: "DOCUMENTARY / REEL",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "Patriotic Journey • 4K Grade",
    description: "Cinematic short-form documentary tracking a 10-day cross-country patriotic cycling expedition. Features sound design and historical storytelling.",
    video: "/Reels/cycle reel final v2.mp4",
    poster: "/thumbnails/cycle reel final v2.jpg",
    tags: ["Documentary", "Cinematic Cut", "Sound Design", "Color Grade"],
    accentGradient: "from-amber-950 via-orange-950 to-black"
  },
  {
    id: "reel-doctor-2",
    title: "HEALTHCARE MYTHS PT. 2",
    category: "HIGH RETENTION",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "Kinetic Captions • 85% Hold",
    description: "Retention-engineered medical talking-head short with custom animated kinetic typography, visual punch-ins, and pattern interrupts.",
    video: "/Reels/doctor reel 2 v2.1.mp4",
    poster: "/thumbnails/doctor reel 2 v2.1.jpg",
    tags: ["Retention Hook", "Kinetic Typography", "Medical", "Short-Form"],
    accentGradient: "from-teal-950 via-emerald-950 to-black"
  },
  {
    id: "reel-doctor-1",
    title: "MEDICAL ADVICE PT. 1",
    category: "HIGH RETENTION",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "Talking Head • Dynamic Captions",
    description: "Engaging doctor advice reel crafted with audio-reactive pacing, dynamic lower-thirds, and precision caption animation for viral reach.",
    video: "/Reels/doctor reel v1.mp4",
    poster: "/thumbnails/doctor reel v1.jpg",
    tags: ["Talking Head", "Motion Graphics", "Healthcare", "Viral Cut"],
    accentGradient: "from-cyan-950 via-slate-900 to-black"
  },
  {
    id: "reel-tiranga",
    title: "VISHAL TIRANGA YATRA",
    category: "MOTION MAP / VFX",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "3D Map Tracking • Route VFX",
    description: "Intricate map tracking journey animation showing a 396km patriotic tour across India with custom 3D route vectors and historic emblems.",
    video: "/Reels/finalv2.mp4",
    poster: "/thumbnails/finalv2.jpg",
    tags: ["Map Animation", "3D Tracking", "VFX", "Culture"],
    accentGradient: "from-amber-900 via-orange-950 to-black"
  },
  {
    id: "reel-elite-3d",
    title: "KUMAR X ELITE CARDS",
    category: "3D COMMERCIAL",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "CGI Robot • Metal Card Reveal",
    description: "High-octane commercial featuring 3D animated robotic arms, laser engraved metallic card reveals, and dramatic cinematic lighting.",
    video: "/Reels/kumarxelitecards.mp4",
    poster: "/thumbnails/kumarxelitecards.jpg",
    tags: ["3D CGI", "Commercial", "Product Promo", "VFX"],
    accentGradient: "from-red-950 via-neutral-900 to-black"
  },
  {
    id: "reel-sankalp",
    title: "PAANCH SANKALP",
    category: "MOTION GRAPHICS",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "Kinetic Hindi Type • Ink Bleed",
    description: "Traditional Indian mandala motifs combined with strike-through kinetic Hindi typography and fluid ink bleed motion design.",
    video: "/Reels/stamp pin.mp4",
    poster: "/thumbnails/stamp pin.jpg",
    tags: ["Motion Typography", "Hindi Type", "Cultural", "Animation"],
    accentGradient: "from-amber-950 via-stone-900 to-black"
  },
  {
    id: "reel-jeeja",
    title: "JEEJA FASHION COUTURE",
    category: "BRAND SHOWCASE",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "Retail Boutique • Dynamic Tour",
    description: "Dynamic boutique showcase capturing high-end ethnic wear, designer sherwanis, and luxury wedding attire with snappy transitions.",
    video: "/Reels/jeeja.mp4",
    poster: "/thumbnails/jeeja.jpg",
    tags: ["Fashion", "Retail Promo", "Commercial", "4K Cut"],
    accentGradient: "from-rose-950 via-pink-950 to-black"
  },
  {
    id: "reel-sarthak",
    title: "CREATOR PROFILE INTRO",
    category: "CREATOR HOOK",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "60 FPS • Personal Brand",
    description: "Punchy creator channel introduction sequence with smooth zoom transitions, sound accents, and modern social video styling.",
    video: "/Reels/Sarthak Intro.mp4",
    poster: "/thumbnails/Sarthak Intro.jpg",
    tags: ["Personal Brand", "YouTube Shorts", "Pacing", "Storytelling"],
    accentGradient: "from-indigo-950 via-purple-950 to-black"
  },
  {
    id: "reel-card-cloche",
    title: "CLOCHE CARD REVEAL",
    category: "3D ANIMATION",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "Product Teaser • Cloche Reveal",
    description: "Clean 3D animation featuring a robotic arm lifting a luxury matte cloche to reveal a custom metallic credit card.",
    video: "/Reels/Instagram_7.mp4",
    poster: "/thumbnails/Instagram_7.jpg",
    tags: ["3D Animation", "Product Reveal", "Commercial", "Motion ID"],
    accentGradient: "from-blue-950 via-slate-900 to-black"
  },
  {
    id: "reel-card-review",
    title: "METAL CARD BREAKDOWN",
    category: "VIRAL HOOK",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "Physical Review • Retention 90%",
    description: "Direct-to-camera unboxing and retention hook demonstrating custom laser engraving on solid metal payment cards.",
    video: "/Reels/Instagram_8.mp4",
    poster: "/thumbnails/Instagram_8.jpg",
    tags: ["Retention Hook", "Unboxing", "Short-Form", "Commercial"],
    accentGradient: "from-emerald-950 via-zinc-900 to-black"
  },
  {
    id: "reel-pattern",
    title: "PATTERN RECOGNITION",
    category: "PODCAST SHORT",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "Mic Hook • Kinetic Captions",
    description: "Crisp studio audio, bold yellow contrast typography, and tight cutaways for a thought-provoking creator insight reel.",
    video: "/Reels/Instagram_10.mp4",
    poster: "/thumbnails/Instagram_10.jpg",
    tags: ["Podcast", "Kinetic Subtitles", "Mindset", "Creator"],
    accentGradient: "from-yellow-950 via-neutral-900 to-black"
  },
  {
    id: "reel-milestone",
    title: "1 LAKH MILESTONE",
    category: "VFX / STORY",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "Currency Particles • 3D VFX",
    description: "Story-driven creator revenue milestone breakdown featuring particle currency 3D dynamics and animated neon typography.",
    video: "/Reels/Instagram_11.mp4",
    poster: "/thumbnails/Instagram_11.jpg",
    tags: ["VFX Particles", "Storytelling", "Finance", "Shorts"],
    accentGradient: "from-green-950 via-emerald-950 to-black"
  },
  {
    id: "reel-bts",
    title: "CREATIVE STUDIO BTS",
    category: "VLOG / BTS",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "Agency Life • Unfiltered Energy",
    description: "Candid behind-the-scenes moments showcasing the creator studio vibe, fast editing banter, and creative team synergy.",
    video: "/Reels/Instagram_12.mp4",
    poster: "/thumbnails/Instagram_12.jpg",
    tags: ["Behind The Scenes", "Vlog", "Authentic", "Community"],
    accentGradient: "from-purple-950 via-zinc-900 to-black"
  },
  {
    id: "reel-trip",
    title: "CATASTROPHIC TRIP",
    category: "EXPERIMENTAL",
    type: "video",
    aspectRatio: "9/16",
    subtitle: "Vintage Stamp • Paper Cutout",
    description: "Playful mixed-media montage pairing vintage postage stamp borders, retro train animations, and raw travel memories.",
    video: "/Reels/p1.mp4",
    poster: "/thumbnails/p1.jpg",
    tags: ["Stop Motion", "Mixed Media", "Travel", "Creative Edit"],
    accentGradient: "from-stone-900 via-amber-950 to-zinc-950"
  }
];

export const WEB_PROJECTS = [
  {
    id: "web-stayonthetop",
    title: "Stay On The Top — Competitive Internet Leaderboard",
    category: "Web + AI",
    type: "website",
    browserUrl: "stayonthetop.vercel.app",
    liveUrl: "https://stayonthetop.vercel.app/",
    previewImage: "/thumbnails/stayonthetop.png",
    previewVideo: "",
    poster: "/thumbnails/stayonthetop.png",
    description: "The internet's real-time pay-to-rank platform. Companies, creators, and digital products bid for position, claim rankings, and defend their spot at the top of the internet.",
    tags: ["LEADERBOARD", "BID ENGINE", "NEXT.JS", "FINTECH", "VIBE CODED"],
    uptime: "Live Production"
  },
  {
    id: "web-meeratradelink",
    title: "Mira's Tradelink — B2B Wholesale FMCG Platform",
    category: "Web + AI",
    type: "website",
    browserUrl: "meeratradelink.vercel.app",
    liveUrl: "https://meeratradelink.vercel.app/",
    previewImage: "/thumbnails/meeratradelink.png",
    previewVideo: "",
    poster: "/thumbnails/meeratradelink.png",
    description: "Wholesale B2B eCommerce catalog and quotation pipeline for quality FMCG products (Swadesh). Features instant category filtering and direct quote generation.",
    tags: ["B2B COMMERCE", "CATALOG", "FMCG", "REACT", "VIBE CODED"],
    uptime: "Live Production"
  },
  {
    id: "web-mnar",
    title: "MNAR Clothing Brand Platform",
    category: "Web + AI",
    type: "website",
    browserUrl: "mnarclothing.vercel.app",
    liveUrl: "https://mnarclothing.vercel.app/",
    previewVideo: "",
    poster: "/thumbnails/mnar Website.jpg",
    previewImage: "/thumbnails/mnar Website.jpg",
    description: "Bespoke fashion eCommerce platform and interactive lookbook built for MNAR Clothing. Features high-res garment dynamic reveals, fluid typography, and interactive store architecture.",
    tags: ["ECOMMERCE", "INTERACTIVE UI", "REACT", "FASHION BRAND", "VIBE CODED"],
    uptime: "Live Production"
  },
  {
    id: "web-elitecards",
    title: "EliteCards — Luxury Custom Metal & NFC Cards",
    category: "Web + AI",
    type: "website",
    browserUrl: "elitecards.vercel.app",
    liveUrl: "https://elitecards.vercel.app/",
    previewImage: "/thumbnails/elitecards.png",
    previewVideo: "",
    poster: "/thumbnails/elitecards.png",
    description: "High-end product showcase for aerospace-grade stainless steel and titanium laser-engraved luxury metal cards with integrated digital NFC technology.",
    tags: ["LUXURY HARDWARE", "NFC TECH", "3D PRODUCT", "REACT", "VIBE CODED"],
    uptime: "Live Production"
  },
  {
    id: "web-mufests",
    title: "MU Anant 1.0 — Flagship Hackathon Platform",
    category: "Web + AI",
    type: "website",
    browserUrl: "mufests.com/techfest",
    liveUrl: "https://www.mufests.com/techfest",
    previewImage: "/thumbnails/mufests.png",
    previewVideo: "",
    poster: "/thumbnails/mufests.png",
    description: "Official interactive event hub for Mandsaur University's 36-hour flagship hardware and software hackathon. Dynamic schedule, registration engine, and participant portal.",
    tags: ["HACKATHON", "EVENT HUB", "REALTIME", "COMMUNITY", "VIBE CODED"],
    uptime: "Live Production"
  },
  {
    id: "web-narachi",
    title: "Narachi — Cloud SaaS & Authentication Portal",
    category: "Web + AI",
    type: "website",
    browserUrl: "narachi.vercel.app",
    liveUrl: "https://narachi.vercel.app/",
    previewImage: "/thumbnails/narachi.png",
    previewVideo: "",
    poster: "/thumbnails/narachi.png",
    description: "Modern enterprise management & client authentication portal developed with Arivan Infotech. Built with clean secure access controls and responsive UI architecture.",
    tags: ["SAAS PORTAL", "AUTH SYSTEM", "ENTERPRISE", "REACT", "VIBE CODED"],
    uptime: "Live Production"
  }
];

export const MOTION_PROJECTS = [
  {
    id: "motion-laser",
    title: "LASER DIARIES #1: MATERIAL TEST",
    category: "STUDIO VLOG",
    subtitle: "POV Fabrication • Macro Engraving",
    description: "Long-form cinematic studio diary documenting precision laser engraving, physical merchandise testing, and creative fabrication at @jumicreates.",
    video: "/Reels/horizontal 1.mp4",
    poster: "/thumbnails/horizontal 1.jpg",
    tags: ["16:9 HORIZONTAL", "STUDIO VLOG", "LASER FABRICATION", "POV"],
    accentGradient: "from-zinc-900 via-neutral-900 to-black"
  },
  {
    id: "motion-strategy",
    title: "STUDIO STRATEGY & BREAKDOWN",
    category: "CREATIVE STRATEGY",
    subtitle: "Whiteboard Ideation • Retention Pacing",
    description: "Behind-the-scenes deep dive into content strategy, whiteboard mapping, and high-retention production frameworks at @jumicreates.",
    video: "/Reels/horizontal 2.mp4",
    poster: "/thumbnails/horizontal 2.jpg",
    tags: ["16:9 HORIZONTAL", "STRATEGY", "CREATIVE DIRECTION", "WHITEBOARD"],
    accentGradient: "from-amber-950 via-zinc-900 to-black"
  },
  {
    id: "motion-01",
    title: "KINETIC UI SHOWCASE",
    category: "MOTION ID",
    subtitle: "120 FPS • Kinetic Typography",
    description: "Expressive motion design packaging, kinetic text hierarchies, and slick interface micro-animations for high-impact social clips.",
    video: "",
    poster: "",
    tags: ["120 FPS", "KINETIC UI", "AFTER EFFECTS"],
    accentGradient: "from-zinc-900 via-neutral-900 to-black"
  },
  {
    id: "motion-02",
    title: "ABSTRACT 3D FREQUENCIES",
    category: "AUDIO VISUALS",
    subtitle: "Procedural Mesh • Sound Reactive",
    description: "Audio-driven procedural geometry and reactive particle waves designed for digital title sequences and brand loops.",
    video: "",
    poster: "",
    tags: ["BLENDER", "PROCEDURAL", "AUDIO REACTIVE"],
    accentGradient: "from-purple-950 via-indigo-950 to-black"
  }
];

export const CAPABILITIES = [
  {
    number: "01",
    title: "VIBE CODING",
    description: "Turning ideas into working websites, web apps, tools and prototypes using AI-assisted development workflows.",
    tags: ["HTML5 / Tailwind", "React / Vite / Next.js", "Rapid Prototyping"]
  },
  {
    number: "02",
    title: "APIS + DATABASES",
    description: "Connecting products to APIs, databases and external services.",
    tags: ["Supabase & SQL", "REST & GraphQL", "Custom Endpoints"]
  },
  {
    number: "03",
    title: "AI INTEGRATION",
    description: "Integrating AI APIs into products, tools and creative workflows.",
    tags: ["OpenAI & Claude APIs", "Whisper Transcripts", "Prompt Engineering"]
  },
  {
    number: "04",
    title: "AUTOMATION",
    description: "Building workflows that connect tools, data and AI to automate repetitive work.",
    tags: ["Make / Zapier / n8n", "Cloud Webhooks", "Render Pipelines"]
  }
];

export const SERVICES = [
  {
    iconKey: "film",
    title: "VIDEO EDITING",
    description: "Short-form content, Reels, Shorts, YouTube videos and promotional content."
  },
  {
    iconKey: "sparkles",
    title: "MOTION GRAPHICS",
    description: "Animated visuals, explainers, typography and social graphics."
  },
  {
    iconKey: "code",
    title: "WEB + AI",
    description: "Websites, apps, prototypes and AI-powered experiences."
  },
  {
    iconKey: "camera",
    title: "CONTENT CREATION",
    description: "Shooting, editing and creating content for social platforms."
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "IDEA",
    description: "Understand the idea and direction."
  },
  {
    number: "02",
    title: "BUILD",
    description: "Edit, design, code or prototype."
  },
  {
    number: "03",
    title: "ITERATE",
    description: "Refine the visuals, interaction and details."
  },
  {
    number: "04",
    title: "SHIP",
    description: "Deliver the finished content, website or product."
  }
];

export const SOCIAL_LINKS = {
  instagram: {
    name: "Instagram",
    handle: "@thejumicreates",
    url: "https://www.instagram.com/thejumicreates/"
  },
  x: {
    name: "X (Twitter)",
    handle: "@bytesized_juned",
    url: "https://x.com/bytesized_juned"
  },
  email: {
    name: "Email",
    handle: "jumicreates@gmail.com",
    url: "mailto:jumicreates@gmail.com"
  },
  youtube: {
    name: "YouTube",
    handle: "@jumicreates",
    url: "https://www.youtube.com/@jumicreates"
  },
  linkedin: {
    name: "LinkedIn",
    handle: "bytesizedjuned",
    url: "https://www.linkedin.com/in/bytesizedjuned/"
  }
};

