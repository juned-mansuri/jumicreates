import React from 'react';
import { InstagramIcon, XIcon, YouTubeIcon, LinkedInIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../data/projects';

export default function About() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white max-w-7xl mx-auto w-full" id="about" data-purpose="about-section">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
        {/* Authentic Logo Brand Visual */}
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl overflow-hidden bg-white flex-shrink-0 p-1.5 shadow-md border border-gray-200">
          <div className="w-full h-full rounded-2xl bg-brand-charcoal relative overflow-hidden group">
            <img
              src="/logo.jpg"
              alt="JUMI Logo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Minimal status indicator */}
            <div className="absolute bottom-3 left-3 right-3 bg-black/75 py-1.5 px-3 rounded-full border border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-brand-lime tracking-wider uppercase font-bold">
                JUMI CREATES
              </span>
              <span className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Bio */}
        <div className="space-y-5 text-left flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-wider text-brand-black">
            <span>ABOUT JUMI</span>
          </div>

          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-brand-black uppercase tracking-tight leading-snug">
            CREATIVE BY DEFAULT.<br />TECHNICAL BY CHOICE.
          </h2>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl">
            I like working at the intersection of creativity and technology — editing videos, designing motion, building websites and experimenting with AI to turn ideas into something people can actually see, use and experience.
          </p>

          <div className="flex flex-wrap gap-5 pt-3">
            <div className="flex items-center gap-2.5">
              <span className="font-black text-xl sm:text-2xl text-brand-black">
                ~2K
              </span>
              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                Followers &amp; Collaborators
              </span>
            </div>

            <div className="w-px h-6 bg-gray-200 self-center hidden sm:block" />

            <div className="flex items-center gap-2.5">
              <span className="font-black text-xl sm:text-2xl text-brand-black">
                100%
              </span>
              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                End-to-End Ownership
              </span>
            </div>
          </div>

          {/* Social Links Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <a
              href={SOCIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @thejumicreates"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-brand-lime text-brand-black text-xs font-mono font-bold transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href={SOCIAL_LINKS.x.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X @bytesized_juned"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-brand-lime text-brand-black text-xs font-mono font-bold transition-colors"
            >
              <XIcon className="w-3 h-3" />
              <span>X</span>
            </a>
            <a
              href={SOCIAL_LINKS.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube @jumicreates"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-brand-lime text-brand-black text-xs font-mono font-bold transition-colors"
            >
              <YouTubeIcon className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn bytesizedjuned"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-brand-lime text-brand-black text-xs font-mono font-bold transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
