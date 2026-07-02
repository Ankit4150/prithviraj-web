import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowRight,
  FiZap,
  FiTool,
  FiTruck,
  FiShield,
  FiCheckCircle,
  FiPhoneCall,
} from 'react-icons/fi';

import pACSR from '../assest/product image transparent/01_ACSR_Conductors.png.png';
import pControlPanel from '../assest/product image transparent/Control_Panels_and_Distribution_Panel.png.png';
import pSteelPole from '../assest/product image transparent/Steel_Tubular_Poles.png.png';
import pLA from '../assest/product image transparent/11kV_Polymeric_Type_Lightning_Arrester.png.png';

import Reveal from '../common/Reveal';
import Counter from '../common/Counter';
import HeroSlider from '../common/HeroSlider';
import CategoryShowcase from '../common/CategoryShowcase';

const services = [
  {
    icon: FiZap,
    title: 'EPC — Civil & Electrical',
    desc: 'Engineering, procurement and construction for government and private power infrastructure projects.',
  },
  {
    icon: FiTool,
    title: 'Transformer Manufacturing',
    desc: 'In-house manufacturing of distribution transformers from 25 kVA to 1200 kVA.',
  },
  {
    icon: FiShield,
    title: 'Steel Fabrication',
    desc: 'Fabricated steel structures built to spec for towers, poles and substation supports.',
  },
  {
    icon: FiTruck,
    title: 'Trading & Supply',
    desc: 'Distribution of electrical goods and components across the full 33 kV voltage range.',
  },
];

const whyUs = [
  'Government approved EPC contractor',
  '17+ years of hands-on sector experience',
  'Projects delivered across multiple states',
  'In-house manufacturing keeps quality in our hands',
];

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* ---------------- HERO SLIDER ---------------- */}
      <HeroSlider />

      {/* ---------------- TRUSTED BY MARQUEE ---------------- */}
      {/* <section className="border-y border-slate-100 bg-slate-50 py-6">
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
          Trusted by teams that have worked with
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track gap-10 pl-10">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={name + i}
                className="whitespace-nowrap text-base font-semibold text-slate-400 transition hover:text-navy"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* ---------------- STATS ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {[
            { value: 17, suffix: '+', label: 'Years in the sector' },
            { value: 33, suffix: ' kV', label: 'Voltage range served' },
            { value: 1200, suffix: ' kVA', label: 'Largest DTR built in-house' },
            { value: 7, suffix: '+', label: 'Major clients served' },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <p className="text-3xl font-extrabold text-navy sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-orange">
              What We Do
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
              End-to-end electrical &amp; civil EPC
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 100}>
                  <div className="group h-full rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition duration-300 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-orange">
              Why Prithviraj
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
              Built on quality, backed by experience
            </h2>
            <p className="mt-3 text-slate-600">
              From tendering to execution, we track every stage of a project — planning,
              procurement and implementation — so our clients get consistent, reliable delivery.
            </p>
            <ul className="mt-6 space-y-3">
              {whyUs.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-700">
                  <FiCheckCircle className="mt-0.5 shrink-0 text-brand-orange" size={20} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-orangedark"
            >
              More about us <FiArrowRight />
            </Link>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div className="relative rounded-3xl bg-navy/5 p-8">
              <div className="grid grid-cols-2 gap-4">
                {[pControlPanel, pSteelPole, pACSR, pLA].map((img, i) => (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-2xl bg-white shadow-sm ${i % 2 === 1 ? 'mt-6' : ''}`}
                  >
                    <img src={img} alt="" className="h-32 w-full object-contain p-4" />
                  </div>
                ))}
              </div>
              <div className="absolute -right-4 -top-4 animate-float rounded-2xl bg-white px-4 py-2 text-xs font-bold text-navy shadow-lg">
                Since 2018
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- PRODUCT CATEGORY SHOWCASE ---------------- */}
      <CategoryShowcase />

      <div className="mx-auto -mt-4 max-w-7xl px-4 pb-4 text-center sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand-orange"
        >
          View full catalogue <FiArrowRight />
        </Link>
      </div>

      {/* ---------------- CTA ---------------- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white sm:px-16">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Need electrical or civil EPC services?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Tell us about your project and our team will get back to you with a plan and a quote.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-orangedark"
            >
              <FiPhoneCall /> Talk to Us
            </Link>
            <a
              href="tel:+916201300588"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              +91 6201300588
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
