import { notFound } from 'next/navigation';
import { marked } from 'marked';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Navbar } from '@/components/Navbar';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Need to unwrap params synchronously for metadata is tricky in Next 15.
  // We'll use a simpler approach.
  return {
    title: 'Project — Tushar Thokdar',
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const htmlContent = await marked(project.content);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-2 py-0.5 text-xs font-mono rounded border ${
                  project.status === 'Production'
                    ? 'text-accent border-accent/30 bg-accent/10'
                    : 'text-primary border-primary/30 bg-primary/10'
                }`}>
                  {project.status}
                </span>
                {project.improvement && (
                  <span className="px-2 py-0.5 text-xs font-mono rounded border border-highlight/30 text-highlight bg-highlight/10">
                    {project.improvement}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
            </div>

            <div className="card p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-mono text-3xl font-bold gradient-text">{project.metric}</div>
                <div className="text-sm text-gray-400 mt-1">{project.metricLabel}</div>
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm border border-surface-light text-gray-300 rounded-lg hover:border-primary/50 hover:text-white transition-all">
                    GitHub
                  </a>
                )}
                {project.huggingface && (
                  <a href={project.huggingface} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm bg-linear-to-r from-primary to-accent text-white rounded-lg hover:opacity-90 transition-opacity">
                    HuggingFace
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((tag) => (
                <span key={tag} className="badge-primary">{tag}</span>
              ))}
            </div>

            <article className="project-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </div>
      </main>
    </>
  );
}
