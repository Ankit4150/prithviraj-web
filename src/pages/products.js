// import React, { useMemo, useState } from 'react';
// import {
//   FiSearch,
//   FiX,
//   FiPackage,
//   FiPhoneCall,
//   FiArrowRight,
//   FiShield,
//   FiZap,
//   FiTool,
//   FiCheckCircle,
//   FiAward,
//   FiThermometer,
//   FiLock,
//   FiTrendingUp,
// } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import Reveal from '../common/Reveal';
// import CategoryFeature from '../common/CategoryFeature';

// // Pin Insulators
// import p11kVPolymerPin from '../assest/product image transparent/11kV_Polymer_Pin_Insulator_5kN_Strength.png.png';
// import p33kVPolymerPin from '../assest/product image transparent/33kV_Polymer_Pin_Insulator_10kN_Strength.png.png';
// import p11kVPorcelainPinGI from '../assest/product image transparent/11kV_Porcelain_Type_Pin_Insulator_with_GI_Pin.png.png';
// import p33kVPorcelainPinGI from '../assest/product image transparent/33kV_Porcelain_Pin_Insulator_with_GI_Pin.png.png';

// // Tower and pole support
// import pTowerSupport from '../assest/product image transparent/Concrete Poles.png';
// import pPoleSupport from '../assest/product image transparent/Rail Poles.png';
// import pPoleSupport2 from '../assest/product image transparent/Steel_Tubular_Poles.png.png';
// import pPoleSupport3 from '../assest/product image transparent/High_Beam_Rolled_Steel_Joists.png.png';

// //Outdoor And Indoor Cable Box (Kointing Kit And Termination Kit)
// import pOutdoorCableBox from '../assest/product image transparent/Screenshot 2026-07-01 101138.png';
// import pIndoorCableBox from '../assest/product image transparent/Screenshot 2026-07-01 101133.png';

// //Horn Gap and Drop Out Fuses
// import pHornGap from '../assest/product image transparent/Porcelain_Horn_Gap_Type_Fuse_Set.png (2).png';
// import pDropOut from '../assest/product image transparent/Polymer_Horn_Gap_Type_Fuse_Set.png (2).png';
// import pDropOut2 from '../assest/product image transparent/Porcelain_Drop_Out_Type_Fuse_Set.png.png';
// import pDropOut3 from '../assest/product image transparent/Polymer_Horn_Gap_Type_Fuse_Set.png.png';

// // Disc Insulators
// import p11kVPolymericDisc from '../assest/product image transparent/11kV_Polymeric_Disc_Insulator.png.png';
// import p11kVPolymerPin2 from '../assest/product image transparent/11kV_Polymer_Pin_Insulator_5kN_Strength.png (2).png';
// import p11kVPorcelainDisc from '../assest/product image transparent/11kV_Porcelain_Type_Disc_Insulator.png.png';
// import p33kVPorcelainDisc from '../assest/product image transparent/33kV_Porcelain_Type_Disc_Insulator.png.png';

// // Air Break Switches & Isolators
// import p11kVABPorcelain from '../assest/product image transparent/11kV_AB_Switch_Porcelain_Type.png.png';
// import p11kVABPolymeric from '../assest/product image transparent/11kV_Air_Break_Switch_Polymeric_Type.png (2).png';
// import p11kVIsolatorPorcelain from '../assest/product image transparent/11kV_Isolator_Porcelain_Type.png.png';
// import p11kVIsolatorPolymer from '../assest/product image transparent/11kV_Isolator_Polymer_Type.png.png';

// // Lightning Arrestor & Control Panel
// import p11kVPolymericLA from '../assest/product image transparent/11kV_Polymeric_Type_Lightning_Arrester.png.png';
// import p11kVPorcelainLA from '../assest/product image transparent/11kV_Porcelain_Type_Lightning_Arrester.png.png';
// import p33kVPolymericLA from '../assest/product image transparent/33kV_Polymeric_Type_Lightning_Arrester.png.png';
// import pControlPanel from '../assest/product image transparent/Control_Panels_and_Distribution_Panel.png.png';

// // Conductors
// import pACSR from '../assest/product image transparent/01_ACSR_Conductors.png.png';
// import pAAAC from '../assest/product image transparent/02_AAAC_Conductors.png.png';
// import pAAC from '../assest/product image transparent/03_AAC_Conductors.png.png';
// import pACAR from '../assest/product image transparent/04_ACAR_Conductors.png.png';
// import pAL59 from '../assest/product image transparent/05_AL59_Conductors.png.png';

