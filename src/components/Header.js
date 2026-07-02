// import React, { useEffect, useState } from 'react';
// import { FiMenu, FiX, FiPhone, FiMail, FiArrowRight, FiChevronRight } from 'react-icons/fi';
// import { Link, NavLink } from 'react-router-dom';
// import logo from '../assest/company logo.png';

// const navLinks = [
//   { label: 'Home', to: '/' },
//   { label: 'About', to: '/about' },
//   { label: 'Products', to: '/products' },
//   { label: 'Contact', to: '/contact' },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isOpen ? 'hidden' : '';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isOpen]);

//   const linkClass = ({ isActive }) =>
//     `relative py-1 text-sm font-semibold transition-colors hover:text-brand-orange after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-brand-orange after:transition-all after:duration-300 ${
//       isActive ? 'text-brand-orange after:w-full' : 'text-navy/90 after:w-0 hover:after:w-full'
//     }`;

//   return (
//     <header className="sticky top-0 z-50">
//       {/* ---------------- MAIN NAV ---------------- */}
//      <div
//   className={`border-b border-slate-200 bg-[#F7F8FA] transition-shadow duration-300 ${
//     scrolled ? 'shadow-md' : 'shadow-sm'
//   }`}
// >
//         <div
//           className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
//             scrolled ? 'py-2.5' : 'py-3.5'
//           }`}
//         >
//           <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
//      <div
//   className={`flex shrink-0 items-center justify-center transition-all duration-300 ${
//     scrolled ? 'h-12 w-12' : 'h-16 w-16'
//   }`}
// >
//   <img
//     src={logo}
//     alt="Prithviraj Corporation Limited"
//     className="h-full w-full object-contain"
//   />
// </div>
//             <div className="hidden sm:block">
//               <p className="text-base font-extrabold leading-tight tracking-tight text-navy">
//                 Prithviraj Corporation <span className="text-brand-orange">Ltd.</span>
//               </p>
//               <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
//                 Providing Services Beyond The Ordinary
//               </p>
//             </div>
//           </Link>

//           <nav className="hidden items-center gap-9 md:flex">
//             {navLinks.map((link) => (
//               <NavLink key={link.label} to={link.to} className={linkClass} end={link.to === '/'}>
//                 {link.label}
//               </NavLink>
//             ))}
//           </nav>

//           <div className="hidden items-center gap-3 md:flex">
//             <a
//               href="tel:+916201300588"
//               className="flex items-center gap-2 rounded-full border border-navy/15 px-3.5 py-2.5 text-navy transition hover:border-brand-orange hover:text-brand-orange"
//               aria-label="Call us"
//             >
//               <FiPhone size={16} />
//             </a>
//             <Link
//               to="/contact"
//               className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-orange/30 transition hover:-translate-y-0.5 hover:bg-brand-orangedark hover:shadow-md"
//             >
//               Get Quote
//               <FiArrowRight className="transition-transform group-hover:translate-x-1" size={15} />
//             </Link>
//           </div>

//           <button
//             className="rounded-full border border-navy/20 p-2 text-navy transition hover:border-brand-orange hover:text-brand-orange md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={isOpen}
//           >
//             {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* ---------------- MOBILE OVERLAY + SLIDE-IN PANEL ---------------- */}
//       <div
//         className={`fixed inset-0 z-40 bg-navy-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
//           isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
//         }`}
//         onClick={() => setIsOpen(false)}
//       />
//       <div
//         className={`fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
//           <div className="flex items-center gap-2.5">
//             <img src={logo} alt="Prithviraj Corporation Limited" className="h-9 w-9 object-contain" />
//             <p className="text-sm font-extrabold text-navy">Prithviraj Corp.</p>
//           </div>
//           <button
//             className="rounded-full border border-navy/20 p-2 text-navy transition hover:border-brand-orange hover:text-brand-orange"
//             onClick={() => setIsOpen(false)}
//             aria-label="Close menu"
//           >
//             <FiX size={18} />
//           </button>
//         </div>

//         <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.label}
//               to={link.to}
//               onClick={() => setIsOpen(false)}
//               end={link.to === '/'}
//               className={({ isActive }) =>
//                 `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
//                   isActive ? 'bg-brand-orange/10 text-brand-orange' : 'text-navy hover:bg-slate-50'
//                 }`
//               }
//             >
//               {link.label}
//               <FiChevronRight size={16} className="opacity-40" />
//             </NavLink>
//           ))}
//         </nav>

