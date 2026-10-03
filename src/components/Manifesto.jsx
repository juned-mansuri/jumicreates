import React from 'react';

export default function Manifesto() {
  return (
    <section className="w-full bg-gray-50/70 py-12 sm:py-16 px-5 sm:px-10 md:px-16 border-y border-gray-100" data-purpose="statement-section">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-brand-black bg-brand-lime px-4 py-1 rounded-full inline-block">
          CREATIVE DIRECTION &amp; TECHNICAL EXECUTION
        </span>
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-5xl text-brand-black tracking-tight leading-snug sm:leading-tight">
          "I DON'T JUST MAKE THINGS LOOK GOOD.<br className="hidden sm:inline" /> I MAKE IDEAS WORK."
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-brand-black/70 max-w-2xl mx-auto font-normal leading-relaxed">
          Bridging video production, motion design, rapid vibe-coding, and custom AI tools. From viral TikTok/Reels retention hooks to functional software interfaces.
        </p>
      </div>
    </section>
  );
}