// // Cables
// import pXLPE1 from '../assest/product image transparent/XLPE_Insulated_Armoured_Cable.png.png';
// import pXLPE2 from '../assest/product image transparent/XLPE_Insulated_Armoured_Cable_2.png.png';
// import pMVXLPE from '../assest/product image transparent/MV_XLPE_Insulated_Armoured_Cable.png.png';
// import pPVC from '../assest/product image transparent/PVC_Insulated_Armoured_Cable.png.png';

// const categories = [
//   {
//     title: 'Pin Insulators',
//     tag: '11kV & 33kV — Polymer & Porcelain Type',
//     description:
//       'High performance pin insulators designed for durability, safety and long-lasting reliability in power distribution systems.',
//     features: [
//       { icon: FiShield, title: 'High Durability', desc: 'Built to withstand years of outdoor exposure.' },
//       { icon: FiZap, title: 'Superior Insulation', desc: 'Reliable dielectric strength at rated voltage.' },
//       { icon: FiTool, title: 'Low Maintenance', desc: 'Minimal upkeep once installed on the line.' },
//       { icon: FiCheckCircle, title: 'Corrosion Resistant', desc: 'Holds up against weather and pollution.' },
//     ],
//     items: [
//       { name: '11 kV Polymer Pin Insulator 5 kN Strength', img: p11kVPolymerPin },
//       { name: '33 kV Polymer Pin Insulator 10 kN Strength', img: p33kVPolymerPin },
//       { name: '11 kV Porcelain Type Pin Insulator with GI Pin', img: p11kVPorcelainPinGI },
//       { name: '33 kV Porcelain Pin Insulator with GI Pin', img: p33kVPorcelainPinGI },
//     ],
//   },
//   {
//     title: 'Tower & Pole Support',
//     tag: 'Structures',
//     description:
//       'Concrete and steel structures fabricated to spec — strong, weather-ready supports for transmission and distribution lines.',
//     features: [
//       { icon: FiShield, title: 'High Strength', desc: 'Engineered to carry line loads safely.' },
//       { icon: FiAward, title: 'Long Lifespan', desc: 'Built for decades of outdoor service.' },
//       { icon: FiCheckCircle, title: 'Corrosion Resistant', desc: 'Treated finish holds up in the field.' },
//       { icon: FiTool, title: 'Easy Installation', desc: 'Standard sizing for quick erection.' },
//     ],
//     items: [
//       { name: 'Concrete Poles', img: pTowerSupport },
//       { name: 'Rail Poles', img: pPoleSupport },
//       { name: 'Steel Poles', img: pPoleSupport2 },
//       { name: 'High Beam Rolled Steel Joists', img: pPoleSupport3 },
//     ],
//   },
//   {
//     title: 'Disc Insulators',
//     tag: '11kV & 33kV — Polymer & Porcelain Type',
//     description:
//       'Reliable disc insulators for suspension and tension assemblies, keeping conductors safely isolated along the line.',
//     features: [
//       { icon: FiShield, title: 'High Durability', desc: 'Withstands mechanical and electrical stress.' },
//       { icon: FiZap, title: 'Superior Insulation', desc: 'Stable performance at rated voltage.' },
//       { icon: FiTool, title: 'Low Maintenance', desc: 'Long service life with minimal upkeep.' },
//       { icon: FiCheckCircle, title: 'Corrosion Resistant', desc: 'Reliable in harsh outdoor conditions.' },
//     ],
//     items: [
//       { name: '11 kV Polymeric Disc Insulator', img: p11kVPolymericDisc },
//       { name: '11 kV Polymer Pin Insulator 5 kN Strength', img: p11kVPolymerPin2 },
//       { name: '11 kV Porcelain Type Disc Insulator', img: p11kVPorcelainDisc },
//       { name: '33 kV Porcelain Type Disc Insulator', img: p33kVPorcelainDisc },
//     ],
//   },
//   {
//     title: 'Air Break Switches',
//     tag: '11kV — Polymer & Porcelain Type',
//     description:
//       'Dependable air break switches for safe manual isolation of feeders during maintenance and fault conditions.',
//     features: [
//       { icon: FiShield, title: 'High Reliability', desc: 'Consistent, safe switching operation.' },
//       { icon: FiZap, title: 'Superior Performance', desc: 'Rated for high electrical strength.' },
//       { icon: FiTool, title: 'Easy Installation', desc: 'Simple design for quick, hassle-free setup.' },
//       { icon: FiLock, title: 'Maximum Protection', desc: 'Effective isolation during faults.' },
//     ],
//     items: [
//       { name: '11 kV AB Switch Porcelain Type', img: p11kVABPorcelain },
//       { name: '11 kV AB Switch Polymeric Type', img: p11kVABPolymeric },
//     ],
//   },
//   {
//     title: 'Isolators',
//     tag: '11kV — Polymer & Porcelain Type',
//     description:
//       'Isolators built for clean, positive disconnection — a dependable point of isolation for safe line maintenance.',
//     features: [
//       { icon: FiShield, title: 'High Reliability', desc: 'Ensures continuous, uninterrupted power.' },
//       { icon: FiZap, title: 'Superior Performance', desc: 'Long-lasting electrical strength.' },
//       { icon: FiTool, title: 'Easy Installation', desc: 'Quick and hassle-free setup.' },
//       { icon: FiLock, title: 'Maximum Protection', desc: 'Reliable isolation on demand.' },
//     ],
//     items: [
//       { name: '11 kV Isolator Porcelain Type', img: p11kVIsolatorPorcelain },
//       { name: '11 kV Isolator Polymer Type', img: p11kVIsolatorPolymer },
//     ],
//   },
//   {
//     title: 'Lightning Arrestor',
//     tag: '11kV & 33kV — Reliable Protection',
//     description:
//       'High quality lightning arresters designed for superior performance and protection against surges in power distribution systems.',
//     features: [
//       { icon: FiShield, title: 'High Reliability', desc: 'Continuous protection and uninterrupted power.' },
//       { icon: FiZap, title: 'Superior Performance', desc: 'High electrical strength, long-lasting.' },
//       { icon: FiTool, title: 'Easy Installation', desc: 'Simple design, hassle-free setup.' },
//       { icon: FiLock, title: 'Maximum Protection', desc: 'Guards against overcurrent and faults.' },
//     ],
//     items: [
//       { name: '11 kV Polymeric Type LA', img: p11kVPolymericLA },
//       { name: '11 kV Porcelain Type LA', img: p11kVPorcelainLA },
//       { name: '33 kV Polymeric Type LA', img: p33kVPolymericLA },
//     ],
//   },
//   {
//     title: 'Control Panel',
//     tag: 'Panels',
//     description:
//       'Compact control and distribution panels built for safe, reliable power management on site.',
//     features: [
//       { icon: FiTool, title: 'Compact Design', desc: 'Space-efficient panel layout.' },
//       { icon: FiTrendingUp, title: 'Easy Maintenance', desc: 'Accessible components for quick service.' },
//       { icon: FiShield, title: 'High Safety', desc: 'Built-in protection for safe operation.' },
//       { icon: FiCheckCircle, title: 'Reliable Performance', desc: 'Consistent power management.' },
//     ],
//     items: [{ name: 'Control Panels & Distribution Panel', img: pControlPanel }],
//   },
//   {
//     title: 'Electrical Conductors',
//     tag: 'Conductors',
//     description:
//       'A full range of overhead conductors engineered for high conductivity and low losses across transmission and distribution.',
//     features: [
//       { icon: FiZap, title: 'High Conductivity', desc: 'Efficient current flow, minimal loss.' },
//       { icon: FiTrendingUp, title: 'Low Losses', desc: 'Optimised for long-run efficiency.' },
//       { icon: FiThermometer, title: 'Weather Resistant', desc: 'Performs reliably in every season.' },
//       { icon: FiAward, title: 'Long Lifespan', desc: 'Built for decades of outdoor use.' },
//     ],
//     items: [
//       { name: 'ACSR Conductors', img: pACSR },
//       { name: 'AAAC Conductors', img: pAAAC },
//       { name: 'AAC Conductors', img: pAAC },
//       { name: 'ACAR Conductors', img: pACAR },
//       { name: 'AL-59 Conductor', img: pAL59 },
//     ],
//   },
//   {
//     title: 'Horn Gap & Drop Out Fuses',
//     tag: 'Reliable Protection. Maximum Safety.',
//     description:
//       'High quality horn gap and drop out fuses designed for superior performance and protection in power distribution systems.',
//     features: [
//       { icon: FiShield, title: 'High Reliability', desc: 'Ensures continuous protection and uninterrupted power.' },
//       { icon: FiZap, title: 'Superior Performance', desc: 'Designed for high electrical strength and long-lasting performance.' },
//       { icon: FiTool, title: 'Easy Installation', desc: 'Simple design for quick and hassle-free installation.' },
//       { icon: FiLock, title: 'Maximum Protection', desc: 'Provides effective protection against overcurrent and fault conditions.' },
//     ],
//     items: [
//       { name: 'Porcelain Horn Gap Type Fuse Set', img: pHornGap },
//       { name: 'Polymer Horn Gap Type Fuse Set', img: pDropOut },
//       { name: 'Porcelain Drop Out Type Fuse Set', img: pDropOut2 },
//       { name: 'Porcelain Horn Gap Type Fuse Set', img: pDropOut3 },
//     ],
//   },
//   {
//     title: 'Insulated Armoured Cables',
//     tag: 'Cables',
//     description:
//       'XLPE, MV XLPE and PVC insulated armoured cables built for safe, long-lasting power transmission below ground and above.',
//     features: [
//       { icon: FiZap, title: 'High Conductivity', desc: 'Efficient, low-loss power delivery.' },
//       { icon: FiShield, title: 'Armoured Protection', desc: 'Rugged build for tough environments.' },
//       { icon: FiThermometer, title: 'Weather Resistant', desc: 'Performs reliably outdoors & underground.' },
//       { icon: FiAward, title: 'Long Lifespan', desc: 'Engineered for decades of service.' },
//     ],
//     items: [
//       { name: 'XLPE Insulated Armoured Cables', img: pXLPE1 },
//       { name: 'XLPE Insulated Armoured Cables', img: pXLPE2 },
//       { name: 'MV XLPE Insulated Armoured Cables', img: pMVXLPE },
//       { name: 'PVC Insulated Armoured Cables', img: pPVC },
//     ],
//   },
//   {
//     title: 'Cable Boxes (Jointing & Termination Kits)',
//     tag: 'Accessories',
//     description:
//       'Outdoor and indoor cable boxes for safe, sealed jointing and termination of power cables at every connection point.',
//     features: [
//       { icon: FiShield, title: 'Sealed Protection', desc: 'Keeps joints dry and fault-free.' },
//       { icon: FiTool, title: 'Easy Installation', desc: 'Straightforward kit assembly on site.' },
//       { icon: FiLock, title: 'Maximum Protection', desc: 'Reliable insulation at the joint.' },
//       { icon: FiCheckCircle, title: 'Reliable Performance', desc: 'Built for long-term termination use.' },
//     ],
//     items: [
//       { name: 'Outdoor Cable Box', img: pOutdoorCableBox },
//       { name: 'Indoor Cable Box', img: pIndoorCableBox },
//     ],
//   },
// ];