//         <div className="space-y-3 border-t border-slate-100 px-5 py-5">
//           <a href="tel:+916201300588" className="flex items-center gap-2.5 text-sm font-medium text-slate-600">
//             <FiPhone size={15} className="text-brand-orange" /> +91 6201300588
//           </a>
//           <a href="mailto:info@prithvirajlimited.com" className="flex items-center gap-2.5 text-sm font-medium text-slate-600">
//             <FiMail size={15} className="text-brand-orange" /> info@prithvirajlimited.com
//           </a>
//           <Link
//             to="/contact"
//             onClick={() => setIsOpen(false)}
//             className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-orangedark"
//           >
//             Get Quote <FiArrowRight size={15} />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }




import React, { useEffect, useState } from 'react';
import { FiMenu, FiX, FiPhone, FiMail, FiClock, FiMapPin, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assest/company logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products', dropdown: true },
  // { label: 'Solutions', to: '/solutions' },
  // { label: 'Quality', to: '/quality' },
  // { label: 'Downloads', to: '/downloads' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const linkClass = ({ isActive }) =>
    `relative flex items-center gap-1 py-1 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-brand-orange ${
      isActive ? 'text-brand-orange' : 'text-navy/90'
    }`;

  return (
    <header className="sticky top-0 z-50">
      {/* ---------------- TOP INFO BAR ---------------- */}
      <div className="relative hidden overflow-hidden bg-navy text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 font-medium text-white/90 transition hover:text-brand-orange">
              <FiPhone size={13} /> +91 6201300588
            </a>
            <a href="mailto:info@prithvirajcorporation.com" className="flex items-center gap-2 font-medium text-white/90 transition hover:text-brand-orange">
              <FiMail size={13} />info@prithvirajlimited.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 font-medium text-white/80">
              <FiClock size={13} /> Mon - Sat: 9:00 AM - 6:00 PM
            </span>
            <span className="flex items-center gap-2   font-medium text-white/80">
              <FiMapPin size={13} /> spaze I Tech Park, Sector-49,
Sohna Road Gurugram (HR)
            </span>
          </div>
        </div>

        {/* orange diagonal brochure tab */}
       
      </div>

      {/* ---------------- MAIN NAV ---------------- */}
      <div
        className={`border-b border-slate-200 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            scrolled ? 'py-2.5' : 'py-3'
          }`}
        >
          <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div
              className={`flex shrink-0 items-center justify-center rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 ${
                scrolled ? 'h-12 w-12' : 'h-16 w-16'
              }`}
            >
              <img
                src={logo}
                alt="Prithviraj Corporation Limited"
                className="h-full w-full object-contain p-1.5"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-extrabold leading-tight tracking-tight text-navy">
                Prithviraj Corporation <span className="text-brand-orange">Ltd.</span>
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                Providing Services Beyond The Ordinary
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.label} to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
                {link.dropdown && <FiChevronDown size={13} />}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-navy-600 hover:shadow-md"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange">
                <FiPhone size={12} />
              </span>
              Get A Quote
            </Link>
          </div>

          <button
            className="rounded-full border border-navy/20 p-2 text-navy transition hover:border-brand-orange hover:text-brand-orange lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* ---------------- MOBILE OVERLAY + SLIDE-IN PANEL ---------------- */}
      <div
        className={`fixed inset-0 z-40 bg-navy-900/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Prithviraj Corporation Limited" className="h-9 w-9 object-contain" />
            <p className="text-sm font-extrabold text-navy">Prithviraj Corp.</p>
          </div>
          <button
            className="rounded-full border border-navy/20 p-2 text-navy transition hover:border-brand-orange hover:text-brand-orange"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FiX size={18} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setIsOpen(false)}
              end={link.to === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive ? 'bg-brand-orange/10 text-brand-orange' : 'text-navy hover:bg-slate-50'
                }`
              }
            >
              {link.label}
              <FiChevronRight size={16} className="opacity-40" />
            </NavLink>
          ))}
        </nav>

        <div className="space-y-3 border-t border-slate-100 px-5 py-5">
          <a href="tel:+919876543210" className="flex items-center gap-2.5 text-sm font-medium text-slate-600">
            <FiPhone size={15} className="text-brand-orange" /> +91 98765 43210
          </a>
          <a href="mailto:info@prithvirajcorporation.com" className="flex items-center gap-2.5 text-sm font-medium text-slate-600">
            <FiMail size={15} className="text-brand-orange" /> info@prithvirajlimited.com
          </a>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-navy-600"
          >
            Get A Quote <FiPhone size={15} />
          </Link>
        </div>
      </div>
    </header>
  );
}