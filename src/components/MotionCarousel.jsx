import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarouselDrag } from '../hooks/useCarouselDrag';
import MotionCard from './MotionCard';
import { MOTION_PROJECTS } from '../data/projects';

export default function MotionCarousel() {
  const {
    scrollRef,
    isDragging,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    dragHandlers,
  } = useCarouselDrag({ autoRotate: false, infinite: false });

  return (
    <div className="w-full mt-16 sm:mt-20">
      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lilac/70 text-xs font-bold uppercase tracking-wider text-brand-black mb-2">
            <span>CATEGORY 03</span>
          </div>
          <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-brand-black uppercase tracking-tight">
            MOTION / DESIGN
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-xl">
            Animated visuals, kinetic typography, explainers, visual effects and motion design combined with video editing.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <button
            type="button"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Previous motion projects"
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
            aria-label="Next motion projects"
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
          {MOTION_PROJECTS.map((project, idx) => (
            <MotionCard
              key={`${project.id}-${idx}`}
              project={project}
              index={idx % MOTION_PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
