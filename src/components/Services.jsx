import React from 'react';
import { Film, Sparkles, Code2, Camera, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/projects';

const ICON_MAP = {
  film: Film,
  sparkles: Sparkles,
  code: Code2,
  camera: Camera,
};

export default function Services() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full" id="services" data-purpose="services-section">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
        <div>
          <span className="text-[11px] sm:text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">
            SERVICES
          </span>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-brand-black uppercase tracking-tight mt-1">
            WHAT I DO
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 max-w-sm mt-3 md:mt-0 font-medium">
          Available for selected client retainers, high-impact launches, and creative collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => {
          const IconComponent = ICON_MAP[service.iconKey] || Film;
          return (
            <div
              key={service.title}
              className="group p-6 sm:p-7 rounded-3xl bg-gray-50/70 border border-gray-200/70 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-black/[0.04] border border-black/[0.06] flex items-center justify-center text-brand-black mb-6 group-hover:bg-brand-lime group-hover:border-brand-lime group-hover:scale-105 transition-all duration-300">
                  <IconComponent className="w-5 h-5 stroke-[1.6]" />
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-brand-black uppercase mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono font-bold text-gray-400 group-hover:text-brand-black transition-colors">
                <span>INQUIRE SERVICE</span>
                <ArrowUpRight className="w-3.5 h-3.5 arrow-rotate" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