// const totalProducts = categories.reduce((sum, c) => sum + c.items.length, 0);

// function slugify(str) {
//   return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
// }

// export default function Products() {
//   const [query, setQuery] = useState('');

//   const filtered = useMemo(() => {
//     const q = query.trim().toLowerCase();
//     if (!q) return categories;
//     return categories
//       .map((cat) => ({
//         ...cat,
//         items: cat.items.filter(
//           (item) => item.name.toLowerCase().includes(q) || cat.title.toLowerCase().includes(q)
//         ),
//       }))
//       .filter((cat) => cat.items.length > 0);
//   }, [query]);

//   const scrollToCategory = (title) => {
//     const el = document.getElementById(slugify(title));
//     if (el) {
//       const y = el.getBoundingClientRect().top + window.scrollY - 110;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="bg-white">
//       {/* ---------------- HERO ---------------- */}
//       <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
//         <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 animate-float rounded-full bg-brand-orange/10 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
//         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <span className="inline-block animate-fadeInUp rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-orange">
//             Product Catalogue
//           </span>
//           <h1 className="mt-4 animate-fadeInUp text-3xl font-extrabold sm:text-4xl lg:text-5xl" style={{ animationDelay: '80ms' }}>
//             Everything you need, up to 33&nbsp;kV
//           </h1>
//           <p className="mt-3 max-w-2xl animate-fadeInUp text-white/70" style={{ animationDelay: '160ms' }}>
//             Manufacturing, trading &amp; supply of electrical goods and components — insulators, conductors,
//             cables, switchgear and structural supports, all in one place.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-6 animate-fadeInUp" style={{ animationDelay: '240ms' }}>
//             <div>
//               <p className="text-2xl font-extrabold sm:text-3xl">{totalProducts}+</p>
//               <p className="text-xs font-medium uppercase tracking-wide text-white/60">Products listed</p>
//             </div>
//             <div>
//               <p className="text-2xl font-extrabold sm:text-3xl">{categories.length}</p>
//               <p className="text-xs font-medium uppercase tracking-wide text-white/60">Categories</p>
//             </div>
//             <div>
//               <p className="text-2xl font-extrabold sm:text-3xl">33 kV</p>
//               <p className="text-xs font-medium uppercase tracking-wide text-white/60">Voltage range</p>
//             </div>
//           </div>

