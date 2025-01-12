'use client';

import { Avatar, Link } from '@nextui-org/react';
import React from 'react';

import { DateComponent } from '../Date';

import { CoverImage } from './CoverImage';

import { BlogPost } from '@/lib/content';

export function PostPreview({ post }: { post: BlogPost }) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage post={post} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={post.createdAt} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{post.abstract}</p>
      {post.author && <Avatar name={post.author.name} src={post.author.image} />}
    </div>
  );
}
