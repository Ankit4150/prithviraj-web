import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

/**
 * PromoSlide — one full-width "category spotlight" panel:
 * light top half (kicker, two-tone heading, copy, CTA, product circles)
 * flowing into a wave divider and a dark navy feature strip.
 *
 * This is real, responsive markup (not a flattened banner image), so it
 * never overlaps slider controls and reflows cleanly at every breakpoint.
 */
export default function PromoSlide({ kicker, titleLine1, titleLine2, desc, products, features, active }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      {/* Faint decorative texture */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-40 w-40 opacity-[0.35] sm:h-56 sm:w-56"
        style={{
          backgroundImage:
            "radial-gradient(circle, #120A3B33 1.5px, transparent 1.5px)",
          backgroundSize: '18px 18px',
        }}
      />
      <svg className="pointer-events-none absolute right-0 top-0 h-48 w-48 text-navy/5 sm:h-72 sm:w-72" viewBox="0 0 200 200" fill="none">
        {[40, 70, 100, 130].map((r) => (
          <circle key={r} cx="200" cy="0" r={r} stroke="currentColor" strokeWidth="1.5" />
        ))}
      </svg>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pb-24 pt-8 sm:px-6 sm:pb-28 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          {/* Copy */}
          <div>
            <div
              className={`flex items-center gap-2 transition-all duration-700 ${
                active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
            >
              <span className="h-4 w-1 rounded-full bg-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-widest text-navy/70 sm:text-sm">
                {kicker}
              </span>
            </div>

            <h1
              className={`mt-3 text-3xl font-extrabold uppercase leading-[1.05] transition-all delay-100 duration-700 sm:text-4xl lg:text-5xl ${
                active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
            >
              <span className="block text-navy">{titleLine1}</span>
              <span className="block text-brand-orange">{titleLine2}</span>
            </h1>

            <div
              className={`mt-4 flex items-center gap-2 transition-all delay-150 duration-700 ${
                active ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="h-px w-10 bg-brand-orange" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            </div>

            <p
              className={`mt-4 max-w-md text-sm leading-relaxed text-slate-600 transition-all delay-200 duration-700 sm:text-base ${
                active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
            >
              {desc}
            </p>

            <Link
              to="/products"
              className={`mt-6 inline-flex items-center gap-1.5 rounded-full bg-navy px-6 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-navy/20 transition-all delay-300 duration-700 hover:-translate-y-0.5 hover:bg-navy-900 sm:text-sm ${
                active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
            >
              Explore Products <FiChevronRight />
            </Link>
          </div>

          {/* Product circles */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all delay-200 duration-700 sm:flex sm:flex-wrap sm:justify-end sm:gap-5 ${
              active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {products.map((p) => (
              <div key={p.name} className="w-full text-center sm:w-24">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-brand-orange/50 bg-white shadow-sm sm:h-24 sm:w-24">
                  <img src={p.img} alt={p.name} className="h-[70%] w-[70%] object-contain" loading="lazy" />
                </div>
                <p className="mt-2 text-[11px] font-bold leading-tight text-navy sm:text-xs">{p.name}</p>
                <span className="mx-auto mt-1 block h-px w-8 bg-brand-orange/40" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider + feature strip */}
      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 60" className="block h-8 w-full sm:h-10" preserveAspectRatio="none">
          <path d="M0 30 C 240 0, 480 60, 720 30 S 1200 0, 1440 30 V60 H0 Z" fill="#120A3B" />
          <path d="M0 26 C 240 -4, 480 56, 720 26 S 1200 -4, 1440 26" fill="none" stroke="#F97316" strokeWidth="3" />
        </svg>
        <div className="bg-navy px-4 py-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#120A3B' }}>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 text-brand-orange sm:h-9 sm:w-9">
                  <f.icon size={15} />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-white sm:text-xs">{f.title}</p>
                  <p className="mt-0.5 hidden text-[11px] leading-snug text-white/55 sm:block">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
