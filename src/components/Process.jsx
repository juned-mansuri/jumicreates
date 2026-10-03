import React from 'react';
import { PROCESS_STEPS } from '../data/projects';

export default function Process() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 bg-white" data-purpose="process-section">
      <div className="max-w-7xl mx-auto rounded-3xl sm:rounded-4xl bg-brand-charcoal text-white p-7 sm:p-12 md:p-16 relative overflow-hidden">
        {/* Decorative ambient gradients */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-brand-lime/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-mono font-bold text-brand-lime uppercase tracking-widest">
            HOW IT HAPPENS
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mt-2">
            FROM IDEA → OUTPUT
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="space-y-3">
              <span className="text-xs font-mono font-bold text-brand-lime border border-brand-lime/40 px-3 py-1 rounded-full inline-block">
                {step.number} — {step.title}
              </span>
              <h3 className="font-display font-bold text-lg sm:text-xl uppercase text-white">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
