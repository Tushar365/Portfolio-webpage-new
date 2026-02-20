import Link from 'next/link';
import { projects } from '@/data/projects';

const statusColors: Record<string, string> = {
  Production: 'text-accent border-accent/30 bg-accent/10',
  Research: 'text-primary border-primary/30 bg-primary/10',
};

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">03.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What I&apos;ve Shipped</h2>
            <div className="h-px flex-1 bg-surface-light/50 max-w-xs" />
          </div>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Real projects with real results — published models, open-source pipelines, and measurable improvements.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="block group">
                <div className="card card-hover glow-border p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-2 py-0.5 text-xs font-mono rounded border ${statusColors[p.status]}`}>
                      {p.status === 'Production' ? 'Shipped' : 'Research'}
                    </span>
                    <div className="flex gap-2">
                      {p.github && (
                        <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      )}
                      {p.huggingface && (
                        <svg className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM8.5 14s1.5 2.5 3.5 2.5S15.5 14 15.5 14"/></svg>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-5 flex-1 line-clamp-3">{p.description}</p>

                  <div className="px-4 py-3 rounded-lg bg-dark/50 border border-surface-light/30 mb-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="font-mono text-xl font-bold text-white">{p.metric}</span>
                        {p.improvement && <span className="ml-2 text-xs font-mono text-accent">{p.improvement}</span>}
                      </div>
                      <span className="text-xs text-gray-500 font-mono">{p.metricLabel}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-mono text-gray-500 border border-surface-light/50 rounded">
                        {tag}
                      </span>
                    ))}
                    {p.tags.length > 4 && <span className="px-2 py-0.5 text-xs font-mono text-gray-600">+{p.tags.length - 4}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
