import { ParticleBackground } from './ParticleBackground';
import { MetricCounter } from './MetricCounter';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-dark pointer-events-none" />

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Available for remote roles worldwide</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 animate-slide-up tracking-tight">
            Tushar <span className="gradient-text">Thokdar</span>
          </h1>

          {/* Value prop - what a founder actually cares about */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium mb-6 animate-slide-up [animation-delay:0.1s] opacity-0 leading-snug max-w-3xl mx-auto">
            I build <span className="text-primary">AI that sees the Earth from space</span> and
            ship it to production.
          </p>

          {/* Proof line */}
          <p className="sm:text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-slide-up [animation-delay:0.2s] opacity-0 leading-relaxed">
            Satellite vision. Gen AI. RAG pipelines. Agentic workflows.
            Not just research — deployed, documented, and ready to scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-slide-up [animation-delay:0.3s] opacity-0">
            <a href="#projects" className="px-8 py-3.5 bg-linear-to-r from-primary to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25">
              See What I&apos;ve Built
            </a>
            <a href="#contact" className="px-8 py-3.5 border border-surface-light text-gray-300 font-semibold rounded-lg hover:border-primary/50 hover:text-white transition-all duration-200">
              Let&apos;s Talk
            </a>
          </div>

          {/* Social proof - startup language */}
          <div className="animate-slide-up [animation-delay:0.4s] opacity-0">
            <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-6 sm:px-10 py-5 rounded-2xl border border-surface-light/50 bg-surface/30 backdrop-blur-sm">
              <MetricCounter end={2} label="Shipped to Production" />
              <div className="w-px h-10 bg-surface-light/50 hidden sm:block" />
              <MetricCounter end={437} prefix="+" suffix="%" label="Performance Gain" />
              <div className="w-px h-10 bg-surface-light/50 hidden sm:block" />
              <MetricCounter end={3} label="Full Pipelines Built" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
