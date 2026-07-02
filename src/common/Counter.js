import React, { useEffect, useRef, useState } from 'react';

/**
 * Counter — animates a number from 0 up to `value` once it enters the
 * viewport. Lightweight, no external dependency.
 */
export default function Counter({ value, duration = 1600, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();

            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.floor(eased * value));
              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                setDisplay(value);
              }
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
