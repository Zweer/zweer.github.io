'use client';

import { Image, Link } from '@heroui/react';
import React from 'react';

import { BlogPost } from '@/lib/content';

export function CoverImage({ post: { slug, title, image } }: { post: BlogPost }) {
  return (
    <div className="sm:mx-0">
      <Link href={`/blog/${slug}`} aria-label={title}>
        <Image
          alt={`Cover Image for ${title}`}
          className="hover:shadow-medium transition-shadow duration-200"
          src={image}
        />
      </Link>
    </div>
  );
}