//           {/* Search */}
//           <div className="relative mt-8 max-w-lg animate-fadeInUp" style={{ animationDelay: '320ms' }}>
//             <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/50" size={18} />
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search products — e.g. insulator, cable, pole..."
//               className="w-full rounded-full border-0 bg-white py-3.5 pl-11 pr-11 text-sm font-medium text-navy shadow-lg shadow-black/10 outline-none ring-1 ring-white/10 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-orange"
//             />
//             {query && (
//               <button
//                 onClick={() => setQuery('')}
//                 aria-label="Clear search"
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/50 transition hover:text-brand-orange"
//               >
//                 <FiX size={18} />
//               </button>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- CATEGORY QUICK NAV ---------------- */}
//       {!query && (
//         <div className="sticky top-[57px] z-30 border-b border-slate-100 bg-white/95 py-3 backdrop-blur sm:top-[65px]">
//           <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex w-max gap-2">
//               {categories.map((cat) => (
//                 <button
//                   key={cat.title}
//                   onClick={() => scrollToCategory(cat.title)}
//                   className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-brand-orange hover:text-brand-orange"
//                 >
//                   {cat.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* ---------------- CATEGORIES ---------------- */}
//       {query ? (
//         <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
//           {filtered.length === 0 && (
//             <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 py-20 text-center">
//               <FiPackage size={36} className="text-slate-300" />
//               <p className="mt-4 font-semibold text-navy">No products match &ldquo;{query}&rdquo;</p>
//               <p className="mt-1 text-sm text-slate-500">Try a different keyword, or get in touch — we likely stock it.</p>
//               <button
//                 onClick={() => setQuery('')}
//                 className="mt-5 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-orangedark"
//               >
//                 Clear search
//               </button>
//             </div>
//           )}

