import React from 'react';

import { PostPreview } from './PostPreview';

import { BlogPost } from '@/lib/content';

export function MoreStories({ morePosts }: { morePosts: BlogPost[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {morePosts.map((post) => (
          <PostPreview key={post.slug as string} post={post} />
        ))}
      </div>
    </section>
  );
}
