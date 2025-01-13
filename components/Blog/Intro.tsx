import React from 'react';

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        My <s>first</s> blog.
      </h1>

      <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Coding, Creating, and Connecting: A Journey Through the World of Tech.
      </h2>
    </section>
  );
}
