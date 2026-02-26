import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: {
    default: 'Devansh Jaiswal | Full Stack Developer',
    template: '%s | Devansh Jaiswal',
  },
  description: 'Full Stack Developer specializing in building scalable, interactive, and high-performance web applications with modern technologies.',
  keywords: ['Full Stack Developer', 'Frontend Engineer', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'Web Development'],
  authors: [{ name: 'Devansh Jaiswal' }],
  creator: 'Devansh Jaiswal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devanshjaiswal.com', // Replace with actual domain
    title: 'Devansh Jaiswal | Full Stack Developer',
    description: 'Full Stack Developer specializing in building scalable, interactive, and high-performance web applications with modern technologies.',
    siteName: 'Devansh Jaiswal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devansh Jaiswal | Full Stack Developer',
    description: 'Full Stack Developer specializing in building scalable, interactive, and high-performance web applications with modern technologies.',
  },
  alternates: {
    canonical: 'https://devanshjaiswal.com', // Replace with actual domain
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Devansh Jaiswal',
              url: 'https://devanshjaiswal.com',
              jobTitle: 'Full Stack Developer',
              sameAs: [
                'https://github.com/jaisdevansh',
                'https://linkedin.com/in/devanshjaiswal',
              ],
            }),
          }}
        />
      </head>
      <body className={cn(inter.variable, outfit.variable, "bg-background text-foreground font-sans antialiased overflow-x-hidden")}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
