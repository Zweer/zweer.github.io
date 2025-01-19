'use client';

import { Image } from '@heroui/react';
import React from 'react';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] place-content-center items-center justify-items-center h-[calc(100vh-4rem)] p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          src="/images/home.png"
          alt="Zweer's personal homepage"
          className="sm:w-1/2"
          removeWrapper
        />

        <p className="text-center sm:text-left text-lg sm:text-xl">
          Hey there, I&apos;m Zweer! Welcome to my personal playground.
        </p>
      </main>
    </div>
  );
}
