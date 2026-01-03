import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'PatternWidget | Design Patterns Demo',
  description:
    'A small Next.js application demonstrating core Design Patterns including Singleton, Observer, Strategy, Adapter, Decorator, and UML Relationships.',
  keywords: [
    'Design Patterns',
    'Singleton Pattern',
    'Observer Pattern',
    'Strategy Pattern',
    'Adapter Pattern',
    'Decorator Pattern',
    'Next.js',
    'Software Engineering',
    'UML',
  ],
  authors: [
    { name: 'Aya Almadhon' },
  ],
  creator: 'Aya Almadhon',
  applicationName: 'PatternWidget',
  openGraph: {
    title: 'PatternWidget',
    description:
      'Educational Next.js project demonstrating design patterns and UML relationships.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
