import React from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useCarouselDrag } from '../hooks/useCarouselDrag';
import ReelCard from './ReelCard';
import { REELS_PROJECTS } from '../data/projects';

export default function ReelsCarousel() {
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

  // Duplicate list to achieve continuous, infinite wrap without any stutter
  const infiniteProjects = [...REELS_PROJECTS, ...REELS_PROJECTS];

  return (
    <div className="w-full">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lilac/70 text-xs font-bold uppercase tracking-wider text-brand-black mb-2">
            <span>CATEGORY 01</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-brand-black uppercase tracking-tight">
            VIDEO &amp; REELS
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
            Short-form content, YouTube videos, promotional edits and social-first storytelling. Auto-rotating showcase (hover or tap pause).
          </p>
        </div>

        {/* Carousel Status & Arrow Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5 self-end sm:self-auto">
          {/* Mobile Pause / Play Button */}
          <button
            type="button"
            onClick={toggleAutoRotate}
            aria-label={isAutoRotating ? 'Pause sliding' : 'Resume sliding'}
            className={`sm:hidden inline-flex items-center gap-1.5 px-3 h-10 rounded-full border text-xs font-mono font-bold uppercase transition-all active:scale-95 ${
              isAutoRotating
                ? 'border-gray-300 bg-white text-brand-black hover:bg-gray-50 shadow-xs'
                : 'bg-brand-lime border-brand-lime text-brand-black shadow-sm'
            }`}
          >
            {isAutoRotating ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>PAUSE</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                <span>PLAY</span>
              </>
            )}
          </button>

          {/* Desktop Status & Pause Toggle */}
          <button
            type="button"
            onClick={toggleAutoRotate}
            aria-label={isAutoRotating ? 'Pause auto-rotation' : 'Start auto-rotation'}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-gray-200 bg-gray-50 text-[11px] font-mono font-bold uppercase text-brand-black hover:bg-gray-100 transition-colors cursor-pointer"
          >
            {isAutoRotating ? (
              <Pause className="w-3 h-3 fill-current text-brand-black" />
            ) : (
              <Play className="w-3 h-3 fill-current text-brand-black ml-0.5" />
            )}
            <span className={`w-2 h-2 rounded-full ${isAutoRotating ? 'bg-brand-lime animate-pulse' : 'bg-gray-400'}`} />
            <span>{isAutoRotating ? 'ROTATING' : 'PAUSED'}</span>
          </button>

          <button
            type="button"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Previous reels"
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
            aria-label="Next reels"
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
          className={`w-full flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 px-1 cursor-grab select-none ${
            isDragging ? 'cursor-grabbing' : ''
          }`}
          style={{ touchAction: 'pan-y' }}
        >
          {infiniteProjects.map((project, idx) => (
            <ReelCard
              key={`${project.id}-${idx}`}
              project={project}
              index={idx % REELS_PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
