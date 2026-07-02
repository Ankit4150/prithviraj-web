import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiTarget,
  FiCompass,
  FiCheckCircle,
  FiZap,
  FiTool,
  FiShield,
  FiTruck,
  FiMapPin,
  FiFlag,
  FiArrowRight,
  FiPhoneCall,
  FiLinkedin,
} from 'react-icons/fi';

import princeImg from '../assest/team/prince-kumar.png';
import rishitImg from '../assest/team/rishit-sengar.png';
import raghurajImg from '../assest/team/raghuraj-singh.png';
import pControlPanel from '../assest/product image transparent/Control_Panels_and_Distribution_Panel.png.png';
import pSteelPole from '../assest/product image transparent/Steel_Tubular_Poles.png.png';
import pACSR from '../assest/product image transparent/01_ACSR_Conductors.png.png';
import pLA from '../assest/product image transparent/11kV_Polymeric_Type_Lightning_Arrester.png.png';
import Reveal from '../common/Reveal';
import Counter from '../common/Counter';

const team = [
  {
    name: 'Mr. Prince Kumar',
    role: 'Managing Director',
    photo: princeImg,
    bio: '13+ years across electrical & civil EPC projects since 2009, serving clients like L&T Construction, Shapoorji Pallonji, Indian Oil and Jaguar Overseas.',
  },
  {
    name: 'Mr. Rishit Sengar',
    role: 'Director',
    photo: rishitImg,
    bio: 'Electrical engineering graduate (RGPV, 2013) with 6+ years in power distribution — FSP Betul, RGGVY Hoshangabad & Sehore, DDUGJY Betul, HVDS Nandurbar.',
  },
  {
    name: 'Mr. Raghuraj Singh',
    role: 'Advisor',
    photo: raghurajImg,
    bio: 'B.E. Electrical with 25+ years across industry and infra — RGGVY, ADB, RAPDRP and DDUGJY projects as DGM and GM.',
  },
];

const pillars = [
  {
    icon: FiTarget,
    title: 'Our Mission',
    desc: 'Deliver consistent, high-quality, value-added services to the EPC sector through absolute professionalism, timely execution and trustworthy client relationships.',
  },
  {
    icon: FiCompass,
    title: 'Our Vision',
    desc: 'Be recognised as one of the key players in India\u2019s power infrastructure sector — the name clients trust for the highest quality of supplies and services.',
  },
];

const values = [
  'Government approved EPC contractor',
  'Every project tracked from tendering to execution',
  'Manufacturing kept in-house — quality stays in our hands',
  'Honest, ethical trade partner of choice',
];

const services = [
  { icon: FiZap, title: 'EPC — Civil & Electrical', desc: 'Consultancy and execution of civil & electrical allied works for govt. and non-govt. projects.' },
  { icon: FiTool, title: 'Transformer Manufacturing', desc: 'In-house DTR manufacturing from 25 kVA up to 1200 kVA.' },
  { icon: FiShield, title: 'Steel Fabrication', desc: 'Fabricated steel structures built to spec, in-house.' },
  { icon: FiTruck, title: 'Trading & Supply', desc: 'Electrical goods & components across the full 33 kV range.' },
];

const milestones = [
  { year: '2009', title: 'Groundwork begins', desc: 'Our founder starts out on electrical & civil work projects, laying the technical foundation for what would follow.' },
  { year: 'Mar 2018', title: 'Prithviraj Corporation Ltd. founded', desc: 'Established by Mr. Prince Kumar & Mrs. Priti Kumar as parent directors.' },
  { year: 'Aug 2022', title: 'Leadership strengthened', desc: 'Mr. Rishit Sengar joins as Director, bringing 6+ years of power distribution experience.' },
  { year: 'Today', title: '17+ years of combined expertise', desc: 'A government approved EPC contractor serving major clients across multiple states.' },
];

