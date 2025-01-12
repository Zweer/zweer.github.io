import React from 'react';

import { getPosts } from '@/lib/content';
import { Intro } from '@/components/blog/Intro';
import { HeroPost } from '@/components/blog/HeroPost';
import { MoreStories } from '@/components/blog/MoreStories';

export default async function Blog() {
  const posts = await getPosts();
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <div className="container mx-auto px-5">
      <Intro />
      {heroPost && <HeroPost post={heroPost} />}
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
