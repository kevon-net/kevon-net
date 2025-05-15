import React from 'react';
import IntroPage from '@/components/layout/intros/page';
import LayoutPage from '@/components/layout/page';
import PartialBlogList from '@/components/partials/page/blog-list';

export default async function Blog() {
  return (
    <LayoutPage>
      <IntroPage
        props={{
          title: 'Blog',
          desc: 'Thoughts, tips, and insights from my day-to-day experience as a developer.',
        }}
      />

      <PartialBlogList />
    </LayoutPage>
  );
}
