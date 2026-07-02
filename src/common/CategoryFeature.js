import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function CategoryFeature({ category, alt = false }) {
  const { title, titleAccent, description, items, features, tag } = category;
  const bgClass = alt ? 'bg-slate-50' : 'bg-white';
  const displayItems = items.slice(0, 4);

  return (
    <section className={bgClass}>
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-8">
          {/* ---------------- LEFT: COPY ---------------- */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-1 rounded-full bg-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-wide text-slate-500">{tag}</span>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
              <span className="text-brand-orange">{title.split(' ')[0]} </span>
              <span className="text-navy">{title.split(' ').slice(1).join(' ')}</span>
              {titleAccent && <span className="block text-lg font-bold normal-case text-slate-500">{titleAccent}</span>}
            </h2>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-[2px] w-10 bg-brand-orange" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{description}</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-navy-900"
            >
              Explore Products <FiArrowRight />
            </Link>
          </div>

          {/* ---------------- RIGHT: PRODUCT CIRCLES ---------------- */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {displayItems.map((item, i) => (
              <div key={item.name + i} className="flex flex-col items-center text-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-brand-orange/50 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange hover:shadow-md sm:h-32 sm:w-32">
                  <img src={item.img} alt={item.name} className="h-full w-full object-contain" loading="lazy" />
                </div>
                <p className="mt-3 text-xs font-bold leading-snug text-navy sm:text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- WAVE DIVIDER ---------------- */}
      <div className="relative">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="block h-8 w-full text-navy sm:h-12"
        >
          <path d="M0,30 C320,60 1120,0 1440,35 L1440,60 L0,60 Z" fill="currentColor" />
          <path
            d="M0,30 C320,60 1120,0 1440,35"
            fill="none"
            stroke="#F97316"
            strokeWidth="3"
            className="text-brand-orange"
          />
        </svg>
      </div>

      {/* ---------------- FEATURE STRIP ---------------- */}
      <div className="bg-navy py-9">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-7 px-4 sm:grid-cols-4 sm:divide-x sm:divide-white/10 sm:px-6 lg:px-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className={`flex items-start gap-3 ${i > 0 ? 'sm:pl-6' : ''}`}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-brand-orange/60 text-brand-orange">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{f.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/60">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
