'use client';

import React from 'react';

export function Logo() {
  return (
    <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-300">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer orbital ring 1 */}
        <path
          d="M15 50C15 30.67 30.67 15 50 15C69.33 15 85 30.67 85 50"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-primary/40"
        />
        
        {/* Outer orbital ring 2 */}
        <path
          d="M85 50C85 69.33 69.33 85 50 85C30.67 85 15 69.33 15 50"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="text-accent/40"
        />

        {/* Central Globe Core */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="url(#logo-gradient)"
          className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
        />

        {/* Latitude/Longitude lines to suggest a globe */}
        <ellipse
          cx="50"
          cy="50"
          rx="12"
          ry="28"
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          fill="none"
        />
        <line
          x1="22"
          y1="50"
          x2="78"
          y2="50"
          stroke="white"
          strokeWidth="1.5"
          strokeOpacity="0.3"
        />

        {/* Subtly integrated "TT" */}
        <text
          x="50%"
          y="58%"
          textAnchor="middle"
          fill="white"
          fontSize="24"
          fontWeight="900"
          fontFamily="monospace"
          className="select-none pointer-events-none drop-shadow-sm"
          style={{ letterSpacing: '-2px' }}
        >
          TT
        </text>

        {/* Satellite/Data node */}
        <circle cx="85" cy="50" r="4" fill="var(--color-accent)" className="animate-pulse" />

        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
