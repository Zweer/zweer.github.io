import React from 'react';

import { getPosts } from '@/lib/content';
import { HeroPost } from '@/components/blog/HeroPost';
import { MoreStories } from '@/components/blog/MoreStories';

export default async function Blog() {
  const posts = await getPosts();
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <div>
      {heroPost && <HeroPost post={heroPost} />}
      {morePosts.length > 0 && <MoreStories morePosts={morePosts} />}
    </div>
  );
}
