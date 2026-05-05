import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import PartialPagePost from '@/components/partial/page/post';
import { typeParams } from '../layout';
import { extractUuidFromParam, linkify } from '@repo/utilities/url';
import { PostRelations } from '@repo/types/models/post';
import { postsGet } from '@repo/handlers/requests/database/posts';
// import { samplePosts as posts } from '@/data/sample/posts';

// export async function generateStaticParams() {
//   const { items: posts }: { items: PostRelations[] } = await postsGet();

//   return posts.map((post) => ({
//     'postTitle-postId': `${linkify(post.title)}-${post.id}`,
//   }));
// }

export default async function Post({
  params,
}: {
  params: Promise<typeParams>;
}) {
  const postId = extractUuidFromParam((await params)['postTitle-postId']);

  if (!postId) return null;

  return (
    <LayoutPage>
      <PartialPagePost props={{ postId }} />
    </LayoutPage>
  );
}
