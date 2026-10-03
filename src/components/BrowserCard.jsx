import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LiveBrowserPreview } from './LiveBrowserPreview';

export default function BrowserCard({ project }) {
  return (
    <article
      className="group flex-shrink-0 w-[88vw] sm:w-[540px] md:w-[600px] lg:w-[640px] bg-brand-surface rounded-3xl border border-purple-100 overflow-hidden shadow-sm hover:shadow-float transition-all duration-300 flex flex-col justify-between select-none"
      data-purpose="browser-mockup-card"
    >
      <div>
        {/* Browser Header Bar */}
        <div className="bg-gray-100/90 px-4 py-3 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
          </div>

          {/* Clickable Browser Address Bar */}
          <a
            href={project.liveUrl || `https://${project.browserUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Open live site in new tab"
            className="mx-auto w-3/5 bg-white hover:bg-gray-50 py-1 px-3 rounded-md text-[10px] font-mono text-gray-500 text-center truncate border border-gray-200/60 shadow-2xs transition-colors flex items-center justify-center gap-1.5"
          >
            <span className="text-gray-400">https://</span>
            <span className="text-brand-black font-semibold">{project.browserUrl || 'project.jumicreates.io'}</span>
          </a>

          <div className="w-9" />
        </div>

        {/* 16:9 Browser Screen (Real Live Running Web Viewport) */}
        <div className="relative aspect-[16/9] w-full bg-brand-black overflow-hidden flex items-center justify-center">
          {project.liveUrl ? (
            <LiveBrowserPreview
              url={project.liveUrl}
              title={project.title}
              fallbackImage={project.previewImage}
            />
          ) : null}
        </div>

        {/* Project Details */}
        <div className="p-5 sm:p-7 bg-white">
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                  tag === 'VIBE CODED' || tag === 'AI' || tag === 'LEADERBOARD'
                    ? 'bg-brand-lime text-brand-black'
                    : 'bg-purple-100 text-purple-900'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <h4 className="font-display font-black text-lg sm:text-xl text-brand-black mb-2 uppercase tracking-tight">
            {project.title}
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer Info & View Project Link */}
      <div className="px-5 sm:px-7 pb-5 pt-3 bg-white border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-600 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{project.uptime || 'Active Production'}</span>
        </div>

        {/* If liveUrl is available, render button */}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-lime hover:bg-brand-lime-hover text-brand-black text-xs font-extrabold uppercase tracking-wider transition-all shadow-xs"
          >
            <span>VISIT SITE</span>
            <ArrowUpRight className="w-3.5 h-3.5 arrow-rotate" />
          </a>
        ) : (
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            Case Study Available
          </span>
        )}
      </div>
    </article>
  );
}