export default function About() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 animate-float rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8 lg:px-8">
          <div>
            <span className="inline-block animate-fadeInUp rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-orange">
              Since 2018
            </span>
            <h1 className="mt-4 animate-fadeInUp text-3xl font-extrabold sm:text-4xl lg:text-5xl" style={{ animationDelay: '80ms' }}>
              About Prithviraj Corporation Limited
            </h1>
            <p className="mt-3 max-w-2xl animate-fadeInUp text-white/70" style={{ animationDelay: '160ms' }}>
              A government approved EPC contractor for civil &amp; electrical works — manufacturing and trading
              electrical goods up to 33&nbsp;kV, built by a team that has been on the ground for 17+ years.
            </p>
            <div className="mt-3 flex animate-fadeInUp items-center gap-2 text-sm text-white/60" style={{ animationDelay: '200ms' }}>
              <FiMapPin size={15} className="text-brand-orange" />
              Registered office: Barauni, Begusarai, Bihar &nbsp;•&nbsp; Corporate office: Gurugram, Haryana
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4 animate-fadeInUp" style={{ animationDelay: '280ms' }}>
              {[
                { value: 17, suffix: '+', label: 'Years in the sector' },
                { value: 33, suffix: ' kV', label: 'Voltage range served' },
                { value: 1200, suffix: ' kVA', label: 'Largest DTR built' },
                { value: 7, suffix: '+', label: 'Major clients served' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold sm:text-3xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <Reveal direction="left" delay={200} className="hidden lg:block">
            <div className="relative h-80 rounded-3xl bg-gradient-to-b from-[#0f3a72] to-[#0a2547] p-6 shadow-2xl shadow-black/30 ring-1 ring-white/10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-brand-orange/10 blur-2xl" />
              <span className="relative inline-block rounded-full bg-brand-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                Made In-House
              </span>
              <div className="relative mt-4 h-56">
                <img src={pSteelPole} alt="" className="absolute bottom-0 left-1 h-[92%] w-auto drop-shadow-[0_14px_20px_rgba(0,0,0,0.4)]" />
                <img src={pControlPanel} alt="" className="absolute bottom-0 right-0 h-[78%] w-auto drop-shadow-[0_14px_20px_rgba(0,0,0,0.4)]" />
                <img src={pLA} alt="" className="absolute bottom-2 left-1/2 h-[52%] w-auto -translate-x-1/2 drop-shadow-[0_14px_20px_rgba(0,0,0,0.4)]" />
                <img src={pACSR} alt="" className="absolute bottom-0 right-24 h-[46%] w-auto drop-shadow-[0_14px_20px_rgba(0,0,0,0.4)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- STORY ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal direction="right">
            <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-orange">
              Our Story
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
              Providing services beyond the ordinary
            </h2>
            <p className="mt-4 text-slate-600">
              We take pride in introducing ourselves as a leading government approved contractor for
              electrical and civil services, consultants and traders. From tendering to execution, we track
              every stage of a project — planning, procurement and implementation — for consistent, reliable
              delivery.
            </p>
            <p className="mt-4 text-slate-600">
              As an EPC company we provide consultancy for civil &amp; electrical allied works for government
              and non-government projects, alongside in-house manufacturing and trading of electrical goods
              for the power distribution field. Our core strength is a highly skilled, adaptive workforce that
              has let us not just grow, but truly evolve.
            </p>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">
              <h3 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-navy">
                <FiFlag className="text-brand-orange" /> Our Journey
              </h3>
              <ol className="relative space-y-6 border-l-2 border-brand-orange/20 pl-6">
                {milestones.map((m, i) => (
                  <li key={m.year} className="relative">
                    <span className="absolute -left-[27px] top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-white bg-brand-orange shadow" />
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-orange">{m.year}</p>
                    <p className="mt-0.5 font-bold text-navy">{m.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{m.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- MISSION / VISION ---------------- */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-orange">
              What Drives Us
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">Mission &amp; Vision</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 120}>
                  <div className="group h-full rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange transition duration-300 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white">
                      <Icon size={26} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-navy">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200} className="mt-6">
            <div className="rounded-3xl bg-navy px-6 py-8 sm:px-10">
              <ul className="grid gap-4 sm:grid-cols-2">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3 text-white/90">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-brand-orange" size={19} />
                    <span className="text-sm sm:text-base">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-orange">
            At A Glance
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">What we do, end to end</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-slate-100 p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand-orange/30 hover:shadow-lg">
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
      </section>

      {/* ---------------- TEAM ---------------- */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-brand-orange/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-orange">
              Leadership
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">The people behind Prithviraj</h2>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 120}>
                <div className="group h-full rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <div className="relative mx-auto h-28 w-28">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-28 w-28 rounded-full border-4 border-brand-orange/15 object-cover object-top transition duration-300 group-hover:border-brand-orange/50"
                    />
                  </div>
                  <span className="mt-4 inline-block rounded-full bg-navy px-3 py-0.5 text-xs font-semibold text-white">
                    {member.role}
                  </span>
                  <h3 className="mt-3 flex items-center justify-center gap-2 font-bold text-navy">
                    {member.name}
                    <FiLinkedin className="text-slate-300 transition group-hover:text-brand-orange" size={16} />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white sm:px-16">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Want to work with us?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Whether it&rsquo;s an EPC project, a bulk supply order, or a custom transformer — let&rsquo;s talk.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-orangedark"
            >
              <FiPhoneCall /> Talk to Us
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              Explore Products <FiArrowRight />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
