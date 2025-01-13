import React from 'react';

import { getPostBySlug, getPosts } from '@/lib/content';
import { Post } from '@/components/Blog/Post';

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const morePosts = (await getPosts()).filter((morePost) => morePost.slug !== slug);

  return <Post post={post} morePosts={morePosts} />;
}
