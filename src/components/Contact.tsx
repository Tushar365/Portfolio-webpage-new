const links = [
  {
    label: 'Email',
    href: 'mailto:tusharthokdarp@gmail.com',
    value: 'tusharthokdarp@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Tushar365',
    value: 'Tushar365',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'HuggingFace',
    href: 'https://huggingface.co/Tushar365',
    value: 'Tushar365',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        <path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" d="M8.5 14s1.5 2.5 3.5 2.5 3.5-2.5 3.5-2.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    value: 'LinkedIn Profile',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <>
      <section id="contact" className="py-20 sm:py-28">
        <div className="section-container">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-12">
              <span className="font-mono text-primary text-sm">06.</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Let&apos;s Work Together</h2>
              <div className="h-px flex-1 bg-surface-light/50 max-w-xs" />
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">Ready to start immediately</span>
              </div>

              <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg mx-auto">
                I enjoy building things that matter. If you have an interesting problem
                or a role where I can make an impact, I&apos;d love to hear about it.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="card card-hover p-4 flex items-center gap-4 text-left"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{link.label}</p>
                      <p className="text-xs text-gray-500 font-mono">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-surface-light/30 py-8">
        <div className="section-container text-center">
          <p className="text-sm text-gray-600 font-mono">
            Built with <span className="text-primary">Next.js</span> + <span className="text-accent">Bun</span> &middot; Tushar Thokdar &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
}
