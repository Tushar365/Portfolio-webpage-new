const certifications = [
  { name: 'Python Programming Essentials', org: 'Rice University' },
  { name: 'A Crash Course in Data Science', org: 'Johns Hopkins University' },
  { name: 'Complete SQL Bootcamp', org: 'Udemy' },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">05.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Proof I Can Ship</h2>
            <div className="h-px flex-1 bg-surface-light/50 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hackathon win */}
            <div className="card p-6 border-highlight/30 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-highlight/10 border border-highlight/20 flex items-center justify-center text-2xl">
                  {'\u{1F3C6}'}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">1st Place — AI Startup Hackathon</h3>
                  <p className="text-sm text-highlight font-mono">Edge Runners</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Built and deployed an edge AI model in a hackathon setting — achieving
                <span className="text-white font-medium"> 85% of full-model accuracy at 4x the speed</span>.
                Fine-tuned Phi-3 with quantization and pruning for resource-constrained deployment.
              </p>
              <div className="flex gap-3">
                <span className="badge-highlight">Edge AI</span>
                <span className="badge-highlight">Model Optimization</span>
                <span className="badge-highlight">Docker</span>
              </div>
            </div>

            {/* Education + Certs */}
            <div className="space-y-6">
              {/* Education */}
              <div className="card p-5">
                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-3">Education</h3>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-sm">8.6</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">B.Tech Information Technology</p>
                    <p className="text-xs text-gray-500">Haldia Institute of Technology &middot; 2020-2024</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="card p-5">
                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-3">Certifications</h3>
                <div className="space-y-2.5">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-300">{cert.name}</p>
                        <p className="text-xs text-gray-600">{cert.org}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
