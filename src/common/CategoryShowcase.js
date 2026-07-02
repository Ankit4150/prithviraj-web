import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

import pControlPanel from '../assest/product image transparent/Control_Panels_and_Distribution_Panel.png.png';
import p11kVABPolymeric from '../assest/product image transparent/11kV_Air_Break_Switch_Polymeric_Type.png (2).png';
import pACSR from '../assest/product image transparent/01_ACSR_Conductors.png.png';
import pXLPE from '../assest/product image transparent/XLPE_Insulated_Armoured_Cable.png.png';
import p11kVPolymerPin from '../assest/product image transparent/11kV_Polymer_Pin_Insulator_5kN_Strength.png.png';
import p11kVPolymericLA from '../assest/product image transparent/11kV_Polymeric_Type_Lightning_Arrester.png.png';
import pSteelPole from '../assest/product image transparent/Steel_Tubular_Poles.png.png';
import pConcretePole from '../assest/product image transparent/Concrete Poles.png';

const tabs = [
  'Switchgear & Control',
  'Conductors & Cables',
  'Insulators & Protection',
  'Poles & Structures',
];

const cards = [
  {
    key: 'switchgear',
    title: 'Switchgear & Control Panels',
    desc: 'Distribution panels and air break switches built for reliable power control.',
    images: [
      { src: pControlPanel, className: 'right-2 bottom-0 h-[78%] w-auto' },
      { src: p11kVABPolymeric, className: 'left-0 bottom-0 h-[58%] w-auto' },
    ],
  },
  {
    key: 'conductors',
    title: 'Conductors & Cables',
    desc: 'ACSR conductors and XLPE armoured cables for transmission & distribution.',
    images: [
      { src: pXLPE, className: 'right-1 bottom-0 h-[70%] w-auto' },
      { src: pACSR, className: 'left-2 bottom-0 h-[64%] w-auto' },
    ],
  },
  {
    key: 'insulators',
    title: 'Insulators & Protection',
    desc: 'Pin insulators and lightning arresters that keep the line, and your equipment, safe.',
    images: [
      { src: p11kVPolymericLA, className: 'right-3 bottom-0 h-[76%] w-auto' },
      { src: p11kVPolymerPin, className: 'left-2 bottom-0 h-[56%] w-auto' },
    ],
  },
  {
    key: 'poles',
    title: 'Poles & Steel Structures',
    desc: 'Concrete and steel tubular poles fabricated to spec for towers and supports.',
    images: [
      { src: pSteelPole, className: 'right-2 bottom-0 h-[80%] w-auto' },
      { src: pConcretePole, className: 'left-0 bottom-0 h-[70%] w-auto' },
    ],
  },
];

export default function CategoryShowcase() {
  const cardRefs = useRef({});

  const scrollToCard = (idx) => {
    const key = cards[idx]?.key;
    const node = cardRefs.current[key];
    if (node) {
      const y = node.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-orange">
            Solutions By Category
          </span>
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">Built for every stage of the line</h2>

          <nav className="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-semibold text-navy/70">
            {tabs.map((tab, i) => (
              <React.Fragment key={tab}>
                {i > 0 && <span className="text-brand-orange/50">|</span>}
                <button
                  onClick={() => scrollToCard(i)}
                  className="relative py-0.5 transition hover:text-brand-orange"
                >
                  {tab}
                </button>
              </React.Fragment>
            ))}
          </nav>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.key}
              ref={(node) => {
                cardRefs.current[card.key] = node;
              }}
              className="group relative flex h-80 scroll-mt-32 flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-navy-600 to-navy-900 p-6 shadow-lg shadow-navy-900/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl transition group-hover:bg-brand-orange/10" />

              <Link to="/products" className="relative z-10 inline-flex items-start justify-between gap-2">
                <h3 className="text-lg font-extrabold leading-snug text-white">{card.title}</h3>
                <FiArrowUpRight
                  className="mt-1 shrink-0 text-white/60 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-orange"
                  size={20}
                />
              </Link>
              <p className="relative z-10 mt-2 text-xs leading-relaxed text-white/60">{card.desc}</p>

              <div className="relative mt-auto h-40 flex-1">
                {card.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt=""
                    className={`absolute drop-shadow-[0_12px_18px_rgba(0,0,0,0.35)] transition duration-500 group-hover:scale-105 ${img.className}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