//           {filtered.map((cat, catIdx) => (
//             <div key={cat.title} id={slugify(cat.title)} className="mb-16 scroll-mt-32 last:mb-0">
//               <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-3 border-l-4 border-brand-orange pl-4">
//                 <div>
//                   <span className="text-xs font-bold uppercase tracking-wide text-brand-orange">{cat.tag}</span>
//                   <h2 className="text-xl font-extrabold text-navy sm:text-2xl">{cat.title}</h2>
//                 </div>
//                 <span className="text-xs font-semibold text-slate-400">
//                   {cat.items.length} product{cat.items.length > 1 ? 's' : ''}
//                 </span>
//               </Reveal>

//               <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
//                 {cat.items.map((item, idx) => (
//                   <Reveal key={item.name + idx} delay={(idx % 4) * 70}>
//                     <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-navy-900/5">
//                       <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-50/70 p-5">
//                         <img
//                           src={item.img}
//                           alt={item.name}
//                           className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-110"
//                           loading="lazy"
//                         />
//                         <span className="absolute right-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-navy shadow-sm">
//                           {catIdx + 1}.{idx + 1}
//                         </span>
//                       </div>
//                       <div className="border-t border-slate-100 px-3.5 py-3">
//                         <p className="line-clamp-2 text-xs font-semibold leading-snug text-slate-700 sm:text-sm">
//                           {item.name}
//                         </p>
//                       </div>
//                     </div>
//                   </Reveal>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </section>
//       ) : (
//         categories.map((cat, i) => (
//           <div key={cat.title} id={slugify(cat.title)} className="scroll-mt-32">
//             <CategoryFeature category={cat} alt={i % 2 === 1} />
//           </div>
//         ))
//       )}

