'use client';

import { Avatar } from '@heroui/react';
import React from 'react';
import Markdown from 'react-markdown';

import { DateComponent } from '../Date';

import { CoverImage } from './CoverImage';
import { MoreStories } from './MoreStories';

import { BlogPost } from '@/lib/content';

export function Post({ post, morePosts }: { post: BlogPost; morePosts: BlogPost[] }) {
  return (
    <div>
      <article>
        <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
          {post.title}
        </h1>
        <div className="hidden md:mb-12 md:block">
          {post.author && <Avatar name={post.author.name} src={post.author.image} />}
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          <CoverImage post={post} />
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 block md:hidden">
            {post.author && <Avatar name={post.author.name} src={post.author.image} />}
          </div>
          <div className="mb-6 text-lg">
            <DateComponent dateString={post.createdAt} />
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="prose">
            <Markdown>{post.body}</Markdown>
          </div>
        </div>
      </article>

      {morePosts.length > 0 && (
        <div>
          <hr className="border-accent-2 mt-28 mb-24" />
          <MoreStories morePosts={morePosts} />
        </div>
      )}
    </div>
  );
}
