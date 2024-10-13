/** @format */
// 'use client';

import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import './globals.css';
import { lusitana, outfit } from '@/ui/fonts';
import Navbar from '@/components/custom/Navbar';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DATA } from '@/data/resume';
import Script from 'next/script';
import AdSense from '@/components/custom/AdSense';

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
  metadataBase: new URL('https://www.codewithtabish.com/'),
  title: {
    default: 'Tabish | Full Stack Developer',
    template: `%s | Tabish - Full Stack Developer`,
  },
  description:
    "Hi, I'm Tabish 👋 Full Stack Developer | Android & React Native Developer | Data Engineer | Adaptable Problem Solver.",
  keywords: [
    'Tabish',
    'Full Stack Developer',
    'Android Developer',
    'React Native Developer',
    'Web Development',
    'Backend Development',
    'Data Engineer',
    'Software Engineer',
    'Programming',
    'Technology',
    'Portfolio',
    'Code With Tabish',
    'Code With Talha',
    'Code With Talh',
    'Code with',
    'Talha',
    'Tabish Talha',
  ],
  openGraph: {
    title: 'Talha Tabish | Full Stack Developer',
    description:
      'I am a dedicated software engineer specializing in Android development, React Native, backend, and web development. Passionate about creating efficient, user-centric solutions.',
    url: 'https://www.codewithtabish.com/',
    siteName: 'Talha Tabish Portfolio',
    images: [
      {
        url: 'https://www.codewithtabish.com/og-image.jpg', // Portfolio's Open Graph image
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
    images: [
      'https://images.pexels.com/photos/6771740/pexels-photo-6771740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ], // Twitter-specific image
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
      <head>
        <meta
          name='google-adsense-account'
          content='ca-pub-5517689121320829'
        />

        <AdSense pId='pub-5517689121320829' />
      </head>
      {/* 5517689121320829 ' */}
      <body className={`${lusitana.className} antialiased`}>
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
