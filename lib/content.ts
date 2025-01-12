import 'server-only';

import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const blogPostType = 'blogPost';
interface Author {
  contentTypeId: 'author';
  fields: {
    readonly name: contentful.EntryFieldTypes.Text;
  };
}
interface Category {
  contentTypeId: 'category';
  fields: {
    readonly name: contentful.EntryFieldTypes.Text;
    readonly slug: contentful.EntryFieldTypes.Text;
  };
}
interface BlogPost {
  contentTypeId: 'blogPost';
  fields: {
    readonly abstract: contentful.EntryFieldTypes.Text;
    readonly author?: contentful.EntryFieldTypes.EntryLink<Author>;
    readonly categories?: contentful.EntryFieldTypes.Array<
      contentful.EntryFieldTypes.EntryLink<Category>
    >;
    readonly body: contentful.EntryFieldTypes.Text;
    readonly media: contentful.EntryFieldTypes.AssetLink;
    readonly recommendedPosts?: contentful.EntryFieldTypes.Array<
      contentful.EntryFieldTypes.EntryLink<BlogPost>
    >;
    readonly slug: contentful.EntryFieldTypes.Text;
    readonly title: contentful.EntryFieldTypes.Text;
  };
}

export async function getPosts(): Promise<contentful.Entry<BlogPost>[]> {
  const entries = await client.getEntries<BlogPost>({
    content_type: blogPostType,
  });

  return entries.items;
}

export async function getPost(id: string): Promise<contentful.Entry<BlogPost>> {
  const entry = await client.getEntry<BlogPost>(id);
  const aaa = entry.fields.title;

  return entry;
}

export async function getPostBySlug(slug: string): Promise<contentful.Entry<BlogPost>> {
  const entries = await client.getEntries<BlogPost>({
    content_type: blogPostType,
    'fields.slug': slug,
  });

  if (entries.items.length === 0) {
    throw new Error('Not found');
  }

  return entries.items[0];
}
