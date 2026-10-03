import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarouselDrag } from '../hooks/useCarouselDrag';
import BrowserCard from './BrowserCard';
import { WEB_PROJECTS } from '../data/projects';

export default function WebCarousel() {
  const {
    scrollRef,
    isDragging,
    isAutoRotating,
    toggleAutoRotate,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    dragHandlers,
  } = useCarouselDrag({ autoRotate: true, infinite: true, speed: 1.9, pauseOnHover: true });

  const infiniteProjects = [...WEB_PROJECTS, ...WEB_PROJECTS];

  return (
    <div className="w-full mt-16 sm:mt-20">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lilac/70 text-xs font-bold uppercase tracking-wider text-brand-black mb-2">
            <span>CATEGORY 02</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-brand-black uppercase tracking-tight">
            WEB + AI
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
            Live running interactive web applications, prototypes and AI platforms. Auto-sliding showcase (hover to pause, click to interact).
          </p>
        </div>

        {/* Carousel Arrow Controls & Auto-rotate Status */}
        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <button
            type="button"
            onClick={toggleAutoRotate}
            aria-label={isAutoRotating ? 'Pause auto-rotation' : 'Start auto-rotation'}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-[11px] font-mono font-bold uppercase text-brand-black hover:bg-gray-100 transition-colors"
          >
            <span className={`w-2 h-2 rounded-full ${isAutoRotating ? 'bg-brand-lime animate-pulse' : 'bg-gray-400'}`} />
            <span>{isAutoRotating ? 'ROTATING' : 'PAUSED'}</span>
          </button>

          <button
            type="button"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Previous websites"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              canScrollLeft
                ? 'border-gray-300 text-brand-black hover:bg-brand-black hover:text-white active:scale-95'
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Next websites"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              canScrollRight
                ? 'bg-brand-lime hover:bg-brand-lime-hover border-brand-lime text-brand-black shadow-sm active:scale-95'
                : 'border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div className="w-full">
        <div
          ref={scrollRef}
          {...dragHandlers}
          className={`w-full flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-4 px-1 cursor-grab select-none ${
            isDragging ? 'cursor-grabbing' : ''
          }`}
          style={{ touchAction: 'pan-y' }}
        >
          {infiniteProjects.map((project, idx) => (
            <BrowserCard key={`${project.id}-${idx}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
