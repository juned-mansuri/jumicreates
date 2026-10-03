import React from 'react';
import { Play, Pause, ArrowUpRight, Film, Volume2, VolumeX } from 'lucide-react';
import { useVideoObserver } from '../hooks/useVideoObserver';

export default function ReelCard({ project, index }) {
  const { videoRef, isPlaying, isMuted, hasError, togglePlay, toggleMute, handleVideoError } =
    useVideoObserver(project.video);

  const hasRealVideo = Boolean(project.video && !hasError);

  return (
    <article
      className="group relative flex-shrink-0 w-[82vw] sm:w-[320px] md:w-[300px] lg:w-[285px] xl:w-[300px] aspect-[9/16] rounded-3xl overflow-hidden bg-brand-charcoal shadow-float flex flex-col justify-between p-4 sm:p-5 border border-purple-200/40 card-hover-lift select-none"
      data-purpose="work-reel-card"
    >
      {/* Background: Real Video OR Aesthetic Editorial Placeholder */}
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
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-0 pointer-events-none" />
        </>
      ) : (
        /* Aesthetic Editorial Placeholder (Rule 6: Elegant Placeholder state, NO random stock media) */
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            project.accentGradient || 'from-indigo-950 via-purple-950 to-black'
          } z-0 flex flex-col items-center justify-center p-6 text-center overflow-hidden`}
        >
          {/* Subtle decorative grid and glow */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#D8F944_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute w-40 h-40 rounded-full bg-purple-500/15 blur-2xl pointer-events-none" />

          {/* Placeholder Center Content */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-brand-lime">
              <Film className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-brand-lime font-bold uppercase block">
                VIDEO PREVIEW
              </span>
              <p className="text-xs font-display font-extrabold text-white tracking-wider uppercase">
                DROP REEL HERE
              </p>
              <span className="text-[9px] font-mono text-white/50 block">
                9:16 VERTICAL CUT
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Top Tag Pill and Index */}
      <div className="relative z-10 flex justify-between items-center">
        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10">
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
          <span className="text-xs font-mono font-bold text-brand-lime bg-black/40 px-2 py-0.5 rounded-full border border-white/10">
            #{String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Center Interactive Play / Pause Button */}
      <div className="relative z-10 self-center">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/25 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-brand-lime group-hover:text-brand-black transition-all duration-300 focus:outline-none"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          ) : (
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5 sm:ml-1" />
          )}
        </button>
      </div>

      {/* Bottom Floating Title Capsule */}
      <div className="relative z-10 w-full bg-white rounded-2xl p-2.5 pl-3.5 sm:pl-4 flex items-center justify-between shadow-md">
        <div className="overflow-hidden pr-2">
          <h4 className="font-display font-extrabold text-xs sm:text-sm text-brand-black uppercase tracking-tight truncate">
            {project.title}
          </h4>
          <p className="text-[9px] sm:text-[10px] font-medium text-gray-500 uppercase tracking-wider truncate">
            {project.subtitle}
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-brand-lime flex-shrink-0 flex items-center justify-center text-brand-black font-bold text-xs arrow-rotate group-hover:bg-brand-black group-hover:text-white transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </article>
  );
}
