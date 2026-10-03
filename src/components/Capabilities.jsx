import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CAPABILITIES } from '../data/projects';

export default function Capabilities() {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50/40 border-t border-gray-100"
      id="capabilities"
      data-purpose="capabilities-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-black bg-brand-lime px-3.5 py-1 rounded-full inline-block">
            TECHNICAL EXECUTION
          </span>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-brand-black tracking-tight uppercase mt-3">
            WHAT I CAN BUILD
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Modern full-stack technical competencies turned into fast, scalable production.
          </p>
        </div>

        {/* 4 Distinct Editorial Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CAPABILITIES.map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-gray-300 group-hover:text-brand-black transition-colors">
                    {card.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center font-mono font-bold text-sm arrow-rotate group-hover:bg-brand-black group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-extrabold text-xl sm:text-2xl text-brand-black mb-3 uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-[11px] font-mono font-medium bg-gray-100 px-2.5 py-1 rounded-md text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
