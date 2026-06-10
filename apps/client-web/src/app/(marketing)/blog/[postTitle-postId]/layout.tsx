import React from 'react';
import LayoutBody from '@repo/components/layout/body';
import { typeParams } from '../layout';
import { Metadata } from 'next';
import { PostRelations } from '@repo/types/models/post';
import { postsGet } from '@repo/handlers/requests/database/posts';
// import { samplePosts as posts } from '@/data/sample/posts';
import { extractUuidFromParam } from '@repo/utilities/url';

export const generateMetadata = async ({
  params,
}: {
  params: typeParams;
}): Promise<Metadata> => {
  const paramValues = (await params)['postTitle-postId'];
  const postId = extractUuidFromParam(paramValues);

  const { items: posts }: { items: PostRelations[] } = await postsGet();
  const post = ((posts || []) as PostRelations[]).find((p) => p.id == postId);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,

    alternates: {
      canonical: `https://kevon.net/blog/${paramValues}`,
    },

    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: `${post.title} featured image`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
};

export default function LayoutPost({
  children, // will be a page or nested layout
  // params,
}: {
  children: React.ReactNode;
  params: typeParams;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
