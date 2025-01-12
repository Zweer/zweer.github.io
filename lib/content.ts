import 'server-only';

import { createClient, Entry, EntryFieldTypes, EntrySkeletonType } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const blogPostType = 'blogPost';
export interface Author {
  name: string;
  image: string;
}
interface AuthorRaw {
  name: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
}
type AuthorSkeleton = EntrySkeletonType<AuthorRaw, 'author'>;
export interface Category {
  name: string;
  slug: string;
}
interface CategoryRaw {
  name: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
}
type CategorySkeleton = EntrySkeletonType<CategoryRaw, 'category'>;
export interface BlogPost {
  abstract: string;
  author?: Author;
  body: string;
  categories?: Category[];
  createdAt: string;
  image: string;
  recommendedPosts?: BlogPost[];
  slug: string;
  title: string;
  updatedAt: string;
}
interface BlogPostRaw {
  abstract: EntryFieldTypes.Text;
  author?: EntryFieldTypes.EntryLink<AuthorSkeleton>;
  body: EntryFieldTypes.Text;
  categories?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<CategorySkeleton>>;
  image: EntryFieldTypes.AssetLink;
  recommendedPosts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<BlogPostSkeleton>>;
  slug: EntryFieldTypes.Text;
  title: EntryFieldTypes.Text;
}
type BlogPostSkeleton = EntrySkeletonType<BlogPostRaw, 'blogPost'>;

function buildAuthor(author: Entry<AuthorSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS'>): Author {
  return {
    image: author.fields.image!.fields.file!.url,
    name: author.fields.name,
  };
}
function buildCategory(category: Entry<CategorySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS'>): Category {
  return {
    name: category.fields.name,
    slug: category.fields.slug,
  };
}
function buildBlogPost(entry: Entry<BlogPostSkeleton, 'WITHOUT_UNRESOLVABLE_LINKS'>): BlogPost {
  return {
    abstract: entry.fields.abstract,
    author: buildAuthor(entry.fields.author!),
    body: entry.fields.body,
    categories: entry.fields.categories
      ?.filter((category) => category !== undefined)
      .map(buildCategory),
    createdAt: entry.sys.createdAt,
    image: entry.fields.image!.fields.file!.url,
    recommendedPosts: entry.fields.recommendedPosts
      ?.filter((post) => post !== undefined)
      .map((post) => buildBlogPost(post!)),
    slug: entry.fields.slug,
    title: entry.fields.title,
    updatedAt: entry.sys.updatedAt,
  };
}

export async function getPosts(): Promise<BlogPost[]> {
  const entries = await client.withoutUnresolvableLinks.getEntries<BlogPostSkeleton>({
    content_type: blogPostType,
  });

  return entries.items.map(buildBlogPost);
}

export async function getPost(id: string): Promise<BlogPost> {
  const entry = await client.withoutUnresolvableLinks.getEntry<BlogPostSkeleton>(id);

  return buildBlogPost(entry);
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const entries = await client.withoutUnresolvableLinks.getEntries<BlogPostSkeleton>({
    content_type: blogPostType,
    'fields.slug': slug,
  });

  if (entries.items.length === 0) {
    throw new Error('Not found');
  }

  return buildBlogPost(entries.items[0]);
}
