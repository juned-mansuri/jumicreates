import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { InstagramIcon, XIcon, YouTubeIcon, LinkedInIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../data/projects';

export default function FinalCTA() {
  return (
    <section
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50/60 border-t border-gray-100 text-center relative overflow-hidden w-full"
      id="contact"
      data-purpose="cta-section"
    >
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-brand-black bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-2xs mb-6 inline-block">
          READY TO ELEVATE YOUR BRAND?
        </span>

        <h2 className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-black uppercase tracking-tight leading-[0.92] mb-6">
          HAVE AN IDEA?<br />
          <span className="text-brand-black">LET'S MAKE IT REAL.</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-brand-black/75 max-w-lg mb-10 px-2 leading-relaxed">
          Whether you need a high-retention video campaign, kinetic motion graphics, or a custom vibe-coded AI web app.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="mailto:jumicreates@gmail.com?subject=Project%20Inquiry%20-%20JUMI%20Creates"
            className="group flex items-center gap-3 bg-brand-lime hover:bg-brand-lime-hover text-brand-black font-extrabold text-sm sm:text-base md:text-lg uppercase tracking-wider px-7 sm:px-9 py-4 rounded-full shadow-sm transition-transform active:scale-95"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-5 h-5 arrow-rotate" />
          </a>

          <a
            href="mailto:jumicreates@gmail.com"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-black border border-gray-200 font-bold text-sm sm:text-base uppercase tracking-wider px-7 sm:px-8 py-4 rounded-full shadow-2xs transition-colors"
          >
            <Mail className="w-4 h-4 text-brand-black" />
            <span>EMAIL ME</span>
          </a>
        </div>

        {/* Verified Social Handles Direct Links */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono">
          <a
            href={SOCIAL_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-brand-lime text-brand-black border border-gray-200 shadow-2xs transition-all font-semibold"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@thejumicreates</span>
          </a>

          <a
            href={SOCIAL_LINKS.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-brand-lime text-brand-black border border-gray-200 shadow-2xs transition-all font-semibold"
          >
            <XIcon className="w-3 h-3" />
            <span>@bytesized_juned</span>
          </a>

          <a
            href={SOCIAL_LINKS.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-brand-lime text-brand-black border border-gray-200 shadow-2xs transition-all font-semibold"
          >
            <YouTubeIcon className="w-3.5 h-3.5" />
            <span>@jumicreates</span>
          </a>

          <a
            href={SOCIAL_LINKS.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-brand-lime text-brand-black border border-gray-200 shadow-2xs transition-all font-semibold"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>bytesizedjuned</span>
          </a>
        </div>
      </div>
    </section>
  );
}
