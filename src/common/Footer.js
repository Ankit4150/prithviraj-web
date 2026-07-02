import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import logo from '../assest/company logo.png';
import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white" style={{ backgroundColor: '#120A3B' }}>
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-8xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal className="grid gap-8 md:grid-cols-3">

          {/* Logo + About */}
          <div>
            <img src={logo} alt="Company Logo" className="mb-2 h-9 transition-transform duration-300 hover:scale-105" />
            <p className="text-xs leading-relaxed text-white/60">
              EPC company offering civil &amp; electrical consultancy and manufacturing
              for power distribution sector.
            </p>
          </div>

          {/* Offices */}
          <div className="space-y-3 text-xs text-white/60">
            <div className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 shrink-0 text-brand-orange" size={16} />
              <div>
                <p className="text-sm font-semibold text-brand-orange">Register Office</p>
                Unit No 930B, Spaze I Tech Park, Gurugram
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 shrink-0 text-brand-orange" size={16} />
              <div>
                <p className="text-sm font-semibold text-brand-orange">Plant Office</p>
                Keshawe, Barauni, Begusarai, Bihar - 851134
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-xs text-white/60">
            <p className="text-sm font-semibold text-brand-orange">Get In Touch</p>
            <a href="tel:+916201300588" className="flex items-center gap-2 transition hover:text-white">
              <FiPhone size={14} /> +91 6201300588
            </a>
            <a href="tel:+911244074330" className="flex items-center gap-2 transition hover:text-white">
              <FiPhone size={14} /> +91 0124-4074330
            </a>
            <a href="mailto:info@prithvirajlimited.com" className="flex items-center gap-2 transition hover:text-white">
              <FiMail size={14} /> info@prithvirajlimited.com
            </a>
          </div>

        </Reveal>

        <div className="relative mt-5 border-t border-white/10 pt-3 text-center text-[11px] text-white/40">
          © {new Date().getFullYear()} Prithviraj Corporation Limited
        </div>
      </div>
    </footer>
  );
}