//       {/* ---------------- CTA ---------------- */}
//       <section className="px-4 pb-16 sm:px-6 lg:px-8">
//         <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-4 overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white sm:px-16">
//           <FiPackage size={28} className="text-brand-orange" />
//           <h2 className="text-2xl font-extrabold sm:text-3xl">Can&rsquo;t find what you&rsquo;re looking for?</h2>
//           <p className="max-w-xl text-white/70">
//             Our catalogue keeps growing — if you have a spec sheet or a BOQ, send it over and we&rsquo;ll confirm
//             availability and pricing.
//           </p>
//           <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-orangedark"
//             >
//               <FiPhoneCall /> Talk to Us
//             </Link>
//             <a
//               href="tel:+916201300588"
//               className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
//             >
//               +91 6201300588 <FiArrowRight />
//             </a>
//           </div>
//         </Reveal>
//       </section>
//     </div>
//   );
// }



import CategoryTiles from '../common/CategoryTiles';
import React, { useMemo, useState } from 'react';
import { FiSearch, FiX, FiPackage, FiPhoneCall, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Reveal from '../common/Reveal';

// Pin Insulators
import p11kVPolymerPin from '../assest/product image transparent/11kV_Polymer_Pin_Insulator_5kN_Strength.png.png';
import p33kVPolymerPin from '../assest/product image transparent/33kV_Polymer_Pin_Insulator_10kN_Strength.png.png';
import p11kVPorcelainPinGI from '../assest/product image transparent/11kV_Porcelain_Type_Pin_Insulator_with_GI_Pin.png.png';
import p33kVPorcelainPinGI from '../assest/product image transparent/33kV_Porcelain_Pin_Insulator_with_GI_Pin.png.png';

// Tower and pole support
import pTowerSupport from '../assest/product image transparent/Concrete Poles.png';
import pPoleSupport from '../assest/product image transparent/Rail Poles.png';
import pPoleSupport2 from '../assest/product image transparent/Steel_Tubular_Poles.png.png';
import pPoleSupport3 from '../assest/product image transparent/High_Beam_Rolled_Steel_Joists.png.png';

//Outdoor And Indoor Cable Box (Kointing Kit And Termination Kit)
import pOutdoorCableBox from '../assest/product image transparent/Screenshot 2026-07-01 101138.png';
import pIndoorCableBox from '../assest/product image transparent/Screenshot 2026-07-01 101133.png';

//Horn Gap and Drop Out Fuses
import pHornGap from '../assest/product image transparent/Porcelain_Horn_Gap_Type_Fuse_Set.png (2).png';
import pDropOut from '../assest/product image transparent/Polymer_Horn_Gap_Type_Fuse_Set.png (2).png';
import pDropOut2 from '../assest/product image transparent/Porcelain_Drop_Out_Type_Fuse_Set.png.png';
import pDropOut3 from '../assest/product image transparent/Polymer_Horn_Gap_Type_Fuse_Set.png.png';

// Disc Insulators
import p11kVPolymericDisc from '../assest/product image transparent/11kV_Polymeric_Disc_Insulator.png.png';
import p11kVPolymerPin2 from '../assest/product image transparent/11kV_Polymer_Pin_Insulator_5kN_Strength.png (2).png';
import p11kVPorcelainDisc from '../assest/product image transparent/11kV_Porcelain_Type_Disc_Insulator.png.png';
import p33kVPorcelainDisc from '../assest/product image transparent/33kV_Porcelain_Type_Disc_Insulator.png.png';

// Air Break Switches & Isolators
import p11kVABPorcelain from '../assest/product image transparent/11kV_AB_Switch_Porcelain_Type.png.png';
import p11kVABPolymeric from '../assest/product image transparent/11kV_Air_Break_Switch_Polymeric_Type.png (2).png';
import p11kVIsolatorPorcelain from '../assest/product image transparent/11kV_Isolator_Porcelain_Type.png.png';
import p11kVIsolatorPolymer from '../assest/product image transparent/11kV_Isolator_Polymer_Type.png.png';

// Lightning Arrestor & Control Panel
import p11kVPolymericLA from '../assest/product image transparent/11kV_Polymeric_Type_Lightning_Arrester.png.png';
import p11kVPorcelainLA from '../assest/product image transparent/11kV_Porcelain_Type_Lightning_Arrester.png.png';
import p33kVPolymericLA from '../assest/product image transparent/33kV_Polymeric_Type_Lightning_Arrester.png.png';
import pControlPanel from '../assest/product image transparent/Control_Panels_and_Distribution_Panel.png.png';

// Conductors
import pACSR from '../assest/product image transparent/01_ACSR_Conductors.png.png';
import pAAAC from '../assest/product image transparent/02_AAAC_Conductors.png.png';
import pAAC from '../assest/product image transparent/03_AAC_Conductors.png.png';
import pACAR from '../assest/product image transparent/04_ACAR_Conductors.png.png';
import pAL59 from '../assest/product image transparent/05_AL59_Conductors.png.png';

// Cables
import pXLPE1 from '../assest/product image transparent/XLPE_Insulated_Armoured_Cable.png.png';
import pXLPE2 from '../assest/product image transparent/XLPE_Insulated_Armoured_Cable_2.png.png';
import pMVXLPE from '../assest/product image transparent/MV_XLPE_Insulated_Armoured_Cable.png.png';
import pPVC from '../assest/product image transparent/PVC_Insulated_Armoured_Cable.png.png';

const categories = [
  {
    title: 'Pin Insulators',
    tag: '11kV & 33kV',
    items: [
      { name: '11 kV Polymer Pin Insulator 5 kN Strength', img: p11kVPolymerPin },
      { name: '33 kV Polymer Pin Insulator 10 kN Strength', img: p33kVPolymerPin },
      { name: '11 kV Porcelain Type Pin Insulator with GI Pin', img: p11kVPorcelainPinGI },
      { name: '33 kV Porcelain Pin Insulator with GI Pin', img: p33kVPorcelainPinGI },
    ],
  },
  {
    title: 'Tower & Pole Support',
    tag: 'Structures',
    items: [
      { name: 'Concrete Poles', img: pTowerSupport },
      { name: 'Rail Poles', img: pPoleSupport },
      { name: 'Steel Poles', img: pPoleSupport2 },
      { name: 'High Beam Rolled Steel Joists', img: pPoleSupport3 },
    ],
  },
  {
    title: 'Disc Insulators',
    tag: '11kV & 33kV',
    items: [
      { name: '11 kV Polymeric Disc Insulator', img: p11kVPolymericDisc },
      { name: '11 kV Polymer Pin Insulator 5 kN Strength', img: p11kVPolymerPin2 },
      { name: '11 kV Porcelain Type Disc Insulator', img: p11kVPorcelainDisc },
      { name: '33 kV Porcelain Type Disc Insulator', img: p33kVPorcelainDisc },
    ],
  },
  {
    title: 'Air Break Switches',
    tag: '11kV',
    items: [
      { name: '11 kV AB Switch Porcelain Type', img: p11kVABPorcelain },
      { name: '11 kV AB Switch Polymeric Type', img: p11kVABPolymeric },
    ],
  },
  {
    title: 'Isolators',
    tag: '11kV',
    items: [
      { name: '11 kV Isolator Porcelain Type', img: p11kVIsolatorPorcelain },
      { name: '11 kV Isolator Polymer Type', img: p11kVIsolatorPolymer },
    ],
  },
  {
    title: 'Lightning Arrestor',
    tag: '11kV & 33kV',
    items: [
      { name: '11 kV Polymeric Type LA', img: p11kVPolymericLA },
      { name: '11 kV Porcelain Type LA', img: p11kVPorcelainLA },
      { name: '33 kV Polymeric Type LA', img: p33kVPolymericLA },
    ],
  },
  {
    title: 'Control Panel',
    tag: 'Panels',
    items: [{ name: 'Control Panels & Distribution Panel', img: pControlPanel }],
  },
  {
    title: 'Electrical Conductors',
    tag: 'Conductors',
    items: [
      { name: 'ACSR Conductors', img: pACSR },
      { name: 'AAAC Conductors', img: pAAAC },
      { name: 'AAC Conductors', img: pAAC },
      { name: 'ACAR Conductors', img: pACAR },
      { name: 'AL-59 Conductor', img: pAL59 },
    ],
  },
  {
    title: 'Horn Gap & Drop Out Fuses',
    tag: 'Fuses',
    items: [
      { name: 'Porcelain Horn Gap Type Fuse Set', img: pHornGap },
      { name: 'Polymer Horn Gap Type Fuse Set', img: pDropOut },
      { name: 'Porcelain Drop Out Type Fuse Set', img: pDropOut2 },
      { name: 'Porcelain Horn Gap Type Fuse Set', img: pDropOut3 },
    ],
  },
  {
    title: 'Insulated Armoured Cables',
    tag: 'Cables',
    items: [
      { name: 'XLPE Insulated Armoured Cables', img: pXLPE1 },
      { name: 'XLPE Insulated Armoured Cables', img: pXLPE2 },
      { name: 'MV XLPE Insulated Armoured Cables', img: pMVXLPE },
      { name: 'PVC Insulated Armoured Cables', img: pPVC },
    ],
  },
  {
    title: 'Cable Boxes (Jointing & Termination Kits)',
    tag: 'Accessories',
    items: [
      { name: 'Outdoor Cable Box', img: pOutdoorCableBox },
      { name: 'Indoor Cable Box', img: pIndoorCableBox },
    ],
  },
];

const totalProducts = categories.reduce((sum, c) => sum + c.items.length, 0);

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function Products() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) => item.name.toLowerCase().includes(q) || cat.title.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  const scrollToCategory = (title) => {
    const el = document.getElementById(slugify(title));
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 animate-float rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block animate-fadeInUp rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-brand-orange">
            Product Catalogue
          </span>
          <h1 className="mt-4 animate-fadeInUp text-3xl font-extrabold sm:text-4xl lg:text-5xl" style={{ animationDelay: '80ms' }}>
            Everything you need, up to 33&nbsp;kV
          </h1>
          <p className="mt-3 max-w-2xl animate-fadeInUp text-white/70" style={{ animationDelay: '160ms' }}>
            Manufacturing, trading &amp; supply of electrical goods and components — insulators, conductors,
            cables, switchgear and structural supports, all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 animate-fadeInUp" style={{ animationDelay: '240ms' }}>
            <div>
              <p className="text-2xl font-extrabold sm:text-3xl">{totalProducts}+</p>
              <p className="text-xs font-medium uppercase tracking-wide text-white/60">Products listed</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold sm:text-3xl">{categories.length}</p>
              <p className="text-xs font-medium uppercase tracking-wide text-white/60">Categories</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold sm:text-3xl">33 kV</p>
              <p className="text-xs font-medium uppercase tracking-wide text-white/60">Voltage range</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mt-8 max-w-lg animate-fadeInUp" style={{ animationDelay: '320ms' }}>
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/50" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products — e.g. insulator, cable, pole..."
              className="w-full rounded-full border-0 bg-white py-3.5 pl-11 pr-11 text-sm font-medium text-navy shadow-lg shadow-black/10 outline-none ring-1 ring-white/10 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-orange"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/50 transition hover:text-brand-orange"
              >
                <FiX size={18} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ---------------- CATEGORY QUICK NAV ---------------- */}
      {!query && (
        <div className="sticky top-[57px] z-30 border-b border-slate-100 bg-white/95 py-3 backdrop-blur sm:top-[65px]">
          <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
            <div className="flex w-max gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => scrollToCategory(cat.title)}
                  className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-brand-orange hover:text-brand-orange"
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------------- CATEGORIES ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 py-20 text-center">
            <FiPackage size={36} className="text-slate-300" />
            <p className="mt-4 font-semibold text-navy">No products match &ldquo;{query}&rdquo;</p>
            <p className="mt-1 text-sm text-slate-500">Try a different keyword, or get in touch — we likely stock it.</p>
            <button
              onClick={() => setQuery('')}
              className="mt-5 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-orangedark"
            >
              Clear search
            </button>
          </div>
        )}

        {filtered.map((cat, catIdx) => (
          <div key={cat.title} id={slugify(cat.title)} className="mb-16 scroll-mt-32 last:mb-0">
            <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-3 border-l-4 border-brand-orange pl-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-brand-orange">{cat.tag}</span>
                <h2 className="text-xl font-extrabold text-navy sm:text-2xl">{cat.title}</h2>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {cat.items.length} product{cat.items.length > 1 ? 's' : ''}
              </span>
            </Reveal>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {cat.items.map((item, idx) => (
                <Reveal key={item.name + idx} delay={(idx % 4) * 70}>
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-navy-900/5">
                    <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-slate-50/70 p-5">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <span className="absolute right-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-navy shadow-sm">
                        {catIdx + 1}.{idx + 1}
                      </span>
                    </div>
                    <div className="border-t border-slate-100 px-3.5 py-3">
                      <p className="line-clamp-2 text-xs font-semibold leading-snug text-slate-700 sm:text-sm">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-5xl flex-col items-center gap-4 overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white sm:px-16">
          <FiPackage size={28} className="text-brand-orange" />
          <h2 className="text-2xl font-extrabold sm:text-3xl">Can&rsquo;t find what you&rsquo;re looking for?</h2>
          <p className="max-w-xl text-white/70">
            Our catalogue keeps growing — if you have a spec sheet or a BOQ, send it over and we&rsquo;ll confirm
            availability and pricing.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
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
              +91 6201300588 <FiArrowRight />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

