'use client';

import { Link } from '@heroui/react';
import React from 'react';
import Markdown from 'react-markdown';

import { DateComponent } from '../Date';

import { CoverImage } from './CoverImage';

import { BlogPost } from '@/lib/content';

export function HeroPost({ post }: { post: BlogPost }) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <CoverImage post={post} />
        </div>

        <div>
          <h3>
            <Link href={`/blog/${post.slug}`} className="hover:underline" size="lg">
              {post.title}
            </Link>
          </h3>

          <Markdown>{post.abstract}</Markdown>

          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={post.createdAt} />
          </div>
        </div>
      </div>
    </section>
  );
}
