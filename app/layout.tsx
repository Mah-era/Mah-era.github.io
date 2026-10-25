import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Montserrat } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.GITHUB_PAGES === 'true'
      ? 'https://mah-era.github.io/Portfolio'
      : 'https://mahera-tasfee-portfolio.tagarttboy.chatgpt.site',
  ),
  title: 'Mahera Tasfee | Supply Chain, Operations & Analytics',
  description:
    '35+ projects across 8+ client accounts. BDT 1.4M+ in sponsorship commitments. NSU BBA candidate in Supply Chain Management and Marketing.',
  keywords: [
    'Mahera Tasfee',
    'supply chain management',
    'operations',
    'project coordination',
    'demand planning',
    'business analytics',
    'Power BI',
    'Dhaka',
  ],
  authors: [{ name: 'Mahera Tasfee' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: 'Mahera Tasfee | Supply Chain, Operations & Analytics',
    description:
      '35+ projects across 8+ client accounts. BDT 1.4M+ in sponsorship commitments. NSU BBA candidate in Supply Chain Management and Marketing.',
    siteName: 'Mahera Tasfee',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: 'Mahera Tasfee — Supply chain, analytics, and digital systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahera Tasfee | Supply Chain, Operations & Analytics',
    description:
      '35+ client projects, 8+ accounts and BDT 1.4M+ in sponsorship commitments. Supply chain, operations and analytics portfolio.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
