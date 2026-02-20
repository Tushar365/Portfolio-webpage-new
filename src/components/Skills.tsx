const capabilities = [
  {
    title: 'Satellite AI Models',
    color: 'primary' as const,
    what: 'Fine-tune foundation models (Prithvi, AnySat) on satellite imagery for detection, segmentation, and monitoring.',
    tools: ['Prithvi EO-2.0', 'AnySat', 'UPerNet', 'ViT', 'JEPA', 'Sentinel-1/2'],
  },
  {
    title: 'End-to-End ML Pipelines',
    color: 'accent' as const,
    what: 'Build the full loop: data collection, preprocessing, training, evaluation, and deployment — not just notebooks.',
    tools: ['PyTorch', 'PyTorch Lightning', 'HuggingFace', 'TensorFlow', 'scikit-learn'],
  },
  {
    title: 'Geospatial Data Engineering',
    color: 'highlight' as const,
    what: 'Acquire and process satellite data at scale — multi-sensor fusion, temporal stacking, spectral analysis.',
    tools: ['Google Earth Engine', 'GDAL', 'Rasterio', 'GeoPandas', 'OpenCV'],
  },
  {
    title: 'Production Deployment',
    color: 'primary' as const,
    what: 'Ship models with proper docs, inference APIs, containerized environments, and model versioning.',
    tools: ['Docker', 'FastAPI', 'HuggingFace Hub', 'GCP', 'ONNX Runtime'],
  },
  {
    title: 'Gen AI & LLM Applications',
    color: 'highlight' as const,
    what: 'Build and ship LLM-powered products — from fine-tuning and RAG pipelines to agentic workflows and chatbots.',
    tools: ['LLM Fine-tuning', 'RAG Pipelines', 'Agentic AI', 'LangChain', 'Chatbots', 'Prompt Engineering'],
  },
  {
    title: 'Backend & Data',
    color: 'accent' as const,
    what: 'Build APIs, process data, and manage databases. Python-native with experience in SQL and real-time systems.',
    tools: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'Convex', 'NumPy', 'Pandas'],
  },
];

const colorMap = {
  primary: 'border-primary/30 text-primary bg-primary/10',
  accent: 'border-accent/30 text-accent bg-accent/10',
  highlight: 'border-highlight/30 text-highlight bg-highlight/10',
};

const titleColor = {
  primary: 'text-primary',
  accent: 'text-accent',
  highlight: 'text-highlight',
};

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="section-container">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-primary text-sm">02.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What I Build</h2>
            <div className="h-px flex-1 bg-surface-light/50 max-w-xs" />
          </div>
          <p className="text-gray-400 mb-10 max-w-2xl">
            Not just skills on a resume — these are things I&apos;ve actually shipped and can do for your team.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="card p-6 card-hover">
                <h3 className={`font-semibold text-sm mb-2 ${titleColor[cap.color]}`}>{cap.title}</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{cap.what}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.tools.map((tool) => (
                    <span key={tool} className={`px-2.5 py-0.5 text-xs font-mono rounded-full border ${colorMap[cap.color]}`}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
