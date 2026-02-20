'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  label: string;
}

export function MetricCounter({ end, suffix = '', prefix = '', decimals = 0, duration = 2000, label }: Props) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-2xl sm:text-3xl font-bold text-white">
        {prefix}{count.toFixed(decimals)}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-400 mt-1 font-mono">{label}</div>
    </div>
  );
}
