import React from 'react';
import { Play, Pause, Sparkles, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { useVideoObserver } from '../hooks/useVideoObserver';

export default function MotionCard({ project, index }) {
  const { videoRef, isPlaying, isMuted, hasError, togglePlay, toggleMute, handleVideoError } =
    useVideoObserver(project.video);

  const hasRealVideo = Boolean(project.video && !hasError);

  return (
    <article
      className="group relative flex-shrink-0 w-[84vw] sm:w-[380px] md:w-[420px] rounded-3xl overflow-hidden bg-brand-charcoal shadow-float flex flex-col justify-between border border-purple-200/40 card-hover-lift select-none"
      data-purpose="motion-card"
    >
      {/* 16:10 or 16:9 Aspect Video / Placeholder Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
        {hasRealVideo ? (
          <>
            <video
              ref={videoRef}
              src={project.video}
              poster={project.poster}
              playsInline
              muted={isMuted}
              loop
              preload="metadata"
              onError={handleVideoError}
              className="w-full h-full object-cover pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
          </>
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              project.accentGradient || 'from-zinc-900 via-neutral-900 to-black'
            } flex flex-col items-center justify-center p-6 text-center`}
          >
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D8F944_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-lime">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-brand-lime uppercase">
                MOTION PREVIEW
              </span>
              <p className="text-xs font-display font-extrabold text-white tracking-wider uppercase">
                DROP MOTION PROJECT HERE
              </p>
              <span className="text-[9px] font-mono text-white/50">
                KINETIC TYPOGRAPHY / VFX / EXPLAINER
              </span>
            </div>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
          <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10">
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {hasRealVideo && (
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-black transition-all"
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-brand-lime" />
                )}
              </button>
            )}
            <span className="text-xs font-mono font-bold text-brand-lime bg-black/40 px-2 py-0.5 rounded-md">
              #{String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause motion preview' : 'Play motion preview'}
          className="absolute self-center w-12 h-12 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-brand-lime group-hover:text-brand-black transition-all duration-300 z-10 focus:outline-none"
        >
          {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
        </button>
      </div>

      {/* Motion Card Info Details */}
      <div className="p-5 sm:p-6 bg-white flex flex-col justify-between flex-grow">
        <div>
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] sm:text-[10px] font-mono font-bold bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h4 className="font-display font-black text-base sm:text-lg text-brand-black uppercase tracking-tight mb-1">
            {project.title}
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            {project.description}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[10px] font-mono text-purple-700 font-bold uppercase tracking-wider">
            {project.subtitle}
          </span>
          <div className="w-7 h-7 rounded-full bg-brand-lime flex items-center justify-center text-brand-black font-bold text-xs arrow-rotate group-hover:bg-brand-black group-hover:text-white transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </article>
  );
}
