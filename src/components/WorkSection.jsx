import React, { useState } from 'react';
import ReelsCarousel from './ReelsCarousel';
import WebCarousel from './WebCarousel';
import MotionCarousel from './MotionCarousel';

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full" id="work" data-purpose="portfolio-showcase">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-wider text-brand-black mb-3">
            <span>SELECTED WORK 2024–2026</span>
          </div>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight uppercase leading-tight">
            FROM FRAMES TO FULL DIGITAL EXPERIENCES
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-100 p-1.5 rounded-full w-max border border-gray-200 self-start md:self-auto overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'all'
                ? 'bg-brand-black text-white shadow-xs'
                : 'text-brand-black/70 hover:text-brand-black'
            }`}
          >
            All Work
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('reels')}
            className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'reels'
                ? 'bg-brand-black text-white shadow-xs'
                : 'text-brand-black/70 hover:text-brand-black'
            }`}
          >
            Video &amp; Reels
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('web')}
            className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'web'
                ? 'bg-brand-black text-white shadow-xs'
                : 'text-brand-black/70 hover:text-brand-black'
            }`}
          >
            Web + AI
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('motion')}
            className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'motion'
                ? 'bg-brand-black text-white shadow-xs'
                : 'text-brand-black/70 hover:text-brand-black'
            }`}
          >
            Motion
          </button>
        </div>
      </div>

      {/* Carousels based on tab filter */}
      {(activeTab === 'all' || activeTab === 'reels') && <ReelsCarousel />}
      {(activeTab === 'all' || activeTab === 'web') && <WebCarousel />}
      {(activeTab === 'all' || activeTab === 'motion') && <MotionCarousel />}
    </section>
  );
}
