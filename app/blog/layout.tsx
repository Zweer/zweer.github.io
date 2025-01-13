import React from 'react';

import { Intro } from '@/components/Blog/Intro';

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto px-5 max-w-5xl">
      <Intro />
      {children}
    </div>
  );
}
