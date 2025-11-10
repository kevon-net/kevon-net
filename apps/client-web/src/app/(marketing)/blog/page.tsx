import React from 'react';
import LayoutPage from '@repo/components/layout/page';
import PartialPageBlog from '@/components/partial/page/blog';

export default async function Blog() {
  return (
    <LayoutPage>
      <PartialPageBlog />
    </LayoutPage>
  );
}
