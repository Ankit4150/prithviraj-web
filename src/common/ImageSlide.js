// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FiArrowRight, FiAward } from 'react-icons/fi';
// import Counter from './Counter';

// /**
//  * ImageSlide — first slide of the HeroSlider. Two-column layout: dark navy
//  * copy panel on the left, a white rounded card holding the brand poster
//  * image on the right (image intentionally overflows/clips at the bottom
//  * of the fixed-height slide viewport, matching the reference design).
//  *
//  * Renders inside HeroSlider's fixed-height, overflow-hidden slide box, so
//  * it fills h-full w-full exactly like every other slide — width/height
//  * behaviour is unchanged from before.
//  */
// export default function ImageSlide({ image, imageAlt, primaryCta, secondaryCta, active }) {
//   return (
//     <div className="relative h-full w-full overflow-hidden bg-navy">
//       {/* decorative glows */}
//       <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-navy-600/40 blur-3xl" />
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
//           backgroundSize: '22px 22px',
//         }}
//       />

//       <div className="relative mx-auto grid h-full max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8">
//         {/* ---------------- LEFT: COPY ---------------- */}
//         <div
//           className={`text-center transition-all duration-700 lg:text-left ${
//             active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
//           }`}
//         >
//           <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange">
//             <FiAward size={13} /> Government Approved EPC Contractor
//           </span>

//           <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
//             Providing Services
//             <span className="block text-brand-orange">Beyond The Ordinary</span>
//           </h1>

//           <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base lg:mx-0">
//             Prithviraj Corporation Ltd. delivers civil &amp; electrical EPC works, manufactures
//             distribution transformers and steel structures, and supplies power distribution
//             equipment up to 33kV &mdash; end to end, on time, every time.
//           </p>

//           <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
//             <Link
//               to={primaryCta?.to || '/products'}
//               className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orangedark"
//             >
//               {primaryCta?.label || 'Explore Products'}
//               <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>
//             <Link
//               to={secondaryCta?.to || '/contact'}
//               className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
//             >
//               {secondaryCta?.label || 'Get In Touch'}
//             </Link>
//           </div>

//           <div className="mx-auto mt-7 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-5 lg:mx-0">
//             <div>
//               <p className="text-xl font-extrabold text-white sm:text-2xl">
//                 <Counter value={8} suffix="+" />
//               </p>
//               <p className="mt-1 text-[11px] text-white/50 sm:text-xs">Years Active</p>
//             </div>
//             <div>
//               <p className="text-xl font-extrabold text-white sm:text-2xl">
//                 <Counter value={33} suffix="kV" />
//               </p>
//               <p className="mt-1 text-[11px] text-white/50 sm:text-xs">Voltage Range</p>
//             </div>
//             <div>
//               <p className="text-xl font-extrabold text-white sm:text-2xl">
//                 <Counter value={1200} suffix="kVA" />
//               </p>
//               <p className="mt-1 text-[11px] text-white/50 sm:text-xs">DTR Capacity</p>
//             </div>
//           </div>
//         </div>

//         {/* ---------------- RIGHT: POSTER CARD ---------------- */}
//         <div
//           className={`relative hidden h-full items-start justify-center transition-all duration-700 delay-150 lg:flex ${
//             active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
//           }`}
//         >
//           <div className="absolute top-6 w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/40 sm:max-w-lg">
//             <img src={image} alt={imageAlt} className="h-auto w-full object-contain" />
//           </div>
//         </div>

//         {/* ---------------- MOBILE: smaller card below copy ---------------- */}
//         <div
//           className={`relative mx-auto -mt-2 block w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-700 delay-150 lg:hidden ${
//             active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
//           }`}
//           style={{ maxHeight: '38vh' }}
//         >
//           <img src={image} alt={imageAlt} className="h-full w-full object-cover object-top" />
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiAward } from 'react-icons/fi';
import Counter from './Counter';

/**
 * ImageSlide — first slide of the HeroSlider. Two-column layout: dark navy
 * copy panel on the left, a white rounded card holding the brand poster
 * image on the right (image intentionally overflows/clips at the bottom
 * of the fixed-height slide viewport, matching the reference design).
 *
 * Renders inside HeroSlider's fixed-height, overflow-hidden slide box, so
 * it fills h-full w-full exactly like every other slide — width/height
 * behaviour is unchanged from before.
 */
export default function ImageSlide({ image, imageAlt, primaryCta, secondaryCta, active }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-navy">
      {/* decorative glows */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-navy-600/40 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative mx-auto grid h-full max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8">
        {/* ---------------- LEFT: COPY ---------------- */}
        <div
          className={`text-center transition-all duration-700 lg:text-left ${
            active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <FiAward size={13} /> Government Approved EPC Contractor
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Providing Services
            <span className="block text-brand-orange">Beyond The Ordinary</span>
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base lg:mx-0">
            Prithviraj Corporation Ltd. delivers civil &amp; electrical EPC works, manufactures
            distribution transformers and steel structures, and supplies power distribution
            equipment up to 33kV &mdash; end to end, on time, every time.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to={primaryCta?.to || '/products'}
              className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-orange/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orangedark"
            >
              {primaryCta?.label || 'Explore Products'}
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to={secondaryCta?.to || '/contact'}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              {secondaryCta?.label || 'Get In Touch'}
            </Link>
          </div>

          <div className="mx-auto mt-7 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-5 lg:mx-0">
            <div>
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                <Counter value={8} suffix="+" />
              </p>
              <p className="mt-1 text-[11px] text-white/50 sm:text-xs">Years Active</p>
            </div>
            <div>
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                <Counter value={33} suffix="kV" />
              </p>
              <p className="mt-1 text-[11px] text-white/50 sm:text-xs">Voltage Range</p>
            </div>
            <div>
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                <Counter value={1200} suffix="kVA" />
              </p>
              <p className="mt-1 text-[11px] text-white/50 sm:text-xs">DTR Capacity</p>
            </div>
          </div>
        </div>

        {/* ---------------- RIGHT: POSTER CARD ---------------- */}
        <div
          className={`relative hidden h-full items-start justify-center transition-all duration-700 delay-150 lg:flex ${
            active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <div className="absolute top-6 w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/40 sm:max-w-lg">
            <img src={image} alt={imageAlt} className="h-auto w-full object-contain" />
          </div>
        </div>

        {/* ---------------- MOBILE: smaller card below copy ---------------- */}
        <div
          className={`relative mx-auto -mt-2 block w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-700 delay-150 lg:hidden ${
            active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
          style={{ maxHeight: '38vh' }}
        >
          <img src={image} alt={imageAlt} className="h-full w-full object-cover object-top" />
        </div>
      </div>
    </div>
  );
}