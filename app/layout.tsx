import type { Metadata } from 'next';
import React from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import { Providers } from './providers';

import { Header } from '@/components/Header';
import { auth } from '@/lib/auth';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Zweer's personal homepage",
  description: 'My personal playground',
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png' },
    { rel: 'manifest', url: '/favicon/site.webmanifest' },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  console.log(session);

  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header user={session?.user} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
