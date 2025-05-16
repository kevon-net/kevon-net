import React from 'react';
import IntroPage from '@/components/layout/intros/page';
import LayoutPage from '@/components/layout/page';
import PartialBlogList from '@/components/partials/page/blog-list';
import { postsGet } from '@/services/database/posts';
import ErrorMain from '@/components/partials/errors/main';

export const revalidate = 3600;

export default async function Blog() {
  const { data: posts, error } = await postsGet();

  if (error) {
    console.error(error);
    return <ErrorMain />;
  }

  if (posts == null) {
    console.error('Posts is null');
    return <ErrorMain />;
  }

  return (
    <LayoutPage>
      <IntroPage
        props={{
          title: 'Blog',
          desc: 'Thoughts, tips, and insights from my day-to-day experience as a developer.',
        }}
      />

      <PartialBlogList posts={posts} />
    </LayoutPage>
  );
}
