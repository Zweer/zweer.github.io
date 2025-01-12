'use client';

import React from 'react';
import { Avatar, Link } from '@nextui-org/react';
import { Entry } from 'contentful';

import { DateComponent } from '../Date';

import { CoverImage } from './CoverImage';

import { BlogPost } from '@/lib/content';

export function HeroPost({ post }: { post: BlogPost }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage post={post} />
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${post.slug}`} className="hover:underline">
              {post.title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={post.createdAt} />
          </div>
        </div>

        {post.author && (
          <div>
            <p className="text-lg leading-relaxed mb-4">{post.abstract}</p>
            <Avatar name={post.author?.name} src={post.author?.image} />
          </div>
        )}
      </div>
    </section>
  );
}
