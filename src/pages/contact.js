import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import Reveal from '../common/Reveal';

export default function Contact() {
  return (
    <div className="overflow-x-hidden bg-white">
      <section className="relative overflow-hidden bg-navy py-14 text-white">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 animate-float rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="animate-fadeInUp text-3xl font-extrabold sm:text-4xl">Contact Us</h1>
          <p className="mt-2 max-w-2xl animate-fadeInUp text-white/70" style={{ animationDelay: '120ms' }}>
            For further queries &amp; details, feel free to reach out.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">

          <Reveal delay={0}>
            <div className="group h-full rounded-2xl border border-slate-100 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition duration-300 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-navy">Register Office</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Unit No 930B, 9th floor, Tower B, Spaze I Tech Park, Sector-49,
                    Sohna Road, Gurugram (HR) - 122018
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="group h-full rounded-2xl border border-slate-100 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition duration-300 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-navy">Plant Office</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    C/O Prince Kumar, At P.O. Keshawe, P.S. - Barauni, Begusarai,
                    Bihar, India - 851134
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="group h-full rounded-2xl border border-slate-100 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition duration-300 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-navy">Call Us At</p>
                  <a href="tel:+916201300588" className="mt-1 block text-sm text-slate-600 hover:text-brand-orange">+91 6201300588</a>
                  <a href="tel:+911244074330" className="block text-sm text-slate-600 hover:text-brand-orange">+91 0124-4074330</a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="group h-full rounded-2xl border border-slate-100 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition duration-300 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-navy">E-mail Us At</p>
                  <a href="mailto:info@prithvirajlimited.com" className="mt-1 block text-sm text-slate-600 hover:text-brand-orange">
                    info@prithvirajlimited.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
