import React from 'react';
import Markdown from 'react-markdown';

import { getPosts } from '@/lib/content';

export default async function Blog() {
  const posts = await getPosts();

  console.log(JSON.stringify(posts));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] place-content-center items-center justify-items-center h-[calc(100vh-4rem)] p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {posts.map((post) => (
          <article key={post.sys.id} className="flex flex-col gap-4 items-center">
            <h2 className="text-2xl font-bold">{post.fields.title as string}</h2>
            <div className="text-center sm:text-left text-lg sm:text-xl">
              <Markdown>{post.fields.abstract as string}</Markdown>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
