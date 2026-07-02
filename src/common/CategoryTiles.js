import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const TONES = [
  'bg-slate-100 text-navy',
  'bg-navy text-white',
  'bg-navy-600 text-white',
  'bg-navy text-white',
  'bg-navy-600 text-white',
  'bg-navy-900 text-white',
];

export default function CategoryTiles({ categories = [], onSelect }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat, i) => (
        <button
          key={cat.title}
          type="button"
          onClick={() => onSelect?.(cat.title)}
          className={`
            group relative flex h-56 flex-col justify-between overflow-hidden rounded-2xl
            p-6 text-left shadow-sm transition-all duration-500 ease-out
            hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10
            ${TONES[i % TONES.length]}
            hover:!bg-white hover:!text-navy
          `}
        >
          <div className="relative z-10">
            {cat.tag && (
              <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider opacity-70 transition-colors duration-500 group-hover:text-brand-orange group-hover:opacity-100">
                {cat.tag}
              </span>
            )}
            <h3 className="text-xl font-bold leading-snug transition-colors duration-500">{cat.title}</h3>
          </div>

          <span className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white opacity-0 transition-all duration-500 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white">
            <FiArrowUpRight size={15} />
          </span>

          {cat.image && (
            <img
              src={cat.image}
              alt={cat.title}
              className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 object-contain opacity-90 drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
            />
          )}

          <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-white/5 blur-2xl transition-opacity duration-500 group-hover:opacity-0" />
        </button>
      ))}
    </div>
  );
}