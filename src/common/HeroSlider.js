import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from 'react-icons/fi';
import { FiShield, FiZap, FiTool, FiCheckCircle } from 'react-icons/fi';
import PromoSlide from './PromoSlide';
import ImageSlide from './ImageSlide';

import firstPage from '../assest/first-page.png';
import pSteelPole from '../assest/product image transparent/Steel_Tubular_Poles.png.png';

import pPolymerHornGap from '../assest/product image transparent/Polymer_Horn_Gap_Type_Fuse_Set.png.png';
import pPorcelainHornGap from '../assest/product image transparent/Porcelain_Horn_Gap_Type_Fuse_Set.png (2).png';
import pPorcelainDropOut from '../assest/product image transparent/Porcelain_Drop_Out_Type_Fuse_Set.png.png';

import pPolymerPin from '../assest/product image transparent/11kV_Polymer_Pin_Insulator_5kN_Strength.png.png';
import pPolymericDisc from '../assest/product image transparent/11kV_Polymeric_Disc_Insulator.png.png';
import pPorcelainPin from '../assest/product image transparent/11kV_Porcelain_Type_Pin_Insulator_with_GI_Pin.png.png';
import pPorcelainDisc from '../assest/product image transparent/33kV_Porcelain_Type_Disc_Insulator.png.png';

import pConcretePole from '../assest/product image transparent/Concrete Poles.png';
import pRailPole from '../assest/product image transparent/Rail Poles.png';

const AUTOPLAY_MS =  2000;

const trustFeatures = [
  { icon: FiCheckCircle, title: 'Govt. Approved', desc: 'Certified EPC contractor for the power sector.' },
  { icon: FiZap, title: '17+ Years Experience', desc: 'Hands-on delivery since 2018.' },
  { icon: FiTool, title: 'In-House Manufacturing', desc: 'Quality kept in our own hands.' },
  { icon: FiShield, title: 'Pan-India Delivery', desc: 'Projects executed across states.' },
];

const slides = [
  {
    key: 'overview',
    type: 'image',
    image: firstPage,
    imageAlt: 'Prithviraj Corporation Limited — Providing Services Beyond The Ordinary',
    kicker: 'Government Approved EPC Contractor',
    heading: 'Providing Services Beyond The Ordinary',
    body: 'End-to-end civil & electrical EPC, in-house transformer manufacturing, and trading of electrical goods across the full 33 kV range — delivered by a team on the ground for 17+ years.',
    primaryCta: { label: 'Get a Quote', to: '/contact' },
    secondaryCta: { label: 'Explore Products', to: '/products' },
  },
  {
    key: 'horn-gap-fuses',
    kicker: 'Reliable Protection. Maximum Safety.',
    titleLine1: 'Horn Gap &',
    titleLine2: 'Drop Out Fuses',
    desc: 'High quality horn gap and drop out fuses designed for superior performance and protection in power distribution systems.',
    products: [
      { name: 'Porcelain Horn Gap Type Fuse Set', img: pPorcelainHornGap },
      { name: 'Polymer Horn Gap Type Fuse Set', img: pPolymerHornGap },
      { name: 'Porcelain Drop Out Type Fuse Set', img: pPorcelainDropOut },
    ],
    features: trustFeatures,
  },
  {
    key: 'insulators',
    kicker: 'Built To Last. Engineered For Power.',
    titleLine1: 'Pin &',
    titleLine2: 'Disc Insulators',
    desc: 'Polymer and porcelain insulators rated for 11kV and 33kV lines, built to keep every connection safe and stable.',
    products: [
      { name: '11kV Polymer Pin Insulator', img: pPolymerPin },
      { name: '11kV Polymeric Disc Insulator', img: pPolymericDisc },
      { name: '11kV Porcelain Pin Insulator', img: pPorcelainPin },
      { name: '33kV Porcelain Disc Insulator', img: pPorcelainDisc },
    ],
    features: trustFeatures,
  },
  {
    key: 'poles',
    kicker: 'Foundations Of Every Line',
    titleLine1: 'Poles &',
    titleLine2: 'Steel Structures',
    desc: 'Concrete, rail and steel tubular poles fabricated to spec for towers, distribution lines and substation supports.',
    products: [
      { name: 'Steel Tubular Poles', img: pSteelPole },
      { name: 'Concrete Poles', img: pConcretePole },
      { name: 'Rail Poles', img: pRailPole },
    ],
    features: trustFeatures,
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef(null);

  const goTo = useCallback((i) => {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!playing) return undefined;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timerRef.current);
  }, [playing]);

  return (
    <section className="relative w-full bg-white" onMouseEnter={() => setPlaying(false)} onMouseLeave={() => setPlaying(true)}>
      {/* Slide viewport — fixed height, slides crossfade inside, controls never enter this box */}
      <div className="relative h-[640px] w-full overflow-hidden sm:h-[600px] lg:h-[560px]">
        {slides.map((s, i) => (
          <div
            key={s.key}
            className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              i === index ? 'z-10 opacity-100' : 'z-0 opacity-0'
            }`}
            aria-hidden={i !== index}
          >
            {s.type === 'image' ? (
              <ImageSlide {...s} active={i === index} />
            ) : (
              <PromoSlide {...s} active={i === index} />
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-[42%] z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-navy/10 p-2 text-navy backdrop-blur transition hover:bg-navy/20 sm:flex"
        >
          <FiChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-[42%] z-20 hidden -translate-y-1/2 items-center justify-center rounded-full bg-navy/10 p-2 text-navy backdrop-blur transition hover:bg-navy/20 sm:flex"
        >
          <FiChevronRight size={18} />
        </button>
      </div>

      {/* Controls bar — lives OUTSIDE the slide viewport, so it can never overlap slide content */}
      <div className="flex items-center justify-center gap-3 py-3" style={{ backgroundColor: '#120A3B' }}>
        {slides.map((s, i) => (
          <button
            key={s.key}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative h-1.5 w-7 overflow-hidden rounded-full bg-white/20"
          >
            {i === index && (
              <span
                key={`${s.key}-${playing}`}
                className="absolute inset-y-0 left-0 block rounded-full bg-brand-orange"
                style={{
                  width: '100%',
                  animation: playing ? `slideProgress ${AUTOPLAY_MS}ms linear forwards` : 'none',
                  transform: playing ? undefined : 'translateX(0%)',
                }}
              />
            )}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          className="ml-1 text-white/70 transition hover:text-white"
        >
          {playing ? <FiPause size={13} /> : <FiPlay size={13} />}
        </button>
      </div>

      <style>{`
        @keyframes slideProgress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
}
