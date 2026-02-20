export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-primary text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Who I Am</h2>
            <div className="h-px flex-1 bg-surface-light/50 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-5">
              <p className="text-gray-300 leading-relaxed text-lg sm:text-xl">
                I&apos;m the person who takes a{' '}
                <span className="text-primary font-medium">300M parameter foundation model</span>,
                fine-tunes it on satellite data, and gets it to{' '}
                <span className="text-accent font-medium">4x the baseline performance</span>{' '}
                — then publishes it with docs, inference code, and a reproducible pipeline.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I work across the full ML stack: satellite vision models, Gen AI fine-tuning,
                RAG pipelines, agentic workflows, and chatbots. From data collection to
                production deployment on HuggingFace — I don&apos;t just train models, I ship them.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Previously built LLM integration frameworks at <span className="text-gray-200">Unify</span> and
                satellite computer vision at <span className="text-gray-200">Godel Space</span>.
                Won <span className="text-highlight font-medium">1st place</span> at an edge AI hackathon
                deploying optimized models at 4x inference speed.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: 'Location', value: 'Remote-first, Kolkata' },
                  { label: 'Timezone', value: 'IST (flexible overlap)' },
                  { label: 'Work style', value: 'Ship fast, document well' },
                  { label: 'Availability', value: 'Immediate' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">{item.label}</span>
                    <span className="text-sm text-gray-300 mt-0.5">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-xl border-2 border-surface-light/50 bg-surface overflow-hidden transition-all duration-300 group-hover:border-primary/50">
                  <img
                    src="/profile.jpeg"
                    alt="Tushar Thokdar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-3 rounded-xl border border-primary/20 -z-10 transition-all duration-300 group-hover:border-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
