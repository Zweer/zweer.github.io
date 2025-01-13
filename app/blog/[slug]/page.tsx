import React from 'react';

import { getPostBySlug, getPosts } from '@/lib/content';
import { Post } from '@/components/blog/Post';

export default async function PostPage({ params: { slug } }: { params: { slug: string } }) {
  const post = await getPostBySlug(slug);
  const morePosts = (await getPosts()).filter((morePost) => morePost.slug !== slug);

  return <Post post={post} morePosts={morePosts} />;
}
