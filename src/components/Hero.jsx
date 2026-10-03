import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown, MessageCircle, Play, Pause, Volume2, VolumeX, Sparkles, Film } from 'lucide-react';

export default function Hero() {
  const [activeVideo, setActiveVideo] = useState(1); // 1 = Laser Craft, 2 = Strategy
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const videoData = {
    1: {
      src: 'https://github.com/juned-mansuri/jumicreates/releases/download/v1.0.0/horizontal.1.mp4',
      poster: '/thumbnails/horizontal 1.jpg',
      title: 'THE CRAFT: LASER DIARIES #1',
      subtitle: 'Material Testing & Physical Fabrication',
      badge: 'REC ● 00:01:27',
      badgeType: 'rec',
      specs: '4K // 24 FPS',
    },
    2: {
      src: 'https://github.com/juned-mansuri/jumicreates/releases/download/v1.0.0/horizontal.2.mp4',
      poster: '/thumbnails/horizontal 2.jpg',
      title: 'THE MIND: STUDIO STRATEGY',
      subtitle: 'Whiteboard Ideation & Content Pacing',
      badge: 'LIVE ● 00:01:12',
      badgeType: 'live',
      specs: 'HD // 25 FPS',
    },
  };

  const current = videoData[activeVideo];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay muted as required by modern browsers
    video.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [activeVideo]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full h-[100dvh] min-h-[680px] max-h-[1100px] flex flex-col justify-between items-center overflow-hidden bg-black select-none"
      data-purpose="fullscreen-video-hero"
    >
      {/* 1. FULL-SCREEN BACKGROUND HORIZONTAL VIDEO LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          key={current.src}
          ref={videoRef}
          src={current.src}
          poster={current.poster}
          playsInline
          muted={isMuted}
          loop
          autoPlay
          preload="auto"
          className="w-full h-full object-cover transition-opacity duration-700 filter brightness-[0.72] contrast-[1.08]"
        />

        {/* Cinematic Multi-stop Vignette & Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/85 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-10 pointer-events-none" />

        {/* Subtle high-tech scanline texture */}
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:100%_4px] pointer-events-none z-10" />
      </div>

      {/* Top Spacer to accommodate floating navbar */}
      <div className="w-full pt-20 sm:pt-24 z-20" />

      {/* 2. CENTER HERO CONTENT: PROUD, IMPACTFUL, CINEMATIC */}
      <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center px-4 my-auto">
        {/* Authentic Brand Crest Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 shadow-2xl mb-5 sm:mb-6">
          <img
            src="/logo.jpg"
            alt="JUMI Brand Mark"
            className="w-5 h-5 rounded-full object-cover ring-1 ring-brand-lime/60"
          />
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-white">
            JUMI CREATES // STUDIO IN ACTION
          </span>
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
        </div>

        {/* Giant Bold Headline */}
        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8.2rem] tracking-tighter text-white uppercase leading-[0.88] drop-shadow-2xl select-none">
          JUMI CREATES
        </h1>

        {/* Supporting statement */}
        <p className="text-base sm:text-lg md:text-xl font-normal text-white/90 max-w-xl mx-auto leading-relaxed mt-4 sm:mt-5 mb-8 drop-shadow-md">
          I turn ideas into content, visuals and working digital experiences.
        </p>

        {/* Minimal Pill CTA Bar */}
        <div className="flex items-center gap-2 sm:gap-3 bg-black/60 backdrop-blur-2xl p-1.5 rounded-full border border-white/25 shadow-2xl">
          <button
            onClick={() => scrollToSection('work')}
            className="group flex items-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-brand-black font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3 rounded-full shadow-lg transition-transform active:scale-95"
          >
            <span>VIEW MY WORK</span>
            <ArrowUpRight className="w-4 h-4 arrow-rotate" />
          </button>

          <div className="w-px h-5 bg-white/20 hidden sm:block" />

          <a
            href="#contact"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-3 rounded-full border border-white/20 backdrop-blur-md transition-colors"
          >
            <div className="w-4 h-4 rounded-full bg-brand-lime flex items-center justify-center text-brand-black">
              <MessageCircle className="w-2.5 h-2.5 fill-current" />
            </div>
            <span>LET'S CREATE</span>
          </a>
        </div>
      </div>

      {/* 3. CINEMATIC BOTTOM HUD BAR & CONTROLS */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Live Camera HUD Metadata */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white">
            <span
              className={`w-2 h-2 rounded-full ${
                current.badgeType === 'rec' ? 'bg-rose-500 animate-pulse' : 'bg-brand-lime animate-ping'
              }`}
            />
            <span className="font-bold">{current.badge}</span>
            <span className="text-white/40">|</span>
            <span className="text-white/80">{current.specs}</span>
          </div>

          <div className="text-[11px] font-mono text-white/70 tracking-wide uppercase truncate max-w-xs">
            {current.title}
          </div>
        </div>

        {/* Center: Scroll Down Anchor */}
        <button
          onClick={() => scrollToSection('work')}
          aria-label="Scroll to portfolio"
          className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-widest text-white/80 hover:text-white hover:bg-black/80 transition-all focus:outline-none"
        >
          <span>PORTFOLIO</span>
          <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-brand-lime" />
        </button>

        {/* Right: Interactive Video Switcher & Audio/Play Controls */}
        <div className="flex items-center gap-2">
          {/* Dual Video Switcher Pill */}
          <div className="flex items-center bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
            <button
              type="button"
              onClick={() => setActiveVideo(1)}
              className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-all ${
                activeVideo === 1
                  ? 'bg-brand-lime text-brand-black shadow-xs'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              01 CRAFT
            </button>
            <button
              type="button"
              onClick={() => setActiveVideo(2)}
              className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-all ${
                activeVideo === 2
                  ? 'bg-brand-lime text-brand-black shadow-xs'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              02 STRATEGY
            </button>
          </div>

          {/* Sound Mute / Unmute Button */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute studio background audio' : 'Mute studio background audio'}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-black transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4 text-brand-lime hover:text-brand-black" />
            )}
          </button>

          {/* Play / Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-black transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
