'use client';

import { useRef, useEffect, useState } from 'react';

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
};

export default function FadeInSection({
  children,
  className = '',
  rootMargin = '0px 0px -8% 0px',
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={`animate-fade-in ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
