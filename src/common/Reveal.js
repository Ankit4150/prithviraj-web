import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal — fades/slides children into view the first time they cross into
 * the viewport. Pure IntersectionObserver, no external animation library.
 *
 * Props:
 *  - as: element tag to render (default 'div')
 *  - delay: ms delay before the animation starts (for staggering)
 *  - direction: 'up' | 'down' | 'left' | 'right' | 'none'
 *  - className: extra classes merged onto the wrapper
 */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  direction = 'up',
  className = '',
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Tag = as;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const offsets = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: '',
  };

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] duration-700 ${
        visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${offsets[direction] || offsets.up}`
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
