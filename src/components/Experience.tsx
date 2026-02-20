const experiences = [
  {
    company: 'Godel Space',
    role: 'AI Engineer',
    type: 'Contract',
    period: 'Dec 2024 — Feb 2026',
    location: 'Remote',
    what: 'Built production computer vision systems for satellite imagery — from data pipelines to model deployment.',
    highlights: [
      'Shipped AnySat multi-modal inference pipeline processing Sentinel-1/2 satellite data',
      'Built preprocessing pipelines for SAR-optical imagery fusion at scale',
      'Created reproducible PyTorch training scripts with experiment tracking',
      'Explored FastAPI for model serving APIs',
    ],
    result: 'Delivered production-ready multi-sensor satellite inference system for disaster monitoring.',
    color: 'primary' as const,
  },
  {
    company: 'Unify',
    role: 'AI Engineer',
    type: 'Contract',
    period: 'Aug 2024 — Dec 2024',
    location: 'Remote',
    what: 'Built a modular LLM integration framework for rapid provider switching and A/B testing.',
    highlights: [
      'Integrated GPT-4, Llama, and Claude APIs into prototype applications',
      'Built content filtering and guardrails reducing harmful outputs',
      'Created modular API architecture for comparing LLM providers on quality and cost',
      'Shipped prompt engineering tools and RAG pipelines',
    ],
    result: 'Delivered production-ready LLM framework enabling instant provider switching and A/B testing.',
    color: 'accent' as const,
  },
];

const dotColor = {
  primary: 'border-primary bg-primary/30',
  accent: 'border-accent bg-accent/30',
};

const textColor = {
  primary: 'text-primary',
  accent: 'text-accent',
};

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">04.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Where I&apos;ve Worked</h2>
            <div className="h-px flex-1 bg-surface-light/50 max-w-xs" />
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-surface-light/50" />
            <div className="space-y-12">
              {experiences.map((exp) => (
                <div key={exp.company} className="relative pl-12 sm:pl-16">
                  <div className={`absolute left-2.5 sm:left-4.5 top-1 w-3 h-3 rounded-full border-2 ${dotColor[exp.color]}`} />
                  <div className="card p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role} <span className="text-gray-500 font-normal text-sm">({exp.type})</span>
                        </h3>
                        <p className={`font-medium ${textColor[exp.color]}`}>{exp.company}</p>
                      </div>
                      <div className="text-sm text-gray-500 font-mono text-right">
                        <div>{exp.period}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 mb-4">{exp.what}</p>

                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-primary mt-1 shrink-0">&#9656;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="px-4 py-3 rounded-lg bg-dark/50 border border-accent/20">
                      <span className="text-xs font-mono text-accent uppercase tracking-wider">Result</span>
                      <p className="text-sm text-gray-300 mt-1">{exp.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
