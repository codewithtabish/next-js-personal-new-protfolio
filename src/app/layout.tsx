/** @format */

import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import './globals.css';
import { lusitana, outfit } from '@/ui/fonts';
import Navbar from '@/components/custom/Navbar';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DATA } from '@/data/resume';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: 'Tabish | Full Stack Developer',
    template: `%s | Tabish - Full Stack Developer`,
  },
  description:
    "Hi, I'm Tabish 👋 Full Stack Developer | Android & React Native Developer | Data Engineer | Adaptable Problem Solver",
  openGraph: {
    title: 'Tabish | Full Stack Developer',
    description:
      'I am a dedicated software engineer specializing in Android development, React Native, backend, and web development. Passionate about creating efficient, user-centric solutions.',
    url: DATA.url,
    siteName: 'Tabish Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Your portfolio's open graph image
        width: 1200,
        height: 630,
        alt: 'Tabish Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Tabish | Full Stack Developer',
    card: 'summary_large_image',
    images: ['/twitter-image.jpg'], // Twitter-specific image for sharing
  },
  verification: {
    google: '', // Add your Google verification code
    yandex: '', // Add your Yandex verification code
  },
  icons: {
    icon: '/favone.png', // Your favicon
    apple: '/apple-touch-icon.png', // Apple Touch Icon for iOS devices
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }, // Manifest for web apps
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${lusitana.className} antialiased`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
        >
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
