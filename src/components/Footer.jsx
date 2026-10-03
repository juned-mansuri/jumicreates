import React from 'react';
import { InstagramIcon, XIcon, YouTubeIcon, LinkedInIcon, MailIcon } from './SocialIcons';
import { SOCIAL_LINKS } from '../data/projects';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-8 px-4 sm:px-6 md:px-8" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-medium text-gray-500">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg overflow-hidden border border-gray-200">
            <img
              src="/logo.jpg"
              alt="JUMI logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-extrabold text-base text-brand-black tracking-tighter">
            JUMI CREATES
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
          <span className="text-[11px] text-gray-400">
            © 2026 JUMI Creates. All rights reserved.
          </span>
        </div>

        {/* Social / Professional Links */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 font-mono text-[11px]">
          <a
            href={SOCIAL_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile @thejumicreates"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-brand-lime text-brand-black border border-gray-200/80 transition-all font-bold uppercase tracking-wider"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Instagram</span>
          </a>

          <a
            href={SOCIAL_LINKS.x.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X Twitter profile @bytesized_juned"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-brand-lime text-brand-black border border-gray-200/80 transition-all font-bold uppercase tracking-wider"
          >
            <XIcon className="w-3 h-3" />
            <span>X</span>
          </a>

          <a
            href={SOCIAL_LINKS.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube channel @jumicreates"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-brand-lime text-brand-black border border-gray-200/80 transition-all font-bold uppercase tracking-wider"
          >
            <YouTubeIcon className="w-3.5 h-3.5" />
            <span>YouTube</span>
          </a>

          <a
            href={SOCIAL_LINKS.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile bytesizedjuned"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-brand-lime text-brand-black border border-gray-200/80 transition-all font-bold uppercase tracking-wider"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={SOCIAL_LINKS.email.url}
            aria-label="Email jumicreates@gmail.com"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-brand-lime text-brand-black border border-gray-200/80 transition-all font-bold uppercase tracking-wider"
          >
            <MailIcon className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
