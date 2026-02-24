import type { Metadata } from 'next';
import './globals.css';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Tushar Thokdar — ML Engineer | Satellite AI & Production ML',
  description:
    'ML engineer building production AI systems for Earth observation. Published models on HuggingFace, end-to-end satellite pipelines, and 437% performance gains over baselines.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Tushar Thokdar — ML Engineer | Satellite AI',
    description:
      'I build AI that sees the Earth from space and ship it to production. 2 published models, 3 end-to-end pipelines.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Tushar Thokdar — ML Engineer | Satellite AI',
    description:
      'I build AI that sees the Earth from space and ship it to production.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid-bg min-h-screen">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
