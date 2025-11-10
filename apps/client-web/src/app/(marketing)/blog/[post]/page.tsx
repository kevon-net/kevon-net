import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import { typeParams } from '../layout';
import { samplePosts as posts } from '@/data/sample/posts';

export async function generateStaticParams() {
  // const { items: posts }: { items: PostRelations[] } = await postsGet();

  return posts.map((post) => ({
    post: post.id,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<typeParams>;
}) {
  const postId = (await params).post;

  if (!postId) return <>not found</>;

  return <LayoutPage>{postId}</LayoutPage>;
}
